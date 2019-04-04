import React, { Component } from 'react';

class Exercise2Kid extends Component{

    infoInput=(e)=>{
        this.props.inChildComponent(e.target.value);
    };

    render(){
        return(
            <div>
                <input type="text" onKeyDown={this.infoInput}/>
            </div>
        );
    }
}

export default Exercise2Kid;