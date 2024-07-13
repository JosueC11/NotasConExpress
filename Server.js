const express = require('express');
const path = require('path');

const PUBLIC = path.join(__dirname,'public');

const PUERTO = 3000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static(PUBLIC));

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
});








// API //

// GET
app.get('/notas', (req, res) => {
    res.sendFile(path.join(PUBLIC,'home.html'));
});

app.get('/api/notas', (req, res) => {
    res.json(array);
});

app.get('/crearNota', (req, res) => {
    res.sendFile(path.join(PUBLIC,'actualizar.html'));
});

app.get('/notas/id', (req, res) => {
    res.sendFile();
});

// POST
app.post('/notas', (req, res) => {

    let {titulo, contenido, etiqueta} = req.body;

    let nota = {
        titulo: titulo,
        contenido: contenido,
        fechaCreacion: 'Fecha de Creación: ' + new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
        fechaModificacion: 'Fecha Modificación: ' + new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
        etiqueta: etiqueta
    };

    array.push(nota);

    res.sendFile(path.join(PUBLIC, 'home.html'));
});

// PUT
app.put('/notas/id', (req, res) => {
    res.sendFile();
});

// DELETE
app.delete('/notas/id', (req, res) => {
    res.sendFile();
});





// Datos
let array = [
    { 
        titulo: 'Nota importante',
        contenido: 'Mañana tengo examen de progra',
        fechaCreacion: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
        fechaModificacion: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
        etiqueta: 'Universidad',
    }
];



