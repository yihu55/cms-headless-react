import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SinglePostPage from './pages/SinglePostPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CategoriesPage from './pages/CategoriesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SinglePostPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
