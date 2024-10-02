// import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Layout from './Layout/Layout';
import Search from './Search/Search';
import List from './List/List';
  	import {Routes, Route} from 'react-router-dom';

function App() {
  

    
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/List/:search" element={<List />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
