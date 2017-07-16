'use strict'

// recreate graph here: http://www.graphviz.org/content/datastruct

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createDigraph('g', {
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

g.addNode('node3', Object.assign({}, nodeAttrs, {
  label: '<f0> 3.43322790286038071e-06|44.79998779296875|0',
  shape: 'record'
}))

g.addNode('node4', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc4380| <f1> | <f2> |2',
  shape: 'record'
}))

g.addNode('node5', Object.assign({}, nodeAttrs, {
  label: '<f0> (nil)| | |-1',
  shape: 'record'
}))

g.addNode('node6', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc4380| <f1> | <f2> |1',
  shape: 'record'
}))

g.addNode('node7', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc4380| <f1> | <f2> |2',
  shape: 'record'
}))

g.addNode('node8', Object.assign({}, nodeAttrs, {
  label: '<f0> (nil)| | |-1',
  shape: 'record'
}))

g.addNode('node9', Object.assign({}, nodeAttrs, {
  label: '<f0> (nil)| | |-1',
  shape: 'record'
}))

g.addNode('node10', Object.assign({}, nodeAttrs, {
  label: '<f0> (nil)| <f1> | <f2> |-1',
  shape: 'record'
}))

g.addNode('node11', Object.assign({}, nodeAttrs, {
  label: '<f0> (nil)| <f1> | <f2> |-1',
  shape: 'record'
}))

g.addNode('node12', Object.assign({}, nodeAttrs, {
  label: '<f0> 0xf7fc43e0| | |1',
  shape: 'record'
}))

g.addEdgeWithPorts('node0', 'f0', 'node1', 'f0', { id: 0 })
g.addEdgeWithPorts('node0', 'f1', 'node2', 'f0', { id: 1 })

g.addEdgeWithPorts('node1', 'f0', 'node3', 'f0', { id: 2 })
g.addEdgeWithPorts('node1', 'f1', 'node4', 'f0', { id: 3 })
g.addEdgeWithPorts('node1', 'f2', 'node5', 'f0', { id: 4 })
g.addEdgeWithPorts('node4', 'f0', 'node3', 'f0', { id: 5 })
g.addEdgeWithPorts('node4', 'f1', 'node6', 'f0', { id: 6 })
g.addEdgeWithPorts('node4', 'f2', 'node10', 'f0', { id: 7 })
g.addEdgeWithPorts('node6', 'f0', 'node3', 'f0', { id: 8 })
g.addEdgeWithPorts('node6', 'f1', 'node7', 'f0', { id: 9 })
g.addEdgeWithPorts('node6', 'f2', 'node9', 'f0', { id: 10 })
g.addEdgeWithPorts('node7', 'f0', 'node3', 'f0', { id: 11 })
g.addEdgeWithPorts('node7', 'f1', 'node1', 'f0', { id: 12 })
g.addEdgeWithPorts('node7', 'f2', 'node8', 'f0', { id: 13 })
g.addEdgeWithPorts('node10', 'f1', 'node11', 'f0', { id: 14 })
g.addEdgeWithPorts('node10', 'f2', 'node12', 'f0', { id: 15 })
g.addEdgeWithPorts('node11', 'f2', 'node1', 'f0', { id: 16 })

const lines = g.render()

utils.dotToDOTfile('gallery/datastruct', lines)
utils.dotToSVGfile('gallery/datastruct', lines)
