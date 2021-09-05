import React from 'react';

//function declaration
function Header(){
    const edad = 18;

    let mensaje;
    let colocarMensaje = true;

    if(edad >= 18){
        mensaje = 'Eres mayor de edad';
    }
    else{
        mensaje = 'Eres menor de edad'
    }

    return (
        // Ojo solo se puede retornar un elemento HTML por eso tuvimos que colocar los h1 y h2 dentro de un <div>
        <div>
            <h1 className="encabezado">Tienda virtual</h1>
            <div>
                <h1>Desde el Header</h1>
                <h2>{edad}</h2>            
            </div>
            <div>
                <p>imprimiendo dirctamente la variable :</p> {mensaje} 
                <br/>
                {/*Utilizando un operador ternario */}
                <p>Desde un operador ternario :</p> {colocarMensaje ? ('Eres mayor de edad') : ('Eres menor de edad')}

            </div>
        </div>
    );
};

export default Header;