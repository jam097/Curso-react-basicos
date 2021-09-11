import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';


function App() {

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id:0, nombre: 'Camisa ReactJS', precio: 50},
    { id:1, nombre: 'Camisa AngularJS', precio: 40},  
    { id:2, nombre: 'Camisa SveltJS', precio: 30},  
    { id:3, nombre: 'Camisa NestJS', precio: 20}
  ]);

  // state para un carrito de compras
  const [carrito, agregarProducto] = useState([]);

  // Vamos a obtener el año actual para el footer.
  const fecha = new Date().getFullYear();

  return (
    // ojo solo se puede retornar un elemento html que contenga todo, 
    //    así sería con un elemento div que en nuestro html generaría un div que no hace nada (<div> == $0)
    /*  <div className="App">
        <Header/>
        <Footer/>
      </div> */
    
    //    es preferible importar el tag Fragment que evita esto.*/
    
    <Fragment> 
        <Header titulo="Tienda virtual (título pasando props)" // puedo agregar las props que necesite 
        numero={20}
        />

        {/*Aqui se muestra como resolver los problemas con el key id https://reactjs.org/docs/lists-and-keys.html#keys*/}

        <h1>Listado de Productos</h1>
        {productos.map(producto =>(<Producto 
                                    key={producto.id} 
                                    producto={producto} 
                                    /*  productos={productos} este fue un ejemplo del prof. para buscar nuevamente en el componente Producto  */  
                                    /*  mediante una función reactiva (filter) con el id el producto seleccionado y que la función lo devolviera*/
                                    /*  como array. Para esto es preferible utilizar const productoSeleccionado = Object.values(producto); y  */
                                    /*  no tener que realizar la busqueda nuevamente tomando en cuenta que podriamos estar hablando de un arreglo*/
                                    /*  muy grande y estar generando retardos innecesarios.*/
                                    carrito={carrito}
                                    agregarProducto={agregarProducto}
                                    />))}

        <Footer fecha={fecha}/>
    </Fragment>

  );
}

export default App;
