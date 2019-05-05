import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:5000');

function subscribe(item) {
  socket.on('hello', data => item(null, data));
}
export { subscribe };
