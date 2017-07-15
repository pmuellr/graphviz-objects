'use strict'

exports.dotToSVGfile = dotToSVGfile
exports.dotToDOTfile = dotToDOTfile
exports.createTestRunner = createTestRunner

const fs = require('fs')
const path = require('path')
const tape = require('tape')

const TmpPath = path.normalize(path.join(__dirname, '..', '..', 'tmp'))

const viz = require('viz.js')

function dotToDOTfile (name, dot) {
  const fileName = path.join(TmpPath, `${name}.dot`)
  fs.writeFileSync(fileName, dot)
  console.log(`generated file: ${fileName}`)
}

function dotToSVGfile (name, dot) {
  const svg = viz(dot)
  const fileName = path.join(TmpPath, `${name}.svg`)
  fs.writeFileSync(fileName, svg)
  console.log(`generated file: ${fileName}`)
}

// Create a test runner given the source file name of the test.
// Returns a function which takes a test function, which takes a standard `t`
// tape object as a parameter.
function createTestRunner (sourceFile) {
  sourceFile = testFileName(sourceFile)

  return function testRunner (testFunction) {
    const testName = `${sourceFile} - ${testFunction.name}()`

    tape(testName, function (t) { testFunction(t) })
  }
}

function testFileName (sourceFile) {
  const dName = path.basename(path.dirname(sourceFile))
  const bName = path.basename(sourceFile)
  return `${dName}/${bName}`
}
