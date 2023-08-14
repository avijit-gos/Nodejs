/** @format */

const fs = require("node:fs");

console.time("1");

function readBigFile(filename) {
  /**
   * Bad approach to read a big file because fs.readFile() read the file all at once. So by this method we use approx 1gb memory. that's why we cannot read big files using this method. So we can eliminate this problem using STREAM because in stream we read a file in chunks instead of read all at once
   */
  // fs.open(filename, (err, result) => {
  //   if (err) {
  //     console.log("Don't have this file");
  //   } else {
  //     fs.readFile(result, "utf-8", (err, result) => {
  //       if (err) {
  //         console.log("Could not read this file");
  //       } else {
  //         console.log(result);
  //       }
  //     });
  //   }
  // });

  const readStream = fs.createReadStream(filename, "utf-8");
  readStream.on("data", (chunk) => {
    console.log(chunk);
  });
}
readBigFile("bigFile.txt");

console.timeEnd("1");
