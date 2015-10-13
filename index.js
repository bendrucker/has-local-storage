'use strict'

var window = require('global/window')

module.exports = (function detectLocalStorage (localStorage, data) {
  if (!localStorage) return false
  try {
    localStorage.setItem(data, data)
    localStorage.removeItem(data)
    return true
  } catch (_) {
    return false
  }
})(window.localStorage, 'HAS_LOCAL_STORAGE_' + (new Date().getTime()))
