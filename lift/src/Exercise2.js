import React, { Component } from 'react';
import Exercise2Kid from "./Exercise2Kid";

class Exercise2 extends Component{
    constructor(props){
        super(props);
        this.state={
            fromInput: "",
        }
    }

    // inChildComponent(info){
    inChildComponent=(info)=>{
        console.log(info);
        this.setState({fromInput: info});
    };

    render(){
        return(
            <div>
                <Exercise2Kid inChildComponent={this.inChildComponent}/>
                <h1>This was typed in the child component</h1>
                <h1>{this.state.fromInput}</h1>
            </div>
        );
    }
}

export default Exercise2;