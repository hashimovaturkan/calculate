import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import Buttons from './components/Buttons/Buttons'

function App() {
  return (
    <div className='calc-wrapper'>
      <Header />
      <UserInput />
      <Buttons />
      {/* <Footer />   */}
    </div>
  );
}

export default App;
