import React from 'react';
import {Home,Arsip,TambahData} from './pages/index';
import Header from './component/header/header';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <div className="app-container">
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/archives' element={<Arsip/>}/>
            <Route path='/notes/new' element={<TambahData/>}/>
          </Routes>                          
      </div>
    </BrowserRouter>

  );
}

export default App;
