'use strict'

// recreate graph here: http://www.graphviz.org/content/fsm

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('G')

g.addEdge('run', 'intr')
g.addEdge('intr', 'runbl')
g.addEdge('runbl', 'run')
g.addEdge('run', 'kernel')
g.addEdge('kernel', 'zombie')
g.addEdge('kernel', 'sleep')
g.addEdge('kernel', 'runmem')
g.addEdge('sleep', 'swap')
g.addEdge('swap', 'runswap')
g.addEdge('runswap', 'new')
g.addEdge('runswap', 'runmem')
g.addEdge('new', 'runmem')
g.addEdge('sleep', 'runmem')

const lines = g.render()

utils.dotToDOTfile('gallery/process', lines)
utils.dotToSVGfile('gallery/process', lines)
