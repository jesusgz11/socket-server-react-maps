const registerMapHanlders = require('../handlers/map');
const MarkerList = require('./marker-list');

class Sockets {
  constructor(io) {
    this.io = io;
    this.onConnection = this.onConnection.bind(this);
    this.markers = new MarkerList();
    this.socketEvents();
  }

  onConnection(socket) {
    registerMapHanlders({
      io: this.io,
      socket,
      markers: this.markers,
    });
  }

  socketEvents() {
    this.io.on('connection', this.onConnection);
  }
}

module.exports = Sockets;
