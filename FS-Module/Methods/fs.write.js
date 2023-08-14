/** @format */

const fs = require("node:fs");

// *** Create a file with name "text.txt"
function createFile(filename, text) {
  fs.open(filename, (err, result) => {
    if (err) {
      // Here we'll create our file
      fs.writeFile(filename, text, (err, result) => {
        if (err) {
          console.log("Something went wrong");
        } else {
          console.log("File created");
        }
      });
    } else {
      console.log("File with this name already being exits");
    }
  });
}
createFile("text.txt", "Some demo word");
