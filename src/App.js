import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
