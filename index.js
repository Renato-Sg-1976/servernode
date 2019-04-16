const http = require('http');


const server = http.createServer(function (req, res){
    res.writeHead(200, {'Conntent-Type': 'text/html'});
    res.write('Ciao Mondo');
    res.end();

});

// in ascolto
//server listen (porta,url);
server.listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080');