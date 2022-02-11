import Router from "router.js";

function ClientInterface() {
  this.init = function(router) {
    this.router = router;
  }

  this.sendToClient = function(clientId, event, data) {
    console.log("ClientInterface sendToUser dummy: " + toString(clientId) + toString(event) + toString(data));
  }

  this.router = new Router(); // Dummy router
};

export { ClientInterface };