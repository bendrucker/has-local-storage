'use strict'

var window = require('global/window')

module.exports = (function detectLocalStorage (data) {
  try {
    window.localStorage.setItem(data, data)
    window.localStorage.removeItem(data)
    return true
  } catch (_) {
    return false
  }
})('HAS_LOCAL_STORAGE')
