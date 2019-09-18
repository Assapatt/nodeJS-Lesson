// 1. 原生模块、核心模块
const events=require("events");
var EventsEmitter=events.EventEmitter;

function Dog(name,engergy){
    EventsEmitter.call(this);
    this.name = name;
    this.engergy = engergy;
}
Dog.prototype.__proto__ = EventsEmitter.prototype;

module.exports = {
    Dog : Dog
}