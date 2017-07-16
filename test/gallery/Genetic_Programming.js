'use strict'

// recreate graph here: http://www.graphviz.org/content/Genetic_Programming

const utils = require('../lib/utils')
const gvo = require('../..')

const g = gvo.createGraph('', {
  fontsize: 8,
  label: '((+ (* (X) (- (- (X) (X)) (X))) (% (+ (X) (X)) (COS (- (X) (X))))) (EXP (* (X) (X))) (+ (% (EXP (SIN (+ (X) (X)))) (SIN (* (X) (EXP (* (X) (X)))))) (* (X) (X))) (% (EXP (% (X) (% (X) (X)))) (EXP (SIN (X)))))'
})

const cluster01 = g.addSubgraph('cluster01', {
  label: '(+ (* (X) (- (- (X) (X)) (X))) (% (+ (X) (X)) (COS (- (X) (X)))))'
})

cluster01.addNode('n002', {label: '+'})
cluster01.addNode('n003', {label: '*'})
cluster01.addNode('n004', {label: 'X'})
cluster01.addNode('n005', {label: '-'})
cluster01.addNode('n006', {label: '-'})
cluster01.addNode('n007', {label: 'X'})
cluster01.addNode('n008', {label: 'X'})
cluster01.addNode('n009', {label: 'X'})
cluster01.addNode('n010', {label: '%'})
cluster01.addNode('n011', {label: '+'})
cluster01.addNode('n012', {label: 'X'})
cluster01.addNode('n013', {label: 'X'})
cluster01.addNode('n014', {label: 'COS'})
cluster01.addNode('n015', {label: '-'})
cluster01.addNode('n016', {label: 'X'})
cluster01.addNode('n017', {label: 'X'})

cluster01.addEdge('n002', 'n003')
cluster01.addEdge('n003', 'n004')
cluster01.addEdge('n003', 'n005')
cluster01.addEdge('n005', 'n006')
cluster01.addEdge('n006', 'n007')
cluster01.addEdge('n006', 'n008')
cluster01.addEdge('n005', 'n009')
cluster01.addEdge('n002', 'n010')
cluster01.addEdge('n010', 'n011')
cluster01.addEdge('n011', 'n012')
cluster01.addEdge('n011', 'n013')
cluster01.addEdge('n010', 'n014')
cluster01.addEdge('n014', 'n015')
cluster01.addEdge('n015', 'n016')
cluster01.addEdge('n015', 'n017')

const cluster17 = g.addSubgraph('cluster17', {
  label: '(EXP (* (X) (X)))'
})

cluster17.addNode('n018', {label: 'EXP'})
cluster17.addNode('n019', {label: '*'})
cluster17.addNode('n020', {label: 'X'})
cluster17.addNode('n021', {label: 'X'})

cluster17.addEdge('n018', 'n019')
cluster17.addEdge('n019', 'n020')
cluster17.addEdge('n019', 'n021')

const cluster21 = g.addSubgraph('cluster21', {
  label: '(+ (% (EXP (SIN (+ (X) (X)))) (SIN (* (X) (EXP (* (X) (X)))))) (* (X) (X)))'
})

cluster21.addNode('n022', {label: '+'})
cluster21.addNode('n023', {label: '%'})
cluster21.addNode('n024', {label: 'EXP'})
cluster21.addNode('n025', {label: 'SIN'})
cluster21.addNode('n026', {label: '+'})
cluster21.addNode('n027', {label: 'X'})
cluster21.addNode('n028', {label: 'X'})
cluster21.addNode('n029', {label: 'SIN'})
cluster21.addNode('n030', {label: '*'})
cluster21.addNode('n031', {label: 'X'})
cluster21.addNode('n032', {label: 'EXP'})
cluster21.addNode('n033', {label: '*'})
cluster21.addNode('n034', {label: 'X'})
cluster21.addNode('n035', {label: 'X'})
cluster21.addNode('n036', {label: '*'})
cluster21.addNode('n037', {label: 'X'})
cluster21.addNode('n038', {label: 'X'})

cluster21.addEdge('n022', 'n023')
cluster21.addEdge('n023', 'n024')
cluster21.addEdge('n024', 'n025')
cluster21.addEdge('n025', 'n026')
cluster21.addEdge('n026', 'n027')
cluster21.addEdge('n026', 'n028')
cluster21.addEdge('n023', 'n029')
cluster21.addEdge('n029', 'n030')
cluster21.addEdge('n030', 'n031')
cluster21.addEdge('n030', 'n032')
cluster21.addEdge('n032', 'n033')
cluster21.addEdge('n033', 'n034')
cluster21.addEdge('n033', 'n035')
cluster21.addEdge('n022', 'n036')
cluster21.addEdge('n036', 'n037')
cluster21.addEdge('n036', 'n038')

const cluster38 = g.addSubgraph('cluster38', {
  label: '(% (EXP (% (X) (% (X) (X)))) (EXP (SIN (X))))'
})

cluster38.addNode('n039', {label: '%'})
cluster38.addNode('n040', {label: 'EXP'})
cluster38.addNode('n041', {label: '%'})
cluster38.addNode('n042', {label: 'X'})
cluster38.addNode('n043', {label: '%'})
cluster38.addNode('n044', {label: 'X'})
cluster38.addNode('n045', {label: 'X'})
cluster38.addNode('n046', {label: 'EXP'})
cluster38.addNode('n047', {label: 'SIN'})
cluster38.addNode('n048', {label: 'X'})

cluster38.addEdge('n039', 'n040')
cluster38.addEdge('n040', 'n041')
cluster38.addEdge('n041', 'n042')
cluster38.addEdge('n041', 'n043')
cluster38.addEdge('n043', 'n044')
cluster38.addEdge('n043', 'n045')
cluster38.addEdge('n039', 'n046')
cluster38.addEdge('n046', 'n047')
cluster38.addEdge('n047', 'n048')

const lines = g.render()

utils.dotToDOTfile('gallery/Genetic_Programming', lines)
utils.dotToSVGfile('gallery/Genetic_Programming', lines)
