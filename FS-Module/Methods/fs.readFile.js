/** @format */

const fs = require("node:fs");

// *** Read data from a file
function toReadFile(filename) {
  fs.open(filename, (err, result) => {
    if (err) {
      console.log("No file is present");
    } else {
      // Here we'll read our file
      fs.readFile(filename, "utf-8", (err, result) => {
        if (err) {
          console.log("Could not read this file");
        } else {
          console.log(result);
        }
      });
    }
  });
}
toReadFile("text.txt");
