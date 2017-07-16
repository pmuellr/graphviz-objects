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

const node0 = g.addNode('node0', Object.assign({}, nodeAttrs, {
  label: '<f0> 0x10ba8| <f1>',
  shape: 'record'
}))

const node1 = g.addNode('node1', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc4380| <f1> | <f2> |-1',
  shape: 'record'
}))

const node2 = g.addNode('node2', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc44b8| | |2',
  shape: 'record'
}))

// TODO add port support

g.addEdge(node0, node1, { id: 0 })
g.addEdge(node0, node2, { id: 1 })

const lines = g.render()

utils.dotToDOTfile('gallery/datastruct', lines)
utils.dotToSVGfile('gallery/datastruct', lines)
