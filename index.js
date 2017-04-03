// Let's require 2 tiny modules
const isNode = require('is-node')
const isNumber = require('is-number')

// and use them
console.log(isNode ? 'Node.js' : 'Not Node.js')
console.log(isNumber(2))
