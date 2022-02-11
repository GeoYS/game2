function UserManager() {
  this.users = new Map();

  this.init = function(dbInterface) {
    this.dbInterface = dbInterface;
  };

  this.getUserData = function(userId, key) {
  };

  this.setUserData = function(userId, key) {
  };

  this.isUserAuthenticated = function(userId) {
  };

  this.connectUser = function(userCredentials) {
  };

  this.disconnectUser = function(userId) {
  };

  this.loadFromDatabase = function() {
  };

  this.storeFromDatabase = function() {
  };
}

export { UserManager };