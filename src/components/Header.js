import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header className="top">
                <h1>{this.props.titulo}</h1>
            </header>
        )
    }
}

export default Header