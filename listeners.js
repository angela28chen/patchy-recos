var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener one
var listener1 = function listener1() {
	console.log('listener1 executed.');
}

//listener two
var listener2 = function listener2() {
	console.log('listener2 executed.');
}

//Bind with the first one
eventEmitter.addListener('connection', listener1);

//Bind with the second one
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners listening to the event called CONNECTION");

//Fire connection event
eventEmitter.emit('connection');

//Remove binding of first one
eventEmitter.removeListener('connection', listener1);
console.log("Just removed listener one.");

//Fire connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners listening to the event called CONNECTION");

console.log("Program ended.");
