/** @format */

// Importing read stream
const { Readable, Writable } = require("stream");

const readableStream = new Readable({
  highWaterMark: 1, // it's in bites. It is a threshould of buffer not limit
  read() {},
});

const writableStream = new Writable({
  write(data) {
    console.log("Write data:", data);
  },
});

// This data event listener will call whenever we have some data inside the read stream
readableStream.on("data", (chunk) => {
  // Here we'll push data inside wriable stream
  writableStream.write(chunk);
});

// This error event listener will call if there are some error occour
readableStream.on("error", (error) => {
  console.log("Error occour:", error);
});

// This end event listener will call after the read stream end
readableStream.on("end", () => {
  console.log("Readable stream end!!");
});

// Push data inside the read stream
readableStream.push("Hello world from nodejs stream");
