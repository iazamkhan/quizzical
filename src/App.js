import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import QuizPage from './components/QuizPage'
import Home from './components/Home'
import './App.css';

function App() {
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/quiz" element={<QuizPage />}></Route>
    </Routes>
    </>
    
  );
}

export default React.memo(App);
