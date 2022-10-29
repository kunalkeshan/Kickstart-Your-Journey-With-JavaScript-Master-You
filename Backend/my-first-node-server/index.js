const http = require('http');
const fs = require('fs');

function requestHandler(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('./data.json', (err, data) => {
            if (!err && data) {
                res.write(JSON.stringify(JSON.parse(data.toString())));
                res.end();
            }
        });
    } else if (req.url === '/' && req.method === 'POST') {

    } else if (req.url === '/' && req.method === 'DELETE') {

    } else if (req.url === '/' && req.method === 'PUT') {

    }
}

const server = http.createServer(requestHandler);

server.listen(5000, '127.0.0.1', () => {
    console.log('Server running at port 5000');
});