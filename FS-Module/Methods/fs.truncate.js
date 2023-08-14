/** @format */

const fs = require("node:fs");
function truncateFile(filename) {
  fs.open(filename, (err, result) => {
    if (err) {
      console.log("Error!!");
    } else {
      fs.truncate(result, 0, (err, result) => {
        console.log(err, result);
      });
    }
  });
}

truncateFile("demo.txt");
