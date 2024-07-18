document.addEventListener('DOMContentLoaded', () => {

    const path = window.location.pathname;
    const id = path.split('/').pop();

    fetch(`/api/nota/${id}`)
    .then(response => {
        return response.json();
    })
    .then(
        nota => {

            const id = document.getElementById('id');
            const fechaCreacion = document.getElementById('fechaCreacion');
            const titulo = document.getElementById('titulo');
            const contenido = document.getElementById('contenido');
            const etiqueta = document.getElementById('etiqueta');

            id.value = nota.id;
            fechaCreacion.value = nota.fechaCreacion;
            titulo.value = nota.titulo;
            contenido.value = nota.contenido;
            etiqueta.value = nota.etiqueta;
        }
    );
});

function eliminar() {

    let id = document.getElementById('id');

    fetch(`/api/nota/${id.value}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/home.html';
        }
    });
}

function actualizar(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const fechaCreacion = document.getElementById('fechaCreacion').value;
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const etiqueta = document.getElementById('etiqueta').value;

    fetch(`/api/nota/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
                                fechaCreacion: fechaCreacion, 
                                titulo: titulo, 
                                contenido: contenido, 
                                etiqueta: etiqueta 
                            })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/home.html';
        }
    });
}

