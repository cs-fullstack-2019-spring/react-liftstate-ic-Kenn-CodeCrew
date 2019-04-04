import React, { Component } from 'react';

class MinAndMax extends Component{
    constructor(props){
        super(props);
        this.maxNumber();
        this.minNumber();
    }

    maxNumber(){
        let max = -999;
        for(var i=0; i<this.props.numberArray.length; i++){
            if(this.props.numberArray[i]>max)
                max=this.props.numberArray[i];
        }
        this.props.getMaxNumber(max);
    }

    minNumber(){
        let min = 999;
        for(var i=0; i<this.props.numberArray.length; i++){
            if(this.props.numberArray[i]<min)
                min=this.props.numberArray[i];
        }
        this.props.getMinNumber(min);
    }

    render(){
        return(
            <h1>Test</h1>
        );
    }
}

export default MinAndMax;