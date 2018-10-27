import React from 'react';
import { primeraMayuscula } from './../helper';
import Resultado from './Resultado';

class Resumen extends React.Component {
    cajaResumen(){
        let {anho,marca,plan} = this.props.resumen;

        if(!anho || !marca || !plan){
            console.log(this.props.resumen);
            return null;
        }

        return(
            <div className="resumen">
                <h2>Resumen de cotización</h2>
                <li>Año: {primeraMayuscula(anho)}</li>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </div>
            )
    }

    render(){
        return( 
            <div>
                {this.cajaResumen()}
                <Resultado resultado={this.props.resultado}/>
            </div>
        )
    }
}

export default Resumen;