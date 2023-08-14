/** @format */
const fs = require("node:fs");

// Reaname a file
function renameFile(filename, newFilename) {
  fs.open(filename, (err, result) => {
    if (err) {
      console.log("No file is presnt");
    } else {
      fs.rename(filename, newFilename, (err, result) => {
        if (err) {
          console.log("Error!!");
        } else {
          console.log("File name updated");
        }
      });
    }
  });
}

renameFile("text.txt", "DEMO.txt");
