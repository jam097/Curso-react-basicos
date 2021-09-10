import React from 'react'

const Producto = ({producto}) => {

    //mejor de esta forma:
    const {nombre, precio, id} = producto

    const seleccionarProducto = (id) => {
        console.log('Comprando...', id);
    }

    return ( <div>
                <h2 style={{color:'blue'}}>{nombre}</h2>
                <p style={{color:'red'}}>$ {precio}</p>
                <button 
                type="button"
                onClick={() => seleccionarProducto(id)}
                >Comprar</button>
            </div> );

    //return ( <h2 style={{color:'blue'}}>{producto.nombre}</h2> );
}
 
export default Producto;