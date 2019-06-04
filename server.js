const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const bodyParser = require('body-parser');


// our localhost port
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// our server instance
const server = http.createServer(app);
// // This creates our socket using the instance of the server
const io = socketIO(server);

// Create url path to listen notifications and emit the information throught socket,
// responds with the same information recieved
app.post('/api/world', (req, res) => {

  for (var i = 0; i < req.body.data.length ; i++){
    console.log(req.body.data[i]);
    io.emit('hello',req.body.data[i]);
  }
  const input = JSON.stringify(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${input}`,
  );
});

//Start server
server.listen(port, () => console.log(`Listening on port ${port}`));
