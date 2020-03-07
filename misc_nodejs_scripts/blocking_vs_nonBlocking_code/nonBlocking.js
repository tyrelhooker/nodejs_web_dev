const fs = require('fs');

fs.readFile('nonBlocking.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log('*'.repeat(8)  + 'This printed before the non-blocking code.' + '*'.repeat(8) + '\n');