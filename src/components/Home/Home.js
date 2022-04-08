import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    constructor(props){
        super();

        this.state = {
            name: 'Paul',
        }
    }

    //hace referencia a actualizar lo de adentro nomas una vez
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Solis',
            })
        }, 2000);
    }

    render() {

        const buttonStyle = {
            backgroundColor: 'red',
            border: '1px solid black',
        }

        const{name} = this.state;

    console.log(name);

        return (
            <div className="Home">
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at vestibulum arcu, at tempus erat. Duis ac pharetra tellus. Quisque a mi a massa sodales consequat. Donec dapibus euismod accumsan. Duis blandit cursus lacus, eget dapibus eros. Sed augue nibh, fringilla vel varius vitae, porta quis arcu. Aenean dolor erat, laoreet sit amet auctor sed, auctor sit amet ligula. Phasellus vel augue fringilla, ultrices felis at, ornare nisi. Proin porttitor diam eget rhoncus vulputate. In molestie diam quis urna pellentesque tempus. Integer ullamcorper magna dolor, eget maximus diam pulvinar eget. Suspendisse potenti.</p>
                <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">Find a girlfriend</a>

                <div>
                    {/* Styles inline */}
                    <button style= {{
                        backgroundColor: 'MediumSeaGreen',
                        border: '1px solid black',
                    }}>
                        click
                    </button>
                    {/* Styles objects */}
                    <button style ={buttonStyle}>
                        click
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;