import React from 'react'

const Producto = ({producto, productos, carrito, agregarProducto, indiceBoton}) => {

    //mejor de esta forma:
    const {nombre, precio, id} = producto;

    //console.log('indiceBoton');
    //console.log(indiceBoton);

    let indiceCarrito = carrito.length;

    //const idBotonCarrito = 'indiceCarrito' + indiceCarrito;

    //console.log(parseInt(indiceCarrito).toString());

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {

        let productoSeleccionado = productos.filter(producto => producto.id === id)[0];

        //const productoSeleccionado = Object.values(producto); // [producto.id, producto.nombre, producto.precio];
        //const productoSeleccionado = producto;

        //Crea un nuevo objeto, myobj, con dos propiedades, a y b.
        //var myobj = new Object;
        //myobj.a = 5;
        //myobj.b = 12;

        // Elimina la propiedad a, dejando a myobj solo con la propiedad b.
        //delete myobj.a;
        //console.log ('a' in myobj); // muestra: "false"

        //productoSeleccionado[0].indice = carrito.length;

        //productoSeleccionado["indice"] = indiceCarrito;

        console.log (indiceCarrito);

        productoSeleccionado = [indiceCarrito , productoSeleccionado];
        //productoSeleccionado["indice"] = indiceCarrito;

        indiceCarrito = indiceCarrito + 1

        /*let productos = [{id:0, nombre:'camisa ReactJS',precio:30}];

        productos.push({id:1,nombre:'camisa AngularJS',precio:40});

        let productoSeleccionado = productos.filter(producto => producto.id === 0);

        productoSeleccionado[0]["indice"]=4; */

        console.log(productoSeleccionado)

        //productoSeleccionado['idCarrito'] = carrito.length // Aquí estamos agregando un segundo id para evitar la duplicación de key en el
                                                             // carrito al seleccionar varias veces el mismo producto, no funciono el estado
                                                             // es unico para cada elemento del carrito (static) y se modifica sobre el último.
                                                             // Se debe esperar avanzar con el curso para mejorar el manejo de esta situación,
                                                             // Todo esto es para evitar el mensaje de clave duplicada de arreglo en la consola.

        agregarProducto([...carrito, productoSeleccionado]); //utilizamos el operador spread para mantener en el estado los artículos 
                                                           //previamente seleccionados

        

        //console.log('Comprando...', id);
        //console.log(productoSeleccionado[1]);
        //console.log(productoSeleccionado);
    }

    // Eliminar producto del carrito
    const eliminarProducto = (indice) => {
        //const indiceElementoAeliminar = carrito.lastIndexOf( carrito.find(producto => producto.indice === indice) );
        //console.log(indiceElementoAeliminar);

        console.log('indice eee');
        console.log(indice);
        console.log(producto);

        const productosRestantes = carrito.filter(producto => producto[0] !== indice);

    /*    const totalProductosDelMismoTipoAeliminar = carrito.filter(producto => producto.id === id);

        const ProductosDelMismoAeliminarRestantes = [];

        if(totalProductosDelMismoTipoAeliminar.length !== 0){
            for(let i=0; i < totalProductosDelMismoTipoAeliminar.length - 1; i++) {
                ProductosDelMismoAeliminarRestantes.push(totalProductosDelMismoTipoAeliminar[i]);            
            }
        }

        // colocar los productos filtrados en el state
        agregarProducto(productosRestantes.concat(ProductosDelMismoAeliminarRestantes));
        console.log(productosRestantes);
        console.log(totalProductosDelMismoTipoAeliminar);
        console.log(ProductosDelMismoAeliminarRestantes);*/
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

    //return ( <h2 style={{color:'blue'}}>{producto.nombre}</h2> );
}
 
export default Producto;