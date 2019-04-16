const http = require('http');

// uso questa variabile che sarà la mia porta
const port = 8081;

//creo il mio server
const server = http.createServer(function (req, res){
    res.write(req.url);
    if (req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Ciao Mondo</h1>');
        res.end();
    }else if (req.url === '/api'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h2>${req.url}</h2>`);
        res.end();
    }else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(
                {
                    "version": "0.1",
                    "nome": "Mia API personale",
                    "data" : "2019-04-16"
                }
            ));
            res.end();
        }
});

// in ascolto
//server listen (porta,url);
server.listen(port, '127.0.0.1');
console.log(`Server running at http://127.0.0.1:${port}`);



