'use strict'

const utils = require('./lib/utils')

const gvo = require('..')

const runTest = utils.createTestRunner(__filename)

// Check the package name.
runTest(function basic (t) {
  const g = gvo.createGraph('main_graph', { digraph: true }, {
    rank: 'LR'
  })

  const sg = g.addSubgraph('subgraph_a', {
    rank: 'TB'
  })

  const a = g.addNode('node_a', {
    shape: 'circle'
  })

  const b = g.addNode('node_b', {
    shape: 'square'
  })

  g.addEdge(a, b, {
    label: gvo.htmlString(`${a.name} -- ${b.name}`)
  })

  const na = sg.addNode('node_a_a', {
    shape: 'circle'
  })

  const nb = sg.addNode('node_a_b', {
    shape: 'square'
  })

  sg.addEdge(na, nb, {
    label: `${na.name} -- ${nb.name}`
  })

  g.addEdge(a, na)
  g.addEdge(a, nb)
  g.addEdge(b, na)
  g.addEdge(b, nb)

  const lines = g.render()

  utils.dotToDOTfile('basic', lines)
  utils.dotToSVGfile('basic', lines)

  t.end()
})
