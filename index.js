'use strict'

var window = require('global/window')

module.exports = (function detectLocalStorage (key) {
  try {
    var localStorage = window.localStorage
    if (!localStorage) return false

    localStorage.setItem(key, key)
    localStorage.removeItem(key)
    return true
  } catch (_) {
    return false
  }
})('HAS_LOCAL_STORAGE')
