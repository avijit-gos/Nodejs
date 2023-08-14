/** @format */

const fs = require("node:fs");

// *** Check to find "text.txt" file is present or not
function checkFile(filename) {
  /**
   * fs.exists(filename, callback)
   */
  fs.exists(filename, (result) => {
    if (!result) {
      console.log("File with this name is not exists");
    } else {
      console.log("File with this name is already being exists");
    }
  });

  /**
   * fs.open(filename, callback)
   */
  fs.open(filename, (err, result) => {
    if (err) {
      console.log("File with this name is not exists");
    } else {
      console.log("File with this name is already being exists");
    }
  });
}

checkFile("text.txt");
