// Modules

// CommonJS, every file is a module (by default)
// Modules allow for encapsulated code (only share what you need)
const { matt, alyssia } = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-exports')
require('./07-wow')

console.log(data)

sayHi(matt);
sayHi(alyssia);