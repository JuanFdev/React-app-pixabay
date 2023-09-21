import React, { Component } from 'react'

class Buscador extends Component {
    // Creamos una "etiqueta" que nos permite referenciar un elemento de la página
    busquedaRef = React.createRef();

    // Esta función se ejecuta cuando el usuario envía el formulario
    obtenerDatos = (e)=> {
        e.preventDefault(); // Previene que la página se recargue al enviar el formulario

        // Obtenemos lo que el usuario escribió en el campo de búsqueda
        const termino = this.busquedaRef.current.value;

        // Llamamos a la función 'datosBusqueda' que nos dieron desde el componente padre
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        {/* Creamos una caja de texto para que el usuario escriba */}
                        <input
                            ref={this.busquedaRef} // Asociamos esta caja de texto a nuestra "etiqueta"
                            type='text'
                            className='form-control input-lg'
                            placeholder='Busca tu imagen. Ejemplo:'
                        />
                    </div>
                    <div className='form-group col-md-4'>
                        {/* Creamos un botón para enviar el formulario */}
                        <input
                            type='submit'
                            className='btn btn-lg btn-danger btn-block'
                            value="Buscar..."
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;


