/** @format */

const fs = require("node:fs");

fs.open("text.txt", (err, result) => {
  if (err) {
    console.log("Error!!");
  } else {
    fs.fstat(result, (err, result) => {
      console.log(err, result);
    });
  }
});
