'use strict'

var diag = require('ndarray-diagonal')
var ops = require('ndarray-ops')

module.exports = trace

function trace(A) {
  return ops.sum(diag(A))
}