'use strict'

// recreate graph here: http://www.graphviz.org/content/crazy

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('unix', { digraph: true }, {
  fontname: 'Helvetica-Oblique',
  fontsize: 36,
  label: '\n\n\n\nObject Oriented Graphs\nStephen North, 3/19/93',
  size: '6,6'
})

const nodeAttrs = {
  shape: 'polygon',
  sides: 4,
  distortion: '0.0',
  orientation: '0.0',
  skew: '0.0',
  color: 'white',
  style: 'filled',
  fontname: 'Helvetica-Outline'
}

g.addNode('5th Edition', Object.assign({}, nodeAttrs, { sides: 9, distortion: 0.936354, orientation: 28, skew: -0.126818, color: 'salmon2' }))
g.addNode('6th Edition', Object.assign({}, nodeAttrs, { sides: 5, distortion: 0.238792, orientation: 11, skew: 0.995935, color: 'deepskyblue' }))

g.addEdge('5th Edition', '6th Edition')

const lines = g.render()

utils.dotToDOTfile('gallery/crazy', lines)
utils.dotToSVGfile('gallery/crazy', lines)
