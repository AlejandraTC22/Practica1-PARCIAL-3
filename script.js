import Libro from './Libro.js';
import Biblioteca from './biblioteca.js';

document.addEventListener("DOMContentLoaded", function () {
    // Asignar eventos a los botones u otros elementos según tus necesidades
    document.getElementById('agregarLibroBtn').addEventListener('click', agregarLibro);
    document.getElementById('buscarLibroBtn').addEventListener('click', buscarLibro);
    document.getElementById('eliminarLibroBtn').addEventListener('click', eliminarLibro);

    biblioteca.mostrarCatalogo();
});

const biblioteca = new Biblioteca();

function agregarLibro() 
{
    const isbnInput = document.getElementById('isbnInput');
    const tituloInput = document.getElementById('titleInput');

    const isbn = isbnInput.value;
    const titulo = tituloInput.value;

    if (isbn && titulo) {
        const nuevoLibro = new Libro(parseInt(isbn), titulo);
        biblioteca.agregarLibro(nuevoLibro);
        biblioteca.mostrarCatalogo();

        isbnInput.value = "";
        tituloInput.value = "";
    }
}

function buscarLibro() 
{
    const isbnInput = document.getElementById('isbnInput').value;
    if (isbnInput) 
    {
        const resultado = biblioteca.buscarLibro(parseInt(isbnInput));
        if (resultado) 
        {
            alert(`Libro encontrado: ${resultado.titulo}`);
        } 
        
        else 
        {
            alert('Libro no encontrado.');
        }

        document.getElementById('isbnInput').value = "";
    }
}

function eliminarLibro() 
{
    const isbnInput = document.getElementById('isbnInput').value;

    if (isbnInput) 
    {
        biblioteca.eliminarLibro(parseInt(isbnInput));
        biblioteca.mostrarCatalogo();

        document.getElementById('isbnInput').value = "";
    }
}


