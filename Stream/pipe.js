/** @format */

const fs = require("node:fs");
const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const finalData = chunk.toString().replace(/ipsum/gi, "***");
    callback(null, finalData);
  },
});

// Create Read Stream
const readableStream = fs.createReadStream("bigFile.txt");

// Create Write Stream
const writeableStream = fs.createWriteStream("demo.txt");

readableStream.pipe(transformStream).pipe(writeableStream);
