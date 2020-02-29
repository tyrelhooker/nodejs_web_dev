// file_maker.js - Creates directories and files through command line using node.js

const fs = require('fs');

for (let i = 1; i <= 12; i++) {
  fs.rmdir(`/home/tj/Documents/nodejs_web_dev/ch0${i}`, {recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`ch0${i} directory was removed.`);
  });

  if (i < 10) {
    fs.mkdir(`/home/tj/Documents/nodejs_web_dev/ch0${i}`, { recursive: true }, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`ch0${i} directory was created.`)
    });
  } else {
    fs.mkdir(`/home/tj/Documents/nodejs_web_dev/ch${i}`, { recursive: true }, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`ch${i} directory was created.`)
    });
  }

}


