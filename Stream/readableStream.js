/** @format */

const { Readable } = require("node:stream");

const readableStream = new Readable({
  highWaterMark: 2, // it's in bites. It is a threshould not limit
  read() {},
});

// Data event
readableStream.on("data", (chunk) => {
  console.log("chunk:", chunk);
  console.log("string:", chunk.toString());
});

// Error event
readableStream.on("error", (error) => {
  console.log("Error:", error);
});

// End event
readableStream.on("end", () => {
  console.log("Stream end");
});

// Push data into stream
console.log(readableStream.push("Hello from nodejs stream"));
// *** High watermark value is TRUE when pushing data size is lesser than the highWaterMark value

// *** High watermark value is FALSE when pushing data size is greater than the highWaterMark value
