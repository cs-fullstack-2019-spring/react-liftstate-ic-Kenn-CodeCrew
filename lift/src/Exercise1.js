import React, { Component } from 'react';
import MinAndMax from "./MinAndMax";

class Exercise1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            max: -999,
            min: 999,
        };
    }

    getMaxNumber=(maximum)=>{
        this.setState({max: maximum});
        // console.log("This is the maximum number!!!!" + max);
    };

    getMinNumber=(minimum)=>{
        this.setState({min: minimum});
    };

    render(){
        const numberArray = [1,-5,1,2,44,3,4,5,5,5,5,6,7];
        return (
            <div className="App">
                <MinAndMax numberArray={numberArray} getMaxNumber={this.getMaxNumber} getMinNumber={this.getMinNumber}/>
                <h1>The max is: {this.state.max}</h1>
                <h1>The min is: {this.state.min}</h1>
            </div>
        );
    }
}

export default Exercise1;