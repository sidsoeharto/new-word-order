import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Snapshot from './components/Snapshot';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Register from './components/Register';

import React from 'react';

function App() {
  const [state, setState] = React.useState('desktop');
  const [font, setFont] = React.useState('font-guthen');
  return (
    <div className={`App ${state}`}>
      <NavBar />
      <Hero font={font}/>
      <About font={font} />
      <Register font={font}/>
      <Snapshot font={font}/>
      <FAQ font={font}/>
      <Footer font={font}/>
    </div>
  );
}

export default App;
