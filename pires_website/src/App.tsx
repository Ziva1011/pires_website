import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar2 from './components/Navbar';
import Posts from './components/Repo';

function App() {
  return (
    <>
      <Navbar2/>
      <Home/>
      <Posts/>
    </>
  );
}

export default App;
