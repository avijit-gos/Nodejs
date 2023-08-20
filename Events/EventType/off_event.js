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
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);

myEvent.emit("foo");
myEvent.off("foo", listener1);
myEvent.emit("foo");
console.log(myEvent);
