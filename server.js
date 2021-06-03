const express = require('express');
const productos = require('./api/productos');
/* const lista_prod = new Productos; */

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'Express Avanzado Martin Maidana' });
});

app.get('/api/productos/listar', (req, res) => {  
    res.send(productos.listar());}    
    )

app.get('/api/productos/listar/:id', (req, res) => {
    consultaID = req.params.id;
    totalProd = productos.listar().filter(x => x.id == consultaID)
    res.send(totalProd);
    });

app.post('/api/productos/guardar', (req, res) => {
        let contenido = req.body;
        productos.guardar(contenido);
        return res.json(contenido);
})

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
