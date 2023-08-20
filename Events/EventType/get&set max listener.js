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

// *** Here we set maximum listener value for "foo" event is 15
myEvent.setMaxListeners(15, myEvent);

myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);
myEvent.on("foo", listener1);

console.log(myEvent.getMaxListeners("boo"));
