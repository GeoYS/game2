import ClientInterface from "base/clientInterface.js";

function BuildSocketIoClientInterface(io) {
  var clientInterface = new ClientInterface();

  function onConnection(socket){
    console.log("Connection started: " + socket.id);
    clientInterface.router.clientConnected(socket.id)

    socket.on("disconnecting", (reason) => {
      console.log("Connection ended: " + socket.i + ". Reason: " + reason);
      clientInterface.router.clientDisconnecting(socket.id)
    });

    socket.onAny((eventName, ...args) => {
      clientInterface.router.clientEvent(socket.id, eventName, args);
    });
  }

  clientInterface.sendToClient = function(clientId, event, data) {
    io.sockets.socket(clientId).emit(event, data);
  };
  
  io.on('connection', onConnection);

  return clientInterface;
};

export { BuildSocketIoClientInterface };