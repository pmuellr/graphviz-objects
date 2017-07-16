'use strict'

// recreate graph here: http://www.graphviz.org/content/fsm

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('finite_state_machine', { digraph: true }, {
  rankdir: 'LR',
  size: '8,5'
})

const attrCircle = { shape: 'circle' }
const attrDoubleCircle = { shape: 'doublecircle' }

const lr0 = g.addNode('LR_0', attrDoubleCircle)
const lr3 = g.addNode('LR_3', attrDoubleCircle)
const lr4 = g.addNode('LR_4', attrDoubleCircle)
const lr8 = g.addNode('LR_8', attrDoubleCircle)
const lr1 = g.addNode('LR_1', attrCircle)
const lr2 = g.addNode('LR_2', attrCircle)
const lr5 = g.addNode('LR_5', attrCircle)
const lr6 = g.addNode('LR_6', attrCircle)
const lr7 = g.addNode('LR_7', attrCircle)

g.addEdge(lr0, lr2, { label: 'SS(B)' })
g.addEdge(lr0, lr1, { label: 'SS(S)' })
g.addEdge(lr1, lr3, { label: 'S($end)' })
g.addEdge(lr2, lr6, { label: 'SS(b)' })
g.addEdge(lr2, lr5, { label: 'SS(a)' })
g.addEdge(lr2, lr4, { label: 'S(A)' })
g.addEdge(lr5, lr7, { label: 'S(b)' })
g.addEdge(lr5, lr5, { label: 'S(a)' })
g.addEdge(lr6, lr6, { label: 'S(b)' })
g.addEdge(lr6, lr5, { label: 'S(a)' })
g.addEdge(lr7, lr8, { label: 'S(b)' })
g.addEdge(lr7, lr5, { label: 'S(a)' })
g.addEdge(lr8, lr6, { label: 'S(b)' })
g.addEdge(lr8, lr5, { label: 'S(a)' })

const lines = g.render()

utils.dotToDOTfile('gallery/fsm', lines)
utils.dotToSVGfile('gallery/fsm', lines)
