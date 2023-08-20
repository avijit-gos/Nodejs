/** @format */

const EventEmitter = require("node:events");

class Emitter extends EventEmitter {}
const myEvent = new Emitter();

function listener1() {
  console.log("My first event listener");
}

function listener2() {
  console.log("My first event listener");
}

myEvent.on("foo", listener1);
myEvent.on("foo", listener2);

console.log(myEvent.listenerCount("foo")); // 2
console.log(myEvent.listenerCount("boo")); // 0
