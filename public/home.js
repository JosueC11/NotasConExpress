document.addEventListener('DOMContentLoaded', () => {

    fetch('/api/notas')
    .then(response => {
        return response.json();
    })
    .then(
        notas => {

            const divContenedor = document.getElementById('contenedor-notas');
    
            notas.forEach(item => {
    
                const idInput = document.createElement('input');
                idInput.value = item.id;
                idInput.hidden = true;

                const divNota = document.createElement('div');
                divNota.classList.add('notas', 'borde');
    
                const titulo = document.createElement('h2');
                titulo.textContent = item.titulo;
    
                const contenido = document.createElement('p');
                contenido.textContent = item.contenido;
    
                const fechaCreacion = document.createElement('h4');
                fechaCreacion.textContent = item.fechaCreacion;
    
                const fechaModificacion = document.createElement('h4');
                fechaModificacion.textContent = item.fechaModificacion;
    
                const etiquetas = document.createElement('h5');
                etiquetas.textContent = item.etiqueta;
    
                const divtBotonActualizar = document.createElement('div');
    
                const botonActualizar = document.createElement('a');
    
                botonActualizar.textContent = 'Actualizar';
                botonActualizar.classList.add('borde');
                botonActualizar.href = `/notasActualizar/${idInput.value}`;
                botonActualizar.id = 'boton-actualizar';
        
                divtBotonActualizar.appendChild(botonActualizar);
        
                divNota.appendChild(idInput);
                divNota.appendChild(titulo);
                divNota.appendChild(contenido);
                divNota.appendChild(fechaCreacion);
                divNota.appendChild(fechaModificacion);
                divNota.appendChild(etiquetas);
                divNota.appendChild(divtBotonActualizar);
          
                divContenedor.appendChild(divNota);
            });
        }
    );
});

function filtrar() {
    const filtro = document.getElementById('filtro').value;

    fetch('/api/nota/filtro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
                                filtro: filtro
                            })
    })
    .then(response => response.json())
    .then(notas => {

        const divContenedor = document.getElementById('contenedor-notas');
        divContenedor.innerHTML = '';

        notas.forEach(item => {
            const idInput = document.createElement('input');
            idInput.value = item.id;
            idInput.hidden = true;

            const divNota = document.createElement('div');
            divNota.classList.add('notas', 'borde');

            const titulo = document.createElement('h2');
            titulo.textContent = item.titulo;

            const contenido = document.createElement('p');
            contenido.textContent = item.contenido;

            const fechaCreacion = document.createElement('h4');
            fechaCreacion.textContent = item.fechaCreacion;

            const fechaModificacion = document.createElement('h4');
            fechaModificacion.textContent = item.fechaModificacion;

            const etiquetas = document.createElement('h5');
            etiquetas.textContent = item.etiqueta;

            const divtBotonActualizar = document.createElement('div');

            const botonActualizar = document.createElement('a');
            botonActualizar.textContent = 'Actualizar';
            botonActualizar.classList.add('borde');
            botonActualizar.href = `/notasActualizar/${idInput.value}`;
            botonActualizar.id = 'boton-actualizar';

            divtBotonActualizar.appendChild(botonActualizar);

            divNota.appendChild(idInput);
            divNota.appendChild(titulo);
            divNota.appendChild(contenido);
            divNota.appendChild(fechaCreacion);
            divNota.appendChild(fechaModificacion);
            divNota.appendChild(etiquetas);
            divNota.appendChild(divtBotonActualizar);

            divContenedor.appendChild(divNota);
        })
    })
}