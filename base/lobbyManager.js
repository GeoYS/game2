function LobbyManager() {
  this.init = function(dbInterface) {
    this.dbInterface = dbInterface;
  };

  this.addLobby = function(lobby, initialUser) {
  };

  this.addUserToLobby = function(userId, lobbyId) {
  };

  this.joinUserToUser = function(sourceUserId, targetUserId) {
  };

  this.getUsersLobbyId = function(userId) {
  };

  this.routeInput = function(userId, input, inputData) {
  };

  this.loadFromDatabase = function() {
  };

  this.storeFromDatabase = function() {
  };

  var lobbies = new Map();
  var userIdToLobby = new Map();
}

export { LobbyManager };