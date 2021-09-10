import React from 'react';

//function declaration
//function Header(props){ // En la comunidad de React ya no se utiliza esta forma en la inclusion de las props si no la siguiente.
function Header({titulo, numero}){   //Esto nos permite tener un código mas limpio.  
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
            {/*<h1 className="encabezado">{props.titulo} {props.numero}</h1> antes se hacia de estas forma*/}
            <h1 className="encabezado">{titulo} {numero}</h1>{/* Ahora se hace de esta forma (destructuring de props):*/}
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