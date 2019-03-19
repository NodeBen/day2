const http = require('http');

const server = http.createServer((req,res) => {
    
    if(req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(body);
            res.end('ok');
        })

        return;
    }

    if(req.method === 'GET') {
        res.end('GET');
    }

    
});

var port = 3000;
var hostname = "127.0.0.1";
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
