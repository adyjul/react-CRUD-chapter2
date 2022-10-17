import React from 'react';
import {Home,Arsip,TambahData,Detail} from './pages/index';
import Header from './component/header/header';
import NotFound from './pages/notFound/notFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <div className="app-container">
          <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/archives' element={<Arsip/>}/>
            <Route path='/notes/new' element={<TambahData/>}/>
            <Route path='/notes/:id' element={<Detail/>}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>                          
      </div>
    </BrowserRouter>

  );
}

export default App;
