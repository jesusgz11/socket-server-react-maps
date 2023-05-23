const registerMapHanlders = require('../handlers/map');

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
    this.onConnection = this.onConnection.bind(this);
  }

  onConnection(socket) {
    registerMapHanlders({
      io: this.io,
      socket,
    });
  }

  socketEvents() {
    this.io.on('connection', this.onConnection);
  }
}

module.exports = Sockets;
