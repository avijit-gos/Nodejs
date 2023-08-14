/** @format */

const fs = require("node:fs");

function writeBigFile(src, dest) {
  /**
   * Bad approach to write big file
   */
  // fs.open(src, (err, result) => {
  //   if (err) {
  //     console.log("Don't have this file");
  //   } else {
  //     fs.readFile(result, "utf-8", (err, result) => {
  //       if (err) {
  //         console.log("Could not read this file");
  //       } else {
  //         fs.writeFile(dest, result, (err, result) => {
  //           if (err) {
  //             console.log("Could not write this file");
  //           } else {
  //             console.log("DONE!!");
  //           }
  //         });
  //       }
  //     });
  //   }
  // });
  /**
   * Good approach to write big file
   */
  const readStream = fs.createReadStream(src, "utf-8");
  const writeStream = fs.createWriteStream(dest);
  readStream.on("data", (chunk) => {
    writeStream.write(chunk);
  });
  readStream.on("error", (error) => {
    console.log("** Error:", error);
  });
  readStream.on("end", () => {
    console.log("Stream finished!!!");
  });
}
writeBigFile("bigfile.txt", "demoFile.txt");
