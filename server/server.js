const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 9035

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('A new user just connected.');

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

server.listen(port, () => console.log(`Server is online at http://localhost:${port}/`))