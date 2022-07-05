import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import Buttons from './components/Buttons/Buttons'
import Footer from './components/Footer/Footer'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [random, setRandom] = useState(Math.random());

  const getValueHandler = data => {
    setValue(data);
    setRandom(Math.random())
  }

  return (
    <div className='calc-wrapper'>
      <Header/>
      <UserInput onSend={value} onRandom={random}/>
      <Buttons onGetValue={getValueHandler}/>
      <Footer />  
    </div>
  );
}

export default App;
