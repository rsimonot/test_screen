//const cpp = require('node_cpp_test');
const express = require('express');
const path = require('path');
/*const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

*/

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


app.post('/blink', (req, res) => {
    console.log("BLINK");
    cpp.ledblink();
})

app.listen(port);
console.log('Server started at http://localhost:' + port);