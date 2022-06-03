import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            alert:{
                type:'',
                message:'',
            }, 
            button: "fa fa-pause",
            play: true,
            hide: 'hidden',
            time: 0,
        };

        this.times ={
            defaultTime: 1500, //25 min
            shortBreak: 300, // 5 min
            longBreak: 900, // 15 min
        }
    }


    componentDidMount(){

        //establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //buttons
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'start working'    
            }
        })

        this.setTime(this.times.defaultTime);

    }
    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'little break'    
            }
        })
        
        this.setTime(this.times.shortBreak);
    }
    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'have a longer break'    
            }
        })
        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
            play: true,
            hide: ""
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeep'
                }
            });
        }
        else if(this.state.time !== 0 && this.state.play){
            this.setState({
                time: this.state.time - 1,
                button: "fa fa-pause"
            });
        }
        else {
            this.setState({
                button: "fa fa-play",
                time:this.state.time
            })
        }
    }

    displayTimer(seconds){
        let minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;

        let second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        
        return `${minute} : ${second}`
    }

    pauseButton = () =>{

        this.setState({
            play: !this.state.play
        })
    }

    reset = () => {
        this.setTime(this.times.defaultTime);
        this.restartInterval();
        this.setState({
            alert:{
                message:'',
            }, 
            play: false,
            hide: "hidden"
        })
    }


  render() {
      const {alert:{message, type}, time} =this.state;
    return (
      <div className = "Pomodoro">
          <div className = {`alert ${type}`}>
                {message}
          </div>

          <div className = "timer">
                {this.displayTimer(time)}
          </div>

          <div className = "types">
              <button 
                className = "start"
                onClick= {this.setTimeForWork}
              > 
                    start working
              </button>
              <button 
                className = "short"
                onClick= {this.setTimeForShortBreak}
                > 
                short break
              </button>
              <button 
                className = "long"
                onClick= {this.setTimeForLongBreak}
                > 
                long break
              </button>
          </div>
          <div hidden={this.state.hide}>
            <button 
                className = "pause"
                
                onClick= {this.pauseButton}
                > 
                <i class= {this.state.button}></i>
            </button>
            <button 
                className = "reset"
                onClick= {this.reset}
                > 
                <i class= "fa fa-stop"></i>
            </button>
          </div>
      </div>
    )
  }
}
