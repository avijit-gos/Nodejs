/** @format */

const EventEmitter = require("node:events");

class Emitter extends EventEmitter {}
const myEvent = new Emitter();

function listener1() {
  console.log("My first event listener");
}

function listener2() {
  console.log("My second event listener");
}

myEvent.on("foo", listener1);

myEvent.prependListener("foo", listener2);
myEvent.emit("foo");
/**
 * Result:
 * My second event listener
 * My first event listener
 */
