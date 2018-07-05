import { EventEmitter } from "./eventemitter";
import { Logger } from "./logger";

export class Movie extends EventEmitter{
 
  title;
  year;
  duration;
  cast;

  constructor (title, year, duration) {
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