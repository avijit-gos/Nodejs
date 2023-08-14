/** @format */

const fs = require("node:fs");

// Append data into a particular file
function appendFile(filename, text) {
  fs.appendFile(filename, text, (err, result) => {
    if (err) {
      console.log("Could not append data into this file");
    } else {
      console.log("Data appended");
    }
  });
}
appendFile("text.txt", "Text 1. ");
appendFile("text.txt", "Text 2. ");
