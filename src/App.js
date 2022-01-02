import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Snapshot from './components/Snapshot';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Register from './components/Register';
import Testing from './components/Testing';

import React, {forwardRef, useRef} from 'react';

function App() {
  const registerRef = useRef()

  function handleBackClick() {
    registerRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const [state, setState] = React.useState('desktop');
  const [font, setFont] = React.useState('font-meta');
  return (
    <div className={`App ${state}`}>
      <NavBar onBackClick={handleBackClick}/>
      <Hero font={font} onBackClick={handleBackClick}/>
      <About font={font} />
      <Register font={font} ref={registerRef}/>
      <Snapshot font={font}/>
      <Testing font={font} onBackClick={handleBackClick}/>
      <FAQ font={font}/>
      <Footer font={font}/>
    </div>
  );
}

export default App;
