const express = require('express');
const PUERTO = 3000;
const app = express();

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
});

app.get('/home', (req, res) => {
    res.send('Hola Mundo');
});
