import React, {Component} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Resultado extends Component {

    cajaResultado(){
        let {resultado} = this.props;
        let mensaje = !resultado?'Elige Marga Año y Tipo de seguro':'Resultado: $';
        
        return(
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado" key={resultado}
                    timeout ={{enter:500, exit:500}}>
                        <span>
                            {resultado}
                        </span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.cajaResultado()}
            </div>
        )
    }
}

export default Resultado;