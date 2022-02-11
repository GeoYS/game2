function Router() {
  this.init = function(clientInterface, metaManager, lobbyManager, userManager) {
    this.clientInterface = clientInterface;
    this.metaManager = metaManager;
    this.lobbyManager = lobbyManager;
    this.userManager = userManager;
  };

  this.clientEvent = function(clientId, event, data) {
  };

  this.clientConnected = function(clientId) {
  };

  this.clientDisconnecting = function(clientId) {
  };

  this.metaEvent = function(event, data) {
  };

  this.lobbyEvent = function(userIds, event, data) {
  };

  this.userEvent = function(userId, event, data) {
  };
};

export { Router };