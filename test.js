'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.notOk(require('./'))
  t.notOk(proxyquire('./', {
    'global/window': {
      localStorage: {}
    }
  }))
  t.ok(proxyquire('./', {
    'global/window': {
      localStorage: {
        setItem: function () {},
        removeItem: function () {}
      }
    }
  }))
  t.end()
})
