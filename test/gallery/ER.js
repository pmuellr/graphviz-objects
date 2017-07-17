'use strict'

// recreate graph here: http://www.graphviz.org/content/ER

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('ER', {
  label: '\n\nEntity Relation Diagram\ndrawn by NEATO',
  fontsize: 20
})

g.addNode('course', { shape: 'box' })
g.addNode('institute', { shape: 'box' })
g.addNode('student', { shape: 'box' })

g.addNode('name0', { shape: 'ellipse', label: 'name' })
g.addNode('name1', { shape: 'ellipse', label: 'name' })
g.addNode('name2', { shape: 'ellipse', label: 'name' })

g.addNode('code', { shape: 'ellipse' })
g.addNode('grade', { shape: 'ellipse' })
g.addNode('number', { shape: 'ellipse' })

g.addNode('C-I', { shape: 'diamond', style: 'filled', color: 'lightgrey' })
g.addNode('S-C', { shape: 'diamond', style: 'filled', color: 'lightgrey' })
g.addNode('S-I', { shape: 'diamond', style: 'filled', color: 'lightgrey' })

g.addEdge('name0', 'course')
g.addEdge('code', 'course')
g.addEdge('course', 'C-I', { label: 'n', len: 1.00 })
g.addEdge('C-I', 'institute', { label: '1', len: 1.00 })
g.addEdge('institute', 'name1')
g.addEdge('institute', 'S-I', { label: '1', len: 1.00 })
g.addEdge('S-I', 'student', { label: 'n', len: 1.00 })
g.addEdge('student', 'grade')
g.addEdge('student', 'name2')
g.addEdge('student', 'number')
g.addEdge('student', 'S-C', { label: 'm', len: 1.00 })
g.addEdge('S-C', 'course', { label: 'n', len: 1.00 })

const lines = g.render()

utils.dotToDOTfile('gallery/ER', lines)
utils.dotToSVGfile('gallery/ER', lines, 'neato')
