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

myEvent.once("foo", listener1);
myEvent.once("foo", listener2);

myEvent.emit("foo");
console.log(myEvent);
