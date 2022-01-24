const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    fs.readFile(__dirname, "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "test/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, ()=> {
    console.log("Server running on port 8000...");
});