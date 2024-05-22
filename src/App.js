import React from 'react';
import './components/styles/style.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts'
import PostIdPage from './pages/PostIdPage';
import Navbar from './components/UI/navbar/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='' element={<About />} />
          <Route exact path='/posts' element={<Posts />} />
          <Route exact path='/posts/:id' element={<PostIdPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;

