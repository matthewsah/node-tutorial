const { readFileSync, writeFileSync } = require('fs');

console.log('starting task');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync(
  './content/third.txt', 
  `hello :) this is the third text file: ${first}, ${second}`,
  { flag: 'a' }
);

console.log('completed task');
console.log('moving on to next task');
