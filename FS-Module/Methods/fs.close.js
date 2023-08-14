/** @format */

const fs = require("node:fs");

// Close a file

function closeFile(filename) {
  fs.open(filename, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      fs.close(result, (err, result) => {
        if (err) {
          console.log("Could not close this file");
        } else {
          console.log("file closed");
        }
      });
    }
  });
}
closeFile("text.txt");
