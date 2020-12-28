import React from 'react'
import './App.css'
import './style/style.css'
import Header from './Komponen/Header';
import Navigation from './Komponen/Navigation';
import Stack from './Komponen/Stack';
import Experience from './Komponen/Experience';

function App() {
  return (
    <div>
    <Navigation />
    <Header />
    <Stack />
    <Experience />
    </div>
  );
}

export default App;
