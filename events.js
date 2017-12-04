var events = requre('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
	console.log("Connection Successful!");
	eventEmitter.emit('data_received');
}

// Connecting the event emitter to the observer/eventhandler
eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", function() {
	console.log("Data Received Successfully!");
});

eventEmitter.emit("connection");

console.log("Program Ended.");
