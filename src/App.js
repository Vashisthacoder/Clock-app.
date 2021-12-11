import logo from './logo.svg';
import './App.css';
import './App.css';
import { useState,currentTime,setNewTime,initialState  } from 'react';

function App() {

  let clock = new Date() .toLocaleTimeString();
  const [currentTime, setNewTime] = useState(clock);

 let updateTime = () => {
   clock = new Date().toLocaleTimeString();
   setNewTime(clock);
 }

 setInterval(updateTime,1000)

  return (
    
<div className="clock">

<h1>DIGITAL CLOCK</h1>

    <div className="App">


      <div className="clock_style">
        <h1>{currentTime}</h1>


      </div>

    </div>
    </div>


  );
}

export default App;
