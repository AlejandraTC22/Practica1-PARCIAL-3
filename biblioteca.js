
export default class Biblioteca 
{
    constructor() 
    {
        this.raiz = null;
    }

    agregarLibro(libro) 
    {
        this.raiz = this._agregar(this.raiz, libro);
    }

    _agregar(nodo, libro) 
    {
        if (nodo === null) 
        {
            return libro;
        }

        if (libro.isbn < nodo.isbn) 
        {
            nodo.izquierda = this._agregar(nodo.izquierda, libro);
        } 
        
        else if (libro.isbn > nodo.isbn) 
        {
            nodo.derecha = this._agregar(nodo.derecha, libro);
        }

        return nodo;
    }

    buscarLibro(isbn) 
    {
        return this._buscar(this.raiz, isbn);
    }

    _buscar(nodo, isbn) 
    {
        if (nodo === null || nodo.isbn === isbn) 
        {
            return nodo;
        }

        if (isbn < nodo.isbn) 
        {
            return this._buscar(nodo.izquierda, isbn);
        } 
        else 
        {
            return this._buscar(nodo.derecha, isbn);
        }
    }

    eliminarLibro(isbn) 
    {
        this.raiz = this._eliminar(this.raiz, isbn);
    }

    _eliminar(nodo, isbn) 
    {
        if (nodo === null) 
        {
            return null;
        }

        if (isbn < nodo.isbn) 
        {
            nodo.izquierda = this._eliminar(nodo.izquierda, isbn);
        } 

        else if (isbn > nodo.isbn) 
        {
            nodo.derecha = this._eliminar(nodo.derecha, isbn);
        } 
        
        else 
        {
            // Nodo con un solo hijo o sin hijos
            if (nodo.izquierda === null) 
            {
                return nodo.derecha;
            } 
            
            else if (nodo.derecha === null) 
            {
                return nodo.izquierda;
            }

            // Nodo con dos hijos
            nodo.isbn = this._nodoConValorMinimo(nodo.derecha).isbn;
            nodo.derecha = this._eliminar(nodo.derecha, nodo.isbn);
        }

        return nodo;
    }

    _nodoConValorMinimo(nodo) 
    {
        while (nodo.izquierda !== null) 
        {
            nodo = nodo.izquierda;
        }
        return nodo;
    }

    mostrarCatalogo() 
    {
        document.getElementById('catalogOutput').innerHTML = this._recorridoEnOrden(this.raiz);
    }

    _recorridoEnOrden(nodo) 
    {
        if (nodo !== null) 
        {
            return (
                this._recorridoEnOrden(nodo.izquierda) +
                `<div> ISBN: ${nodo.isbn} Nombre: ${nodo.titulo} </div>` +
                this._recorridoEnOrden(nodo.derecha)
            );
        }
        return '';
    }
}

