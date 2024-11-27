import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
