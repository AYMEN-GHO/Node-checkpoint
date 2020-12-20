'use strict'
const fs = require('fs')

const text = fs.readFileSync(process.argv[2])
const result = text.toString().split('\n').length - 1
console.log(result)