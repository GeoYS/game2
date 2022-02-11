import Router from "base/router.js";

function BuildAuthenticatorDuplexRouter(clientEvents, metaEvents, lobbyEvents, userEvents) {
  var router = new Router();
  var clientIdToUserId = new Map();
  var userIdToClientId = new Map();
  
  router.clientIdToUserId = clientIdToUserId;
  router.userIdToClientId = userIdToClientId;

  router.init = function(metaManager, lobbyManager, userManager) {
    this.clientInterface = clientInterface;
    this.metaManager = metaManager;
    this.lobbyManager = lobbyManager;
    this.userManager = userManager;
  };

  router.clientEvent = function(clientId, event, data) {
    if (clientIdToUserId.get(clientId) &&
        router.userManager.isUserAuthenticated()) {
      if (clientEvents[event]) {
        clientEvents[event](router, data);
      }
    } else {
      let retData = router.userManager.connectUser(data);

      if (retData["status"] === 0) {
        let userId = retData["userId"];

        clientIdToUserId.set(clientId, userId);
        userIdToClientId.set(userId, clientId);
      }
    }
  };

  router.clientConnected = function(clientId) {
    clientIdToUserId.set(clientId, "");
  };

  router.clientDisconnecting = function(clientId) {
    let userId = clientIdToUserId.get(clientId);

    clientIdToUserId.delete(clientId);
    userIdToClientId.delete(userId);
    router.userManager.disconnectUser(userId);
  };

  router.metaEvent = function(event, data) {
    let consumed = false;

    if (metaEvents[event]) {
      consumed = metaEvents[event](router, data);
    }

    if (!consumed) {
      for (const [key, value] of clientIdToUserId.entries()) {
        router.clientInterface.sendToClient(event, data);
      }
    }
  };

  router.lobbyEvent = function(userIds, event, data) {
    let consumed = false;

    if (lobbyEvents[event]) {
      consumed = lobbyEvents[event](router, data);
    }

    if (!consumed) {
      for (const userId of userIds) {
        let clientId = userIdToClientId.get(userId);
        router.clientInterface.sendToClient(clientId, event, data);
      }
    }
  };

  router.userEvent = function(userId, event, data) {
    let consumed = false;

    if (userEvents[event]) {
      consumed = userEvents[event](router, data);
    }

    if (!consumed) {
      let clientId = userIdToClientId.get(userId);
      router.clientInterface.sendToClient(clientId, event, data);
    }
  };

  return router;
}

export { BuildAuthenticatorDuplexRouter };