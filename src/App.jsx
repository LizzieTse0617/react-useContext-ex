import { useState, useEffect } from 'react';
import Favs from './components/Favs';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
  
      <div className="App">
        <header>      <h1>Saving user data in local storage exercise</h1></header>

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

  );
}

export default App;
