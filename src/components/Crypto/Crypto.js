import React, { Component } from 'react';
import './Crypto.css';

export default class Crypto extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            alert:{
                type:'',
                result:'',
            }, 
        };

    }
    handleOnChange = e => {
        //const value = e.target.value
        const {target: {value}} = e;

        console.log(value);

        //Evito que la página se recargue presionando enter
        if(e.keyCode === 13) {
            e.preventDefault();
        }

        if(value.trim() > 0) {
            this.setState({
                number: value
            });
        }
       
        /* Message vuelve a su estado inicial para dejar
         de mostrar el mensaje en pantalla al meter un nuevo */ 
         this.setState({
            result: "",
        });
        
    }

    handleOnClick = () => {
        const result = calculateCypto(this.state.number);
        this.setState({
            number: "",
            result: result,
        })
    }

  render() {
    return (
        <div className = "Crypto">
            <div className = "Box">
                <div className = "Title">
                Crypto Coinz
            </div>

                <div className = "note">
                Please make sure its divisible by 10
                <br></br>
                How much money are you willing to invert:
                <br></br>
                <br></br>
                <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                    className = "input"
                />
                <br></br>
                </div>

                <div className = "result">  
                    <button onClick={this.handleOnClick}>Convert</button>
                    <br></br>
                        You're able to buy these many coins:
                    <h2 className = {(this.state.number)}>{(this.state.result)}</h2>          
                </div>
            </div>
        </div>
    )
  }
}

function calculateCypto(value) {
    let result = value % 10 === 0 ? value/10 : "";
    return result;
}
