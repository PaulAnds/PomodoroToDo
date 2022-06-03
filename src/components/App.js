//import Home from './Home/Home.js';
//import Header from '../shared/layout/Header.js';
//import Footer from '../shared/layout/Footer.js';
import Content from '../shared/layout/Content.js';
import './App.css';
//import Todo from './Todo/Todo.js';
//import Timer from './Pomodoro/Timer';
//import Crypto from './Crypto/Crypto';
//import Charthome from './Chart/Charthome';
//import Animation from './Animation/Animation.js';
//import Numbers from './PureComponent/Numbers';
//import Calculator from './Calculator/Calculator.js';
import Person from './Forms/Person';

function App() {
  return (
    <div className="App">
      <Content>
        <Person />
      </Content>
    </div>
  );
}

export default App;