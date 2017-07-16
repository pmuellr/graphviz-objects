'use strict'

const pkg = require('./package.json')

exports.version = pkg.version
exports.createGraph = createGraph
exports.htmlString = htmlString

function createGraph (name, options, attrs) {
  return new Graph(name, options, attrs)
}

function htmlString (string) {
  return new HtmlString(string)
}

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
class NamedObject {
  constructor (name, attrs) {
    this._type = null
    this._name = `${name || getAnonName()}`
    this._attrs = attrs || {}
  }

  get name () {
    return this._name
  }

  get type () {
    return this._type
  }

  get attrs () {
    return this._attrs
  }

  get hasAttrs () {
    return Object.keys(this._attrs).length !== 0
  }
}

class Graph extends NamedObject {
  constructor (name, options, attrs) {
    super(name, attrs)

    if (options == null) options = {}

    this._type = options.digraph ? 'digraph' : 'graph'
    this._children = []
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
    const object = new Edge(source, target, attrs)
    this._children.push(object)
    return object
  }

  render (lines, opts) {
    if (lines == null) lines = []
    if (opts == null) {
      opts = {
        indent: 0,
        digraph: this.type === 'digraph'
      }
    }

    let line

    line = `${this._type} ${toID(this.name)} {`
    addLine(lines, line, opts.indent)

    opts.indent++
    for (let name in this._attrs) {
      const val = this._attrs[name]
      if (val == null) {
        addLine(lines, toID(name), opts.indent)
      } else {
        addLine(lines, `${toID(name)} = ${toID(val)}`, opts.indent)
      }
    }
    opts.indent--

    if (this.hasAttrs && this._children.length !== 0) lines.push('')

    opts.indent++
    for (let child of this._children) {
      child.render(lines, opts)
      lines.push('')
    }
    opts.indent--

    popLine(lines)

    addLine(lines, '}', opts.indent)

    if (opts.indent === 0) return lines.join('\n')
  }
}

class Subgraph extends Graph {
  constructor (name, attrs) {
    super(name, {}, attrs)
    this._type = 'subgraph'
  }

  get isValidEdgeNode () {
    return true
  }
}

class Node extends NamedObject {
  constructor (name, attrs) {
    super(name, attrs)
    this._type = 'node'
  }

  get isValidEdgeNode () {
    return true
  }

  render (lines, opts) {
    addLine(lines, `${toID(this._name)} [`, opts.indent)

    opts.indent++
    for (let name in this.attrs) {
      const val = this.attrs[name]
      addLine(lines, `${toID(name)} = ${toID(val)}`, opts.indent)
    }
    opts.indent--

    addLine(lines, ']', opts.indent)
  }
}

class Edge extends NamedObject {
  constructor (source, target, attrs) {
    super(null, attrs)

    if (source == null) throw new Error(`source must not be null`)
    if (target == null) throw new Error('target must not be null')

    if (!source.isValidEdgeNode) throw new Error(`source is not valid: ${source}`)
    if (!target.isValidEdgeNode) throw new Error(`target is not valid: ${source}`)

    this._type = 'edge'
    this._source = source
    this._target = target
  }

  get source () {
    return this._source
  }

  get target () {
    return this._target
  }

  render (lines, opts) {
    if (opts == null) opts = {}

    const op = opts.digraph ? '->' : '--'
    let line = `${toID(this.source.name)} ${op} ${toID(this.target.name)}`
    if (this.hasAttrs) line = `${line} [`
    addLine(lines, line, opts.indent)

    opts.indent++
    for (let name in this.attrs) {
      const val = this.attrs[name]
      addLine(lines, `${toID(name)} = ${toID(val)}`, opts.indent)
    }
    opts.indent--

    if (this.hasAttrs) addLine(lines, `]`, opts.indent)
  }
}

function addLine (lines, line, indent) {
  lines.push(`${getIndent(indent)}${line}`)
}

function popLine (lines) {
  return lines.pop()
}

function getIndent (n) {
  let indent = ''
  while (n > 0) {
    n--
    indent += '    '
  }
  return indent
}

// get an name for something not named
let AnonNameCount = 0

function getAnonName () {
  AnonNameCount++
  return `unnamed-${AnonNameCount}`
}

// return a valid ID string
const IdentRegex = /^[a-zA-Z_]+\w*$/
const NumberRegex = /^-?((\.\d+)|(\d+(\.\d*)?))$/

function toID (s) {
  // html strings
  if (s.isHtmlString) return `<${s}>`
  if (IdentRegex.test(s)) return s

  // number-ish
  if (NumberRegex.test(s)) return s

  // ident-ish
  if (IdentRegex.test(s)) return s

  // string that doesn't need quotes
  return `"${s.replace('"', '\\"')}"`
}
