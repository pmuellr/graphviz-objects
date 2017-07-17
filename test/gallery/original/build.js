'use strict'

const fs = require('fs')
const path = require('path')

const viz = require('viz.js')

const IPath = __dirname
const OPath = path.join(__dirname, 'svg')

gen('ER.gv', 'neato')
gen('Genetic_Programming.gv')
gen('cluster.gv')
gen('crazy.gv')
gen('datastruct.gv')
gen('fsm.gv')
gen('gradient-angles.gv')
gen('gradient-cluster.gv')
gen('gradient-colors.gv')
gen('gradient-datastruct.gv')
gen('gradient-g_c_n.gv')
gen('gradient-linear-angles.gv')
gen('gradient-radial-angles.gv')
gen('gradient-table.gv')
gen('lion_share.gv')
gen('philo.gv', 'neato')
gen('process.gv')
gen('profile.gv')
gen('psg.gv')
gen('sdh.gv')
gen('siblings.gv')
gen('softmaint.gv')
gen('switch.gv')
gen('traffic_lights.gv')
gen('twopi2.gv', 'twopi')
gen('unix.gv')
gen('world.gv')

function gen (fileName, layout) {
  if (layout == null) layout = 'dot'

  const iFile = path.join(IPath, fileName)
  const oFile = path.join(OPath, `${fileName}.svg`)

  const dot = fs.readFileSync(iFile, 'utf8')
  const svg = viz(dot, {engine: layout})
  fs.writeFileSync(oFile, svg)

  // console.log(`generated: ${oFile}`)

  console.log(`<h1>${fileName}</h1>`)
  console.log(`<img src="original/svg/${fileName}.svg">`)
  console.log(`<img src="../../tmp/gallery/${fileName}.svg">`)
  console.log('')
}
