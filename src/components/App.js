import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper'

class App extends Component {

  state =  {
    datos: {},
    resultado: ''
  }
  cotizaSeguro = (data) =>{
    let valorBase = 2000;
    let {anho, marca, plan} = data;
    let difAnio = obtenerDiferenciaAnio(anho);
    let resultado = valorBase*(1 - (difAnio*0.03))

    resultado = (resultado*calcularMarca(marca)*obtenerPlan(plan)).toFixed(2);

    let datos = {
      marca,
      plan,
      anho
    }

    this.setState({
      resultado,
      datos
    });
  }

  render() {
    const titulo = "Cotizador De Seguros De Auto"
    return (
      <div className="contenedor">
        <Navbar/>
        <Header titulo = {titulo}/>

        <div className="contenedor-formulario">
          <Formulario cotizaSeguro={this.cotizaSeguro}/>
          <Resumen resumen= {this.state.datos} resultado = {this.state.resultado}/>
        </div>
        
      </div>

      
    );
  }
}

export default App;
