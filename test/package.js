'use strict'

const pkg = require('../package.json')
const utils = require('./lib/utils')
const packageProfiler = require('..')

const runTest = utils.createTestRunner(__filename)

// Check the package name.
runTest(function testPackageName (t) {
  t.deepEqual(pkg.name, 'graphviz-objects', 'package name should be as expected')
  t.deepEqual(pkg.version, packageProfiler.version, 'package version should be as expected')
  t.end()
})
