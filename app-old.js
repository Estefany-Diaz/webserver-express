const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'fernando',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end(); // que termine de crear la respuesta
    })
    //podemos usar un puerto
    .listen(8080);

console.log('Escuchando el puerto 8080');