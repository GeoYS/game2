function Lobby() {
  this.initLobby = function() {
  };

  this.isLobbyFinished = function() {
    return false;
  };

  this.addUser = function(user) {
  };

  this.processInput = function(input, inputData) {
    var handler = inputMap[input];

    if (handler) {
      handler(inputData);
    }

    inputLog.append({
      1: input,
      2: inputData
    });
  };

  this.onInput = function(input, handler) {
    inputMap[input] = handler;
  };

  this.getInputLog = function() {
    return inputLog;
  };

  this.toDatabaseFormat = function() {
  };

  var inputLog = [];
  var inputMap = {};
}

export { Lobby };