import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import { NotesContainer } from './pages/NotesContainer';
import Navbar from './components/navbar/Navbar';
import { Nomatch } from './components/no_match/Nomatch';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notes" element={<NotesContainer />}>
            <Route path=":noteId" element={<NotesContainer />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
          <Route path="/404" element={<Nomatch />} />s
          <Route path='*' element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;