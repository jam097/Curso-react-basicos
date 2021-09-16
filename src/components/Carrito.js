import React from 'react';
import Producto from './Producto';
import './carrito.css';

const Carrito = ({carrito, agregarProducto}) => {

    return (
        <div className="carrito">
            <h2>Tu carrito de compras</h2>

            {carrito.length === 0 ? <p style={{color:'red'}}>No hay elementos en el carrito</p> :  carrito.map(producto => (<Producto 
                                    key={producto[0]} 
                                    producto={producto[1]}
                                    indiceBoton={producto[0]}
                                    carrito={carrito}
                                    agregarProducto={agregarProducto}
                                    />))}
        </div>
      );
}
 
export default Carrito;
