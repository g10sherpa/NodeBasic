// create and trigger custom event

const events = require("events");
const event = new events.EventEmitter();

const first_event=function(n1,n2){
  console.log(n2-n1);
  event.emit('click2');
  event.emit('click3');
}
const second_event=function(){
  console.log("2nd event created");
}
const third_event=function(){
  console.log("2nd event created");
}
event.on('click2',second_event);
event.on('click3',third_event);
event.on('click',first_event);
event.emit('click',4,5);


//EventEmitter is a class that helps us create a publisher-subscriber pattern in NodeJS.
//With an event emitter, we can simply raise a new event from a different part of
//an application, and a listener will listen to the raised event and
//have some action performed for the event.

//To create an event emitter, we need to create an instance of the event emitter
// instance from the events module in NodeJS.
