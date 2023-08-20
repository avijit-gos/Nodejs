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
myEvent.on("koo", listener1);
myEvent.on("boo", listener1);

myEvent.emit("foo");
myEvent.removeAllListeners();
console.log(myEvent);
