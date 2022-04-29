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

            time: 0
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
                type: 'LongBreak',
                message: 'have a longer break'    
            }
        })
        
        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
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
        else{
            this.setState({
                time: this.state.time - 1
            });
        }
    }


  render() {
      const {alert:{message, type}, time} =this.state;
    return (
      <div className = "Pomodoro">
          <div className = {`alert ${type}`}>
                {message}
          </div>

          <div className = "timer">
                {this.state.time}
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
      </div>
    )
  }
}
