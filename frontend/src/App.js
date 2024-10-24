import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
    </div>
  );
}

export default App;
