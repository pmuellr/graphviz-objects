'use strict'

// recreate graph here: http://www.graphviz.org/content/crazy

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createDigraph('unix', {
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
g.addNode('PWB 1.0', Object.assign({}, nodeAttrs, { sides: 8, distortion: 0.019636, orientation: 79, skew: -0.440424, color: 'goldenrod2' }))
g.addNode('LSX', Object.assign({}, nodeAttrs, { sides: 9, distortion: -0.698271, orientation: 22, skew: -0.195492, color: 'burlywood2' }))
g.addNode('1 BSD', Object.assign({}, nodeAttrs, { sides: 7, distortion: 0.265084, orientation: 26, skew: 0.403659, color: 'gold1' }))
g.addNode('Mini Unix', Object.assign({}, nodeAttrs, { distortion: 0.039386, orientation: 2, skew: -0.461120, color: 'greenyellow' }))
g.addNode('Wollongong', Object.assign({}, nodeAttrs, { sides: 5, distortion: 0.228564, orientation: 63, skew: -0.062846, color: 'darkseagreen' }))
g.addNode('Interdata', Object.assign({}, nodeAttrs, { distortion: 0.624013, orientation: 56, skew: 0.101396, color: 'dodgerblue1' }))
g.addNode('Unix/TS 3.0', Object.assign({}, nodeAttrs, { sides: 8, distortion: 0.731383, orientation: 43, skew: -0.824612, color: 'thistle2' }))
g.addNode('PWB 2.0', Object.assign({}, nodeAttrs, { sides: 6, distortion: 0.592100, orientation: 34, skew: -0.719269, color: 'darkolivegreen3' }))
g.addNode('7th Edition', Object.assign({}, nodeAttrs, { sides: 10, distortion: 0.298417, orientation: 65, skew: 0.310367, color: 'chocolate' }))
g.addNode('8th Edition', Object.assign({}, nodeAttrs, { distortion: -0.997093, orientation: 50, skew: -0.061117, color: 'turquoise3' }))
g.addNode('32V', Object.assign({}, nodeAttrs, { sides: 7, distortion: 0.878516, orientation: 19, skew: 0.592905, color: 'steelblue3' }))
g.addNode('V7M', Object.assign({}, nodeAttrs, { sides: 10, distortion: -0.960249, orientation: 32, skew: 0.460424, color: 'navy' }))
g.addNode('Ultrix-11', Object.assign({}, nodeAttrs, { sides: 10, distortion: -0.633186, orientation: 10, skew: 0.333125, color: 'darkseagreen4' }))
g.addNode('Xenix', Object.assign({}, nodeAttrs, { sides: 8, distortion: -0.337997, orientation: 52, skew: -0.760726, color: 'coral' }))
g.addNode('UniPlus+', Object.assign({}, nodeAttrs, { sides: 7, distortion: 0.788483, orientation: 39, skew: -0.526284, color: 'darkolivegreen3' }))
g.addNode('9th Edition', Object.assign({}, nodeAttrs, { sides: 7, distortion: 0.138690, orientation: 55, skew: 0.554049, color: 'coral3' }))
g.addNode('2 BSD', Object.assign({}, nodeAttrs, { sides: 7, distortion: -0.010661, orientation: 84, skew: 0.179249, color: 'blanchedalmond' }))
g.addNode('2.8 BSD', Object.assign({}, nodeAttrs, { distortion: -0.239422, orientation: 44, skew: 0.053841, color: 'lightskyblue1' }))
g.addNode('2.9 BSD', Object.assign({}, nodeAttrs, { distortion: -0.843381, orientation: 70, skew: -0.601395, color: 'aquamarine2' }))
g.addNode('3 BSD', Object.assign({}, nodeAttrs, { sides: 10, distortion: 0.251820, orientation: 18, skew: -0.530618, color: 'lemonchiffon' }))
g.addNode('4 BSD', Object.assign({}, nodeAttrs, { sides: 5, distortion: -0.772300, orientation: 24, skew: -0.028475, color: 'darkorange1' }))
g.addNode('4.1 BSD', Object.assign({}, nodeAttrs, { distortion: -0.226170, orientation: 38, skew: 0.504053, color: 'lightyellow1' }))
g.addNode('4.2 BSD', Object.assign({}, nodeAttrs, { sides: 10, distortion: -0.807349, orientation: 50, skew: -0.908842, color: 'darkorchid4' }))
g.addNode('4.3 BSD', Object.assign({}, nodeAttrs, { sides: 10, distortion: -0.030619, orientation: 76, skew: 0.985021, color: 'lemonchiffon2' }))
g.addNode('Ultrix-32', Object.assign({}, nodeAttrs, { distortion: -0.644209, orientation: 21, skew: 0.307836, color: 'goldenrod3' }))
g.addNode('PWB 1.2', Object.assign({}, nodeAttrs, { sides: 7, distortion: 0.640971, orientation: 84, skew: -0.768455, color: 'cyan' }))
g.addNode('USG 1.0', Object.assign({}, nodeAttrs, { distortion: 0.758942, orientation: 42, skew: 0.039886, color: 'blue' }))
g.addNode('CB Unix 1', Object.assign({}, nodeAttrs, { sides: 9, distortion: -0.348692, orientation: 42, skew: 0.767058, color: 'firebrick' }))
g.addNode('USG 2.0', Object.assign({}, nodeAttrs, { distortion: 0.748625, orientation: 74, skew: -0.647656, color: 'chartreuse4' }))
g.addNode('CB Unix 2', Object.assign({}, nodeAttrs, { sides: 10, distortion: 0.851818, orientation: 32, skew: -0.020120, color: 'greenyellow' }))
g.addNode('CB Unix 3', Object.assign({}, nodeAttrs, { sides: 10, distortion: 0.992237, orientation: 29, skew: 0.256102, color: 'bisque4' }))
g.addNode('Unix/TS++', Object.assign({}, nodeAttrs, { sides: 6, distortion: 0.545461, orientation: 16, skew: 0.313589, color: 'mistyrose2' }))
g.addNode('PDP-11 Sys V', Object.assign({}, nodeAttrs, { sides: 9, distortion: -0.267769, orientation: 40, skew: 0.271226, color: 'cadetblue1' }))
g.addNode('USG 3.0', Object.assign({}, nodeAttrs, { distortion: -0.848455, orientation: 44, skew: 0.267152, color: 'bisque2' }))
g.addNode('Unix/TS 1.0', Object.assign({}, nodeAttrs, { distortion: 0.305594, orientation: 75, skew: 0.070516, color: 'orangered' }))
g.addNode('TS 4.0', Object.assign({}, nodeAttrs, { sides: 10, distortion: -0.641701, orientation: 50, skew: -0.952502, color: 'crimson' }))
g.addNode('System V.0', Object.assign({}, nodeAttrs, { sides: 9, distortion: 0.021556, orientation: 26, skew: -0.729938, color: 'darkorange1' }))
g.addNode('System V.2', Object.assign({}, nodeAttrs, { sides: 6, distortion: 0.985153, orientation: 33, skew: -0.399752, color: 'darkolivegreen4' }))
g.addNode('System V.3', Object.assign({}, nodeAttrs, { sides: 7, distortion: -0.687574, orientation: 58, skew: -0.180116, color: 'lightsteelblue1' }))

g.addEdge('5th Edition', '6th Edition')
g.addEdge('5th Edition', 'PWB 1.0')
g.addEdge('6th Edition', 'LSX')
g.addEdge('6th Edition', '1 BSD')
g.addEdge('6th Edition', 'Mini Unix')
g.addEdge('6th Edition', 'Wollongong')
g.addEdge('6th Edition', 'Interdata')
g.addEdge('Interdata', 'Unix/TS 3.0')
g.addEdge('Interdata', 'PWB 2.0')
g.addEdge('Interdata', '7th Edition')
g.addEdge('7th Edition', '8th Edition')
g.addEdge('7th Edition', '32V')
g.addEdge('7th Edition', 'V7M')
g.addEdge('7th Edition', 'Ultrix-11')
g.addEdge('7th Edition', 'Xenix')
g.addEdge('7th Edition', 'UniPlus+')
g.addEdge('V7M', 'Ultrix-11')
g.addEdge('8th Edition', '9th Edition')
g.addEdge('1 BSD', '2 BSD')
g.addEdge('2 BSD', '2.8 BSD')
g.addEdge('2.8 BSD', 'Ultrix-11')
g.addEdge('2.8 BSD', '2.9 BSD')
g.addEdge('32V', '3 BSD')
g.addEdge('3 BSD', '4 BSD')
g.addEdge('4 BSD', '4.1 BSD')
g.addEdge('4.1 BSD', '4.2 BSD')
g.addEdge('4.1 BSD', '2.8 BSD')
g.addEdge('4.1 BSD', '8th Edition')
g.addEdge('4.2 BSD', '4.3 BSD')
g.addEdge('4.2 BSD', 'Ultrix-32')
g.addEdge('PWB 1.0', 'PWB 1.2')
g.addEdge('PWB 1.0', 'USG 1.0')
g.addEdge('PWB 1.2', 'PWB 2.0')
g.addEdge('USG 1.0', 'CB Unix 1')
g.addEdge('USG 1.0', 'USG 2.0')
g.addEdge('CB Unix 1', 'CB Unix 2')
g.addEdge('CB Unix 2', 'CB Unix 3')
g.addEdge('CB Unix 3', 'Unix/TS++')
g.addEdge('CB Unix 3', 'PDP-11 Sys V')
g.addEdge('USG 2.0', 'USG 3.0')
g.addEdge('USG 3.0', 'Unix/TS 3.0')
g.addEdge('PWB 2.0', 'Unix/TS 3.0')
g.addEdge('Unix/TS 1.0', 'Unix/TS 3.0')
g.addEdge('Unix/TS 3.0', 'TS 4.0')
g.addEdge('Unix/TS++', 'TS 4.0')
g.addEdge('CB Unix 3', 'TS 4.0')
g.addEdge('TS 4.0', 'System V.0')
g.addEdge('System V.0', 'System V.2')
g.addEdge('System V.2', 'System V.3')

const lines = g.render()

utils.dotToDOTfile('gallery/crazy', lines)
utils.dotToSVGfile('gallery/crazy', lines)
