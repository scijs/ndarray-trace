'use strict'

var trace = require('../trace')
var tape = require('tape')
var pack = require('ndarray-pack')

tape('trace', function(t) {
  var M = pack([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

  t.equals(trace(M), 15)

  t.end()
})