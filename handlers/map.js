module.exports = ({ io, socket, markers }) => {
  const activeMarkers = () => {
    return markers.activeMarkers;
  };

  const newMarker = (marker) => {
    const currentMarker = markers.addMarker(marker);
    socket.broadcast.emit('new-marker', currentMarker);
  };

  const updateMarker = (marker) => {
    markers.updateMarker(marker);
    socket.broadcast.emit('update-marker', marker);
  };

  socket.emit('active-markers', activeMarkers());
  socket.on('new-marker', newMarker);
  socket.on('update-marker', updateMarker);
};
