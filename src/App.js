import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import Buttons from './components/Buttons/Buttons'
import Footer from './components/Footer/Footer'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [random, setRandom] = useState(Math.random());
  const [color, setColor] = useState("dark");

  const getValueHandler = data => {
    setValue(data);
    setRandom(Math.random())
  }

  const colorHandler = e => {
    if(color == 'dark')
      setColor("light");
    else
      setColor("dark");
    
  }


  return (
    <div className={'calc ' + (color == "dark" ? "calc-wrapper__dark" : "calc-wrapper__light")}>
      <div className="calc-wrapper">
        <Header onColorHandler={colorHandler}/>
        <UserInput onSend={value} onRandom={random} onColorChange={color == "dark" ? false : true}/>
        <Buttons onGetValue={getValueHandler} onColorChange={color == "dark" ? false : true}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
