import React, { Component } from 'react';
import './Timer.css';

export default class Timer extends Component {
    constructor(){
        super();

        //initialState
        this.state={
            alert:{
                type:'',
                message:'',
            }, 

            time:0
        };

        this.times ={
            defaultTime: 1500, //25 min
            shortBrak: 300, // 5 min
            longBrak: 900, // 15 min
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

    //Botones
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'TRABAJA PERRA'    
            }
        })
    }
    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBrake',
                message: 'DESCANSANDO'    
            }
        })
    }
    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'LongBrake',
                message: 'DESCANSANDO MAS, HUEVON'    
            }
        })
    }

    setTime = (newTime) => {
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval();

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeep'
                }
            })
        }
        else{
            
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
                Mostrar tiempo en minutos
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
