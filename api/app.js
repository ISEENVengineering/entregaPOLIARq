const express = require('express');
const { env } = require('process');
const app = express()
const http = require('http');
const server = http.createServer(app);

const PORT = 3000 || process.env.PORT
const { Server } = require('socket.io')
const ws = new Server(server);
const ws1 = new Server(server)

ws.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
});

app.listen(PORT, () => console.log(`ejecutandose puerto ${PORT}`))