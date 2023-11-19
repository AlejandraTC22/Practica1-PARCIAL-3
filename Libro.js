// Clase Book que representa un nodo de libro en el árbol de búsqueda binaria
export default class Libro 
{
    constructor(isbn, titulo) 
    {
        this.isbn = isbn;
        this.titulo = titulo;
        this.izquierda = null;
        this.derecha = null;
    }
}