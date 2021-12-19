import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoinsListLKR from './components/CoinsListLKR';
import CoinsListUSD from './components/CoinsListUSD';

import { BrowserRouter, Routes,Route } from 'react-router-dom';




function App() {


  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<CoinsListLKR />}></Route>
        <Route path="/usd" element={<CoinsListUSD />}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
