import openSocket from 'socket.io-client';

//Open socker
const  socket = openSocket('http://localhost:5000');

//Subscribe to notifications on socket
function subscribe(item) {
  socket.on('hello', data => item(null, data));
}
export { subscribe };
