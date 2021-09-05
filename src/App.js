import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    {/* ojo solo se puede retornar un elemento html que contenga todo, 
        así sería con un elemento div que en nuestro html generaría un div que no hace nada (<div> == $0)
      <div className="App">
        <Header/>
        <Footer/>
      </div> 
    
        es preferible importar el tag Fragment que evita esto.*/},

    <Fragment>
        <Header/>
        <Footer/>
    </Fragment>

  );
}

export default App;
