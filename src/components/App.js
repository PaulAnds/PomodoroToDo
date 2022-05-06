//import Home from './Home/Home.js';
//import Header from '../shared/layout/Header.js';
//import Footer from '../shared/layout/Footer.js';
import Content from '../shared/layout/Content.js';
import './App.css';
//import Todo from './Todo/Todo.js';
//import Timer from './Pomodoro/Timer';
//import Crypto from './Crypto/Crypto';
import Charthome from './Chart/Charthome';

function App() {
  return (
    <div className="App">
      <Content>
        <Charthome />
      </Content>
    </div>
  );
}

export default App;