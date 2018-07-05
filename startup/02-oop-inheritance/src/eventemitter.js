export class EventEmitter {
  
  constructor() {}

  on(eventName, callback) {
    if(!this._eventHandlers) this._eventHandlers = {};
    if(!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
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