import React from 'react';
import './components/styles/style.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts'
import Navbar from './components/UI/navbar/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='*' element={<NotFound />} /> {/* Обработка несуществующих маршрутов */}
        </Routes>
    </Router>
  );
}

export default App;

