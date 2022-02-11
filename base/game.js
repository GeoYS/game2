function Game() {
  this.initGameState = function(initData) {
  };

  this.isGameFinished = function() {
    return false;
  };

  this.processEvent = function(event, eventData) {
    var handler = eventMap[input];

    if (handler) {
      handler(eventData);
    }

    eventLog.append({
      1: event,
      2: eventData
    });
  };

  this.onEvent = function(event, handler) {
    eventMap[event] = handler;
  };
    
  this.getEventLog = function() {
    return eventLog;
  }

  this.toDatabaseFormat = function() {
  };

  var eventLog = {};
  var eventMap = {};
}

export { Game };