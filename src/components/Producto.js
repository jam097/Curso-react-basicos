import React from 'react'

const Producto = ({producto, productos, carrito, agregarProducto, indiceBoton}) => {

    //mejor de esta forma:
    const {nombre, precio, id} = producto;

    let indiceCarrito = carrito.length;

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {

        let productoSeleccionado = productos.filter(producto => producto.id === id)[0];

        productoSeleccionado = [indiceCarrito , productoSeleccionado];

        indiceCarrito = indiceCarrito + 1

        agregarProducto([...carrito, productoSeleccionado]); //utilizamos el operador spread para mantener en el estado los artículos 

    }

    // Eliminar producto del carrito
    const eliminarProducto = (indice) => {

        const productosRestantes = carrito.filter(producto => producto[0] !== indice);

        agregarProducto(productosRestantes);
    }

    return ( <div>
                <h2 style={{color:'blue'}}>{nombre}</h2>
                <p style={{color:'red'}}>$ {precio}</p>
                {productos ? 
                <button 
                type="button"
                onClick={() => seleccionarProducto(id)}
                >Comprar</button>
                : <button 
                type="button" 
                id={indiceBoton}              
                onClick={() => eliminarProducto(indiceBoton)}
                >Eliminar</button>}
            </div> );
            
}
 
export default Producto;