const express = require('express');
const app = express(); // declara app que es el producto de la funcion express

const hbs = require('hbs');
require('./hbs/helpers')

//puerto para heroku

const port = process.env.PORT || 3000;


//middleware se ejecuta sin importar que url me pidan
app.use(express.static(__dirname + '/public'));

//ya existe un directorio que contendra los parciales
hbs.registerPartials(__dirname + '/views/parciales');
//express habs engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) { //configuramos una solicitud get
    //cuando sea /
    res.render('home', {
        nombre: 'Estefany'
    }); // renderiza el archivo home
});

app.get('/about', function(req, res) { //configuramos una solicitud get
    //cuando sea /
    res.render('about'); // renderiza about
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});