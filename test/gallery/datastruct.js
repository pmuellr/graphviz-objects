'use strict'

// recreate graph here: http://www.graphviz.org/content/datastruct

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('g', { digraph: true }, {
  rankdir: 'LR'
})

const nodeAttrs = {
  fontsize: 16,
  shape: 'ellipse'
}

g.addNode('node0', Object.assign({}, nodeAttrs, {
  label: '<f0> 0x10ba8| <f1>',
  shape: 'record'
}))

g.addNode('node1', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc4380| <f1> | <f2> |-1',
  shape: 'record'
}))

g.addNode('node2', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc44b8| | |2',
  shape: 'record'
}))

g.addEdge('node0:f0', 'node1:f0', { id: 0 })
g.addEdge('node0:f1', 'node2:f0', { id: 1 })

const lines = g.render()

utils.dotToDOTfile('gallery/datastruct', lines)
utils.dotToSVGfile('gallery/datastruct', lines)
