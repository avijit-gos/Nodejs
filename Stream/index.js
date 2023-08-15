/** @format */
const fs = require("node:fs");
const { Transform, pipeline } = require("stream");

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // transformStream.emit("error", "Generate error");
    const finalData = chunk.toString().replace(/ipsum/gi, "***");
    callback(null, finalData);
  },
});

// Create Read Stream
const readableStream = fs.createReadStream("bigFile.txt");

// Create Write Stream
const writeableStream = fs.createWriteStream("demo.txt");

// readableStream.pipe(transformStream).pipe(writeableStream);
pipeline(readableStream, transformStream, writeableStream, (error) => {
  if (error) {
    console.log("Error:", error);
  }
});
