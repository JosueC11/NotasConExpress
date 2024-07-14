document.addEventListener('DOMContentLoaded', () => {

    const urlParam = new URLSearchParams(window.location.search);
    const id = urlParam.get('id');

    fetch(`/api/notas/${id}`)
    .then(response => {
        return response.json();
    })
    .then(
        nota => {

            const titulo = document.getElementById('titulo');
            const contenido = document.getElementById('contenido');
            const etiqueta = document.getElementById('etiqueta');

            titulo.textContent = nota.titulo;
            contenido.textContent = nota.contenido;
            etiqueta.textContent = nota.etiqueta;
        }
    );
});
