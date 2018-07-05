export class Actor {

  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export class EventEmitter {

  constructor() {}

  on(eventName, callback) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
    this._eventHandlers[eventName].push(callback);
  }

  emit(eventName) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return;
    }
    this._eventHandlers[eventName].forEach(handler => handler.apply(this));
  }

  off(eventName, callback) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === callback) {
        handlers.splice(i--, 1);
      }
    }
  }
}
export class Logger {

  constructor() {}

  log(info) {
    console.log(info);
  }
}
import { EventEmitter } from "./eventemitter";
import { Logger } from "./logger";

export class Movie extends EventEmitter {

  title;
  year;
  duration;
  cast;

  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    cast = [];
    Object.assign(Movie.prototype, Logger);
  }

  play() {
    this.emit('play');
  }

  resume() {
    this.emit('resume');
  }

  pause() {
    this.emit('pause');
  }

  addCast(actors) {
    let cast = Array.isArray(actors) ? actors : [actors];
    cast.forEach(actor => {
      this.cast.push(actor);
    });
  }
}
