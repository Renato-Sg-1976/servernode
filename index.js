const http = require('http');


const server = http.createServer(function (req, res){
    res.writeHead(200, {'Conntent-Type': 'text/html'});
    res.write('<h3>Ciao Mondo</h3>');
    res.end();

});

// in ascolto
//server listen (porta,url);
server.listen(8081, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8081');