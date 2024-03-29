import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: '' 
  }


  paginaAnterior = () =>{
    let pagina=this.pagina;
    if (pagina===1) return null;
    pagina -= 1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    })
  }

  paginaSiguiente = () =>{
    let pagina=this.pagina;
    pagina += 1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    })
  }


  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=39572802-87e55c1c710cf8481e1848fe3&q=${termino}&per_page=30&page=${pagina}`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina:1
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
        <div className='row justify-content-center'>
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}




          />
        </div>
      </div>
    );
  }
}

export default App;

