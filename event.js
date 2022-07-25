const EventEmitter = require("events");

// EventEmitter Pascal Naming Convention
// eventEmiter  Camel Case Convention

const alert = new EventEmitter();

//Catch the event
alert.on("newRequest", (payload) => {
  console.log(`${payload} sent you a friend request.`);
});

//Make a noise
alert.emit("newRequest", "Betty Anang");

