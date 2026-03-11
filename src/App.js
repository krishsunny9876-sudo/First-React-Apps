import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForm';
import About from './components/About'
import { useState } from 'react';

function App() {
  const [darkMode, set_darkMode] = useState({
    backgroundColor: 'white',
    color: 'black',
  });
  const toggleColor = () => {
    if (darkMode.color === 'black') {
      set_darkMode({
        backgroundColor: 'black',
        color: 'white'
      })
    }
    else {
      set_darkMode({
        backgroundColor: 'white',
        color: 'black'
      })
    }
  }
  return (
    <>
      <Navbar title="Kirten" home="Home" mode={darkMode} toggle_color={toggleColor} />
      <div className="container my-3">
        <TextForms />
      </div>
      <About />
    </>
  );
}

export default App;
