// npm intro

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> [on Mac]

// package.json - manifest file (stores import information about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// run npm install to install the dependencies from package.json
// keeps files less bloated

// install as a dev dependency 
// npm install <packageName> -D

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello");

console.log('first');
setTimeout(() => {
  console.log('second')
})
console.log('third');