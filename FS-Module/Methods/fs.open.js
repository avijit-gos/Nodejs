/** @format */

const fs = require("node:fs");

// Create a file using fs.open()
function fileCreate(filename, text) {
  fs.open(filename, "w+", (err, result) => {
    if (err) {
      console.log("No file is present");
    } else {
      console.log(result);
    }
  });
}
fileCreate("demo.json");

// Read data from a file
function readData(filename) {}
