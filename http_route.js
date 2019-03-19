const http = require('http');

const server = http.createServer((req,res) => {
    
    const url = req.url;

    if(url === '/about') {
        res.write('<h1>About us page</h1>');
        res.end();
    } else if(url === '/contact') {
        res.write('<h1>Contact us page</h1>');
        res.end();
    } else {
        res.write('<h1>Catchall us page</h1><ul><li><a href="/contact">Contact</a><li><a href="/about">About</a>');
        res.end();
    }
    
});

var port = 3000;
var hostname = "127.0.0.1";
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
