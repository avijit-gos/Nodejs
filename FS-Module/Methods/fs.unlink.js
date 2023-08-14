/** @format */

const fs = require("node:fs");

// Delete a file
function deleteFile(filename) {
  fs.open(filename, (err, result) => {
    if (err) {
      console.log("No file found");
    } else {
      // Here we'll delete our file
      fs.unlink(filename, (err, result) => {
        if (err) {
          console.log("Could not delete this file");
        } else {
          console.log("File has been deleted");
        }
      });
    }
  });
}
deleteFile("DEMO.txt");
