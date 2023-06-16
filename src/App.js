import React, {useState} from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle === false ? 'dark' : 'light'}>
      <Home toggle={toggle} setToggle={setToggle} />
      <About toggle={toggle} setToggle={setToggle} />
      <Portfolio toggle={toggle} setToggle={setToggle} />
      <Contact toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default App
