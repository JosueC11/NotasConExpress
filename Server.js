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

app.get('/crearNota', (req, res) => {
    res.sendFile(path.join(PUBLIC,'actualizar.html'));
});

app.get('/notas/id', (req, res) => {
    res.sendFile();
});

// POST
app.post('/notas', (req, res) => {
    res.sendFile();
});

// PUT
app.put('/notas/id', (req, res) => {
    res.sendFile();
});

// DELETE
app.delete('/notas/id', (req, res) => {
    res.sendFile();
});
