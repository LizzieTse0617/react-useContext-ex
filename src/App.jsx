import { useState, useEffect } from 'react';
import Favs from './components/Favs';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';

import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [fav, setFav] = useState([]);

  // Load saved favorites from localStorage on component mount
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs'));
    if (savedFavs) {
      setFav(savedFavs);
    }
  }, []);

  // Save favorites to localStorage whenever the fav state changes
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(fav));
  }, [fav]);

  return (
  
      <div className="App">
        <h1>Saving user data in local storage exercise</h1>
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
