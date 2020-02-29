// file_maker.js - Creates directories and files through command line using node.js

const fs = require('fs');

for (let i = 0; i <= 12; i++) {
  fs.mkdir(`/home/tj/Documents/nodejs_web_dev/ch${i}`, { recursive: true }, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`ch${i} directory was created.`)
  });
}


