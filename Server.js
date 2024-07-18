const express = require('express');
const path = require('path');

const PUBLIC = path.join(__dirname,'public');

const PUERTO = 3000;
let idConsecutivo = 1;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static(PUBLIC));
app.use(express.json());

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
});


// API //

// GET vistas
app.get('/notas', (req, res) => {
    res.status(200).sendFile(path.join(PUBLIC,'home.html'));
});

app.get('/crearNota', (req, res) => {
    res.status(200).sendFile(path.join(PUBLIC,'crear.html'));
});

app.get('/notasActualizar/:id', (req, res) => {
    res.status(200).sendFile(path.join(PUBLIC,'actualizar.html'));
});


// GET traer todos los datos
app.get('/api/notas', (req, res) => {
    res.status(200).json(array);
});


//GET traer 1 dato
app.get('/api/nota/:id', (req, res) => {
    let id = parseInt(req.params.id, 10);
    let nota = array.find(n => n.id === id);
    if (nota) {
        res.status(200).json(nota);
    } else {
        res.status(404).json({ error: 'Nota no encontrada' });
    }
});

// POST guradar datos
app.post('/api/nota', (req, res) => {

    let {titulo, contenido, etiqueta} = req.body;

    let nota = {
        id : getId(),
        titulo: titulo,
        contenido: contenido,
        fechaCreacion: 'Fecha de Creación: ' + getFecha(),
        fechaModificacion: 'Fecha Modificación: ' + getFecha(),
        etiqueta: etiqueta
    };
    
    try {

        array.push(nota);
        res.status(201).redirect('/notas');

    } catch (error) {
        res.status(500).redirect('/notas');
    }
});

// PUT actualizar datos
app.put('/api/nota/:id', (req, res) => { 
    let id = parseInt(req.params.id, 10);
    const index = array.findIndex(nota => nota.id === id);
    if (index !== -1) {
        array[index] = {
            id: id,
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            fechaCreacion: req.body.fechaCreacion,
            fechaModificacion: 'Fecha Modificación: ' + getFecha(),
            etiqueta: req.body.etiqueta,
        }
        res.status(200).send();  
    } else {
        res.status(404).send();
    }
});

// DELETE eliminar datos
app.delete('/api/nota/:id', (req, res) => {
    let id = parseInt(req.params.id, 10);
    const index = array.findIndex(nota => nota.id === id);
    if (index !== -1) {
        array.splice(index, 1);
        res.status(200).send();  
    } else {
        res.status(404).send(); 
    }
});


// Datos
let array = [
    { 
        id: 0,
        titulo: 'Nota importante',
        contenido: 'Mañana tengo examen de progra',
        fechaCreacion: 'Fecha de Creación: ' + getFecha(),
        fechaModificacion: 'Fecha Modificación: ' + getFecha(),
        etiqueta: 'Universidad',
    }
];

function getFecha() {
    let fecha = new Date();
    return fecha.getDay() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() + ' - ' + fecha.getHours() + ':' + fecha.getMinutes();
}

function getId() {
    return idConsecutivo++;
}

