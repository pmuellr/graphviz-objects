'use strict'

// recreate graph here: http://www.graphviz.org/content/hello

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createDigraph('G')

g.addEdge('Hello', 'World')

const lines = g.render()

utils.dotToDOTfile('gallery/hello', lines)
utils.dotToSVGfile('gallery/hello', lines)
