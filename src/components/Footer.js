import React from 'react';

//function expression
const Footer = () => { // el encerrar en llaves al componente indicanda que puede utilizarse código javascript
        return(        // si lo omito puedo escribir mi componente comose indica mas abajo en comentario.
            <footer>
                <p>Todos los derechos reservados &copy;</p>
            </footer>
        );
};

// Estono se puede hacer cuando declaramos nuestro componente como function declaration, arrojaría un error de sintaxis.
/*
const Footer = () => ( // sin las llaves puedo precindir del return ya que es redundante.    
            <footer>
                <p>Todos los derechos reservados &copy;</p>
            </footer>
        );
*/


export default Footer;
