document.addEventListener('DOMContentLoaded', () => {

    const path = window.location.pathname;
    const id = path.split('/').pop();

    fetch(`/api/notas/${id}`)
    .then(response => {
        return response.json();
    })
    .then(
        nota => {

            const id = document.getElementById('id');
            const titulo = document.getElementById('titulo');
            const contenido = document.getElementById('contenido');
            const etiqueta = document.getElementById('etiqueta');

            id.value = nota.id;
            titulo.value = nota.titulo;
            contenido.textContent = nota.contenido;
            etiqueta.value = nota.etiqueta;
        }
    );
});

function Eliminar() {

    let id = document.getElementById('id');

    fetch(`/notas/${id.value}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/home.html';
        }
    })
}
