'use strict'

const pkg = require('./package.json')

// the package version
exports.version = pkg.version

// create a top-level graph
exports.createGraph = createGraph

// create a top-level digraph
exports.createDigraph = createDigraph

// create a string to be rendered as HTML
exports.htmlString = htmlString

// create a graph
function createGraph (name, attrs) {
  return new Graph(name, attrs)
}

// create a digraph
function createDigraph (name, attrs) {
  return new Digraph(name, attrs)
}

// create an string to be rendered as an HTML string
function htmlString (string) {
  return new HtmlString(string)
}

// an object that has a type and attributes
class TypedAttrObject {
  constructor (type, attrs) {
    if (type == null) throw new Error('no type specified')

    if (attrs == null) attrs = {}
    if (typeof attrs !== 'object') throw new Error('attrs must be an object')

    this._type = `${type}`
    this._attrs = attrs
    this._hasAttrs = Object.keys(this._attrs).length !== 0
  }

  get type () {
    return this._type
  }

  get attrs () {
    return this._attrs
  }

  get hasAttrs () {
    return this._hasAttrs
  }

  _renderAttrs (writer) {
    for (let name in this._attrs) {
      const value = this._attrs[name]

      writer.write(`${toID(name)} = ${toID(value)}`)
    }
  }

  _render (writer, primaryLine) {
    // if no attrs, just write the line
    if (!this.hasAttrs) {
      writer.write(primaryLine)
      return
    }

    // has attributes, written in brackets, indented
    writer.write(`${primaryLine} [`)
    writer.indent()
    this._renderAttrs(writer)
    writer.outdent()
    writer.write(']')
  }
}

class NamedTypedAttrObject extends TypedAttrObject {
  constructor (name, type, attrs) {
    if (name == null) throw new Error('no name specified')

    super(type, attrs)

    this._name = `${name}`
  }

  get name () {
    return this._name
  }
}

class AbstractGraph extends NamedTypedAttrObject {
  constructor (name, type, attrs) {
    super(name, type, attrs)
    this._children = []
  }

  get isGraph () {
    return true
  }

  get children () {
    return this._children
  }

  get hasChildren () {
    return this._children.length !== 0
  }

  addSubgraph (name, attrs) {
    const object = new Subgraph(name, attrs)
    this._children.push(object)
    return object
  }

  addNode (name, attrs) {
    const object = new Node(name, attrs)
    this._children.push(object)
    return object
  }

  addEdge (source, target, attrs) {
    return this.addEdgeWithPorts(source, null, target, null, attrs)
  }

  addEdgeWithPorts (source, sourcePort, target, targetPort, attrs) {
    const object = new Edge(source, sourcePort, target, targetPort, attrs)
    this._children.push(object)
    return object
  }

  _render (writer) {
    writer.write(`${this.type} ${toID(this.name)} {`)
    writer.indent()

    this._renderAttrs(writer)

    if (this.hasAttrs && this.hasChildren) writer.write('')

    for (let child of this.children) {
      child._render(writer)
      writer.write('')
    }

    // remove last blank line written
    if (this.hasChildren) writer.unwrite()

    writer.outdent()
    writer.write('}')
  }
}

class TopLevelGraph extends AbstractGraph {
  constructor (name, type, attrs, edgeOperator) {
    super(name, type, attrs)

    this._edgeOperator = edgeOperator
  }

  render () {
    const writer = new IndentingWriter({
      edgeOperator: this._edgeOperator
    })

    super._render(writer)

    return writer.lines
  }
}

class Graph extends TopLevelGraph {
  constructor (name, attrs) {
    super(name, 'graph', attrs, '--')
  }
}

class Digraph extends TopLevelGraph {
  constructor (name, attrs) {
    super(name, 'digraph', attrs, '->')
  }
}

class Subgraph extends AbstractGraph {
  constructor (name, attrs) {
    super(name, 'subgraph', attrs)
  }
}

class Node extends NamedTypedAttrObject {
  constructor (name, attrs) {
    super(name, 'node', attrs)
  }

  _render (writer) {
    super._render(writer, toID(this.name))
  }
}

class Edge extends TypedAttrObject {
  constructor (source, sourcePort, target, targetPort, attrs) {
    super('edge', attrs)

    if (source == null) throw new Error(`source must not be null`)
    if (target == null) throw new Error('target must not be null')

    this._source = `${source}`
    this._target = `${target}`

    this._sourcePort = sourcePort == null ? null : `${sourcePort}`
    this._targetPort = targetPort == null ? null : `${targetPort}`
  }

  get source () {
    return this._source
  }

  get target () {
    return this._target
  }

  _render (writer) {
    const parts = []
    parts.push(toID(this.source))
    if (this._sourcePort != null) parts.push(`:${this._sourcePort}`)
    parts.push(' ')
    parts.push(writer.edgeOperator)
    parts.push(' ')
    parts.push(toID(this.target))
    if (this._targetPort != null) parts.push(`:${this._targetPort}`)

    const primaryLine = parts.join('')
    super._render(writer, primaryLine)
  }
}

// a string that should be rendered as an HTML string
class HtmlString {
  constructor (string) {
    this.string = string
  }

  get isHtmlString () {
    return true
  }

  toString () {
    return this.string.toString()
  }
}

class IndentingWriter {
  constructor (opts) {
    this._lines = []
    this._indent = 0
    this._opts = opts || {}
    this._edgeOperator = this._opts.edgeOperator
  }

  get edgeOperator () {
    return this._edgeOperator
  }

  write (line) {
    line = `${getIndentation(this._indent)}${line}`
    this._lines.push(line)
  }

  unwrite () {
    this._lines.pop()
  }

  indent () {
    this._indent++
  }

  outdent () {
    this._indent--
  }

  get lines () {
    return this._lines.join('\n')
  }
}

// indentation cache
const IndentationCache = {
  0: ''
}

function getIndentation (n) {
  let indentation = IndentationCache[n]
  if (indentation != null) return indentation

  indentation = getIndentation(n - 1) + '  '
  IndentationCache[n] = indentation

  return indentation
}

// return a valid ID string
const IdentRegex = /^[a-zA-Z_]+\w*$/
const NumberRegex = /^-?((\.\d+)|(\d+(\.\d*)?))$/

// given a string (or HTMLstring), return GraphViz ID value
function toID (s) {
  if (s == null) return null

  // html strings
  if (s.isHtmlString) return `<${s}>`

  // ident-ish
  if (IdentRegex.test(s)) return s

  // number-ish
  if (NumberRegex.test(s)) return s

  // string that needs quotes, escaped inside
  return `"${s.replace('"', '\\"')}"`
}
