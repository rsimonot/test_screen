//const cpp = require('node_cpp_test');
const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});

io.on('connection', (client) => {
    console.log('Server received click');
    client.on('join', (data) => {
        console.log(data);
        cpp.ledblink();
    });
});