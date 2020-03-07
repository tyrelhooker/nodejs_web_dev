const fs = require('fs');
let data = fs.readFileSync('blocking.txt');

console.log(data.toString());
console.log('This printed only after the blocking code completed.');