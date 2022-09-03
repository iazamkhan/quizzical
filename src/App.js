import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import QuizPage from './components/QuizPage'
import Home from './components/Home'
import './App.css';

function App() {

  const [name, setName] = useState()

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home name={name} setName={setName}/>}></Route>
        <Route exact path="/quiz" element={<QuizPage name={name} setName={setName} />}></Route>
      </Routes>
    </>

  );
}

export default React.memo(App);
