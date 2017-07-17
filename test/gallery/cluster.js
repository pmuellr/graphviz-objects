'use strict'

// recreate graph here: http://www.graphviz.org/content/cluster

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createDigraph('G')

const cluster0 = g.addSubgraph('cluster_0', {
  style: 'filled',
  color: 'lightgrey',
  label: 'process #1'
})

const cluster0Attrs = { style: 'filled', color: 'white' }

cluster0.addNode('a0', cluster0Attrs)
cluster0.addNode('a1', cluster0Attrs)
cluster0.addNode('a2', cluster0Attrs)
cluster0.addNode('a3', cluster0Attrs)

cluster0.addEdge('a0', 'a1')
cluster0.addEdge('a1', 'a2')
cluster0.addEdge('a2', 'a3')

const cluster1 = g.addSubgraph('cluster_1', {color: 'blue', label: 'process #2'})

const cluster1Attrs = { style: 'filled' }

cluster1.addNode('b0', cluster1Attrs)
cluster1.addNode('b1', cluster1Attrs)
cluster1.addNode('b2', cluster1Attrs)
cluster1.addNode('b3', cluster1Attrs)

cluster1.addEdge('b0', 'b1')
cluster1.addEdge('b1', 'b2')
cluster1.addEdge('b2', 'b3')

g.addNode('start', { shape: 'Mdiamond' })
g.addNode('end', { shape: 'Msquare' })

g.addEdge('start', 'a0')
g.addEdge('start', 'b0')
g.addEdge('a1', 'b3')
g.addEdge('b2', 'a3')
g.addEdge('a3', 'a0')
g.addEdge('a3', 'end')
g.addEdge('b3', 'end')

const lines = g.render()

utils.dotToDOTfile('gallery/cluster', lines)
utils.dotToSVGfile('gallery/cluster', lines)
