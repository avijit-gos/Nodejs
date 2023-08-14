/** @format */

const fs = require("node:fs");

// Copy folder and file
function copyFolderFile(src, dest) {
  // Copy file
  // fs.cp(src, dest, (err, result) => {
  //   if (err) {
  //     console.log("Error!!");
  //   } else {
  //     console.log("File copied");
  //   }
  // });
  // Copy folder
  fs.cp(src, dest, { recursive: true }, (err, result) => {
    if (err) {
      console.log("Error!!");
    } else {
      console.log("File copied");
    }
  });
}
copyFolderFile("Methods", "Final");
