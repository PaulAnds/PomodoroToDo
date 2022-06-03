import React, { Component } from 'react';
import './Person.css';

export default class Person extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            name: '',
            last: '',
            email: '',
            phone: '',
            errors: {
                name: false,
                last: false
            }
        };
    }

    handleOnChange = e => {
        const {target: {value,name}} = e;
        
        this.setState({
            [name]: value
        })
        console.log(value) 
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const{name,last,email,phone} = this.state;
        this.setState({
            
        })

        this.setState({
            errors:{
                name: name.trim() === '',
                last: last.trim() === '',
            }
        })

        if(name && last)
        {
            const data = {
                name, 
                last, 
                email, 
                phone
            };
            console.log('Data: ', data);
        }


    }

  render() {
    return (
      <div>
        <div className = "carta">
            <form onSubmit={this.handleOnSubmit}>
                <div>
                <label>
                    First Name: 
                <br></br>
                    <input 
                        type="text" 
                        name="name" 
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.name ? 'error': ''
                        }
                        />
                </label>
                    {
                        this.state.errors.name
                        && 
                        <div className= 'errorMessage'>Required</div>
                    } 

                <label>
                <br></br>
                    Last Name:
                <br></br>
                    <input 
                        type="text" 
                        name="last" 
                        value = {this.state.last}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.last ? 'error': ''
                        }
                    />
                </label>
                    {
                        this.state.errors.last
                        && 
                        <div className= 'errorMessage'>Required</div>
                    } 

                <label>
                <br></br>
                    Email: 
                <br></br>
                    <input 
                        type="email" 
                        placeholder="email@gmail.com" 
                        name="email" 
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    />
                </label>


                <label>
                <br></br>
                    Phone: 
                <br></br>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="123-456-6789" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        value = {this.state.phone}
                        onChange={this.handleOnChange}
                        />
                <br></br>
                </label>


                <br></br>
                <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
          
      </div>
    )
  }
}
