/** @format */

class myCustomEventEmitter {
  listener = {};

  /**
   * addListener() method
   */
  addListener(eventname, fn) {
    this.listener[eventname] = this.listener[eventname] || [];
    if (this.listener[eventname].length < 10) {
      this.listener[eventname].push(fn);
    }
    return this;
  }
  /**
   * on() event method
   */
  on(eventname, fn) {
    this.addListener(eventname, fn);
  }
  /**
   * once() event method
   */
  /**
   * eventnames() method
   */
  eventnames() {
    const obj = this.listener;
    return Object.keys(obj);
  }
  /**
   * getMaxListeners() method
   */
  /**
   * listenerCount() method
   */
  listenerCount(eventname) {
    if (!this.listener[eventname]) {
      return 0;
    } else {
      return this.listener[eventname].length;
    }
  }
  /**
   * prependListener() method
   */
  prependListener(eventname, fn) {
    if (!this.listener[eventname]) {
      this.listener[eventname] = [];
      this.listener[eventname].push(fn);
      return this;
    } else {
      this.listener[eventname].unshift(fn);
      return this;
    }
  }
  /**
   * off() event method
   */
  /**
   * removeAllListeners() method
   */
  /**
   * rewEventListener() method
   */
  rewEventListener(eventname) {
    return this.listener[eventname];
  }
}

const myEvent = new myCustomEventEmitter();

function listener1() {
  console.log("First listener");
}
function listener2() {
  console.log("Second listener");
}

myEvent.on("foo", listener1);
myEvent.on("boo", listener1);
myEvent.on("koo", listener1);
myEvent.on("foo", listener1);

myEvent.prependListener("foo", listener2);
console.log(myEvent);
