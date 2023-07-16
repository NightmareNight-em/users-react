import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import  {Profile}   from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts"
import Gallery from "./components/Gallery/Gallery";
import ToDo from "./components/ToDo/ToDo";
import './App.scss';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      <Route path="/posts/:username" element={<Posts/>}/>
      <Route path="/Gallery/:username" element={<Gallery/>}/>
      <Route path="/ToDo/:username" element={<ToDo/>}/>
    </Routes>
  </>
  

  );
}

export default App;
