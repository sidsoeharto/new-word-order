import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Snapshot from './components/Snapshot';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Register />
      <Snapshot />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
