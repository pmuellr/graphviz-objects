'use strict'

// recreate graph here: http://www.graphviz.org/content/fsm

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createDigraph('finite_state_machine', {
  rankdir: 'LR',
  size: '8,5'
})

const attrCircle = { shape: 'circle' }
const attrDoubleCircle = { shape: 'doublecircle' }

g.addNode('LR_0', attrDoubleCircle)
g.addNode('LR_3', attrDoubleCircle)
g.addNode('LR_4', attrDoubleCircle)
g.addNode('LR_8', attrDoubleCircle)
g.addNode('LR_1', attrCircle)
g.addNode('LR_2', attrCircle)
g.addNode('LR_5', attrCircle)
g.addNode('LR_6', attrCircle)
g.addNode('LR_7', attrCircle)

g.addEdge('LR_0', 'LR_2', { label: 'SS(B)' })
g.addEdge('LR_0', 'LR_1', { label: 'SS(S)' })
g.addEdge('LR_1', 'LR_3', { label: 'S($end)' })
g.addEdge('LR_2', 'LR_6', { label: 'SS(b)' })
g.addEdge('LR_2', 'LR_5', { label: 'SS(a)' })
g.addEdge('LR_2', 'LR_4', { label: 'S(A)' })
g.addEdge('LR_5', 'LR_7', { label: 'S(b)' })
g.addEdge('LR_5', 'LR_5', { label: 'S(a)' })
g.addEdge('LR_6', 'LR_6', { label: 'S(b)' })
g.addEdge('LR_6', 'LR_5', { label: 'S(a)' })
g.addEdge('LR_7', 'LR_8', { label: 'S(b)' })
g.addEdge('LR_7', 'LR_5', { label: 'S(a)' })
g.addEdge('LR_8', 'LR_6', { label: 'S(b)' })
g.addEdge('LR_8', 'LR_5', { label: 'S(a)' })

const lines = g.render()

utils.dotToDOTfile('gallery/fsm', lines)
utils.dotToSVGfile('gallery/fsm', lines)
