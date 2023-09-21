import React, { Component } from 'react';
import Buscador from "./components/Buscador";

class App extends Component {

  state = {
    termino : ''
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=39572802-87e55c1c710cf8481e1848fe3&q=${termino}`;
    //console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
      
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
      </div>
    );
  }
}

export default App;
