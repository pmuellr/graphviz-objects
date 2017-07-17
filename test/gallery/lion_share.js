'use strict'

// recreate graph here: http://www.graphviz.org/content/lion_share

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createDigraph('Ped_Lion_Share', {
  ratio: 'auto',
  mincross: 2.0,
  label: 'Pedigree Lion_Share'
})

g.addNode('001', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('002', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('003', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('004', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('005', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('006', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('007', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('009', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('014', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('015', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('016', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('ZZ01', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('ZZ02', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('017', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('012', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('008', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('011', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('013', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('010', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('023', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('020', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('021', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('018', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('025', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('019', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('022', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('024', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('027', {shape: 'circle', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('026', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'white'})
g.addNode('028', {shape: 'box', regular: 1, style: 'filled', fillcolor: 'grey'})

g.addNode('marr0001', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('001', 'marr0001', {dir: 'none', weight: 1})
g.addEdge('007', 'marr0001', {dir: 'none', weight: 1})
g.addEdge('marr0001', '017', {dir: 'none', weight: 2})
g.addNode('marr0002', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('001', 'marr0002', {dir: 'none', weight: 1})
g.addEdge('ZZ02', 'marr0002', {dir: 'none', weight: 1})
g.addEdge('marr0002', '012', {dir: 'none', weight: 2})
g.addNode('marr0003', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('002', 'marr0003', {dir: 'none', weight: 1})
g.addEdge('003', 'marr0003', {dir: 'none', weight: 1})
g.addEdge('marr0003', '008', {dir: 'none', weight: 2})
g.addNode('marr0004', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('002', 'marr0004', {dir: 'none', weight: 1})
g.addEdge('006', 'marr0004', {dir: 'none', weight: 1})
g.addEdge('marr0004', '011', {dir: 'none', weight: 2})
g.addNode('marr0005', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('002', 'marr0005', {dir: 'none', weight: 1})
g.addEdge('ZZ01', 'marr0005', {dir: 'none', weight: 1})
g.addEdge('marr0005', '013', {dir: 'none', weight: 2})
g.addNode('marr0006', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('004', 'marr0006', {dir: 'none', weight: 1})
g.addEdge('009', 'marr0006', {dir: 'none', weight: 1})
g.addEdge('marr0006', '010', {dir: 'none', weight: 2})
g.addNode('marr0007', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('005', 'marr0007', {dir: 'none', weight: 1})
g.addEdge('015', 'marr0007', {dir: 'none', weight: 1})
g.addEdge('marr0007', '023', {dir: 'none', weight: 2})
g.addNode('marr0008', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('005', 'marr0008', {dir: 'none', weight: 1})
g.addEdge('016', 'marr0008', {dir: 'none', weight: 1})
g.addEdge('marr0008', '020', {dir: 'none', weight: 2})
g.addNode('marr0009', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('005', 'marr0009', {dir: 'none', weight: 1})
g.addEdge('012', 'marr0009', {dir: 'none', weight: 1})
g.addEdge('marr0009', '021', {dir: 'none', weight: 2})
g.addNode('marr0010', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('008', 'marr0010', {dir: 'none', weight: 1})
g.addEdge('017', 'marr0010', {dir: 'none', weight: 1})
g.addEdge('marr0010', '018', {dir: 'none', weight: 2})
g.addNode('marr0011', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('011', 'marr0011', {dir: 'none', weight: 1})
g.addEdge('023', 'marr0011', {dir: 'none', weight: 1})
g.addEdge('marr0011', '025', {dir: 'none', weight: 2})
g.addNode('marr0012', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('013', 'marr0012', {dir: 'none', weight: 1})
g.addEdge('014', 'marr0012', {dir: 'none', weight: 1})
g.addEdge('marr0012', '019', {dir: 'none', weight: 2})
g.addNode('marr0013', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('010', 'marr0013', {dir: 'none', weight: 1})
g.addEdge('021', 'marr0013', {dir: 'none', weight: 1})
g.addEdge('marr0013', '022', {dir: 'none', weight: 2})
g.addNode('marr0014', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('019', 'marr0014', {dir: 'none', weight: 1})
g.addEdge('020', 'marr0014', {dir: 'none', weight: 1})
g.addEdge('marr0014', '024', {dir: 'none', weight: 2})
g.addNode('marr0015', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('022', 'marr0015', {dir: 'none', weight: 1})
g.addEdge('025', 'marr0015', {dir: 'none', weight: 1})
g.addEdge('marr0015', '027', {dir: 'none', weight: 2})
g.addNode('marr0016', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('024', 'marr0016', {dir: 'none', weight: 1})
g.addEdge('018', 'marr0016', {dir: 'none', weight: 1})
g.addEdge('marr0016', '026', {dir: 'none', weight: 2})
g.addNode('marr0017', {shape: 'diamond', style: 'filled', label: '', height: 0.1, width: 0.1})
g.addEdge('026', 'marr0017', {dir: 'none', weight: 1})
g.addEdge('027', 'marr0017', {dir: 'none', weight: 1})
g.addEdge('marr0017', '028', {dir: 'none', weight: 2})

const lines = g.render()

utils.dotToDOTfile('gallery/lion_share', lines)
utils.dotToSVGfile('gallery/lion_share', lines)
