import React from 'react'

const Producto = ({producto, /*productos,*/ carrito, agregarProducto}) => {

    //mejor de esta forma:
    const {nombre, precio, id} = producto

    const seleccionarProducto = (id) => {

        //const producto = productos.filter(producto => producto.id === id);
        const productoSeleccionado = Object.values(producto); // [producto.id, producto.nombre, producto.precio];

        agregarProducto([...carrito, productoSeleccionado]); //utilizamos el operador spread para mantener en el estado los artículos 
                                                           //previamente seleccionados

        //console.log('Comprando...', id);
        //console.log(productoSeleccionado[1]);
        //console.log(productoSeleccionado);
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