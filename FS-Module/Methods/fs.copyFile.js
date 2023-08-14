/** @format */

const fs = require("node:fs");

function copyFile(src, dest) {
  fs.open(src, (err, result) => {
    if (err) {
      console.log("Could not find this file");
    } else {
      fs.copyFile(src, dest, (err, result) => {
        if (err) {
          console.log("Something went wrong");
        } else {
          console.log("Cpoied");
        }
      });
    }
  });
}
copyFile("text.txt", "sample.txt");
