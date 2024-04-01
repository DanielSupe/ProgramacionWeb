
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginTemplate from './modules/Login/template';
import ConsumoApiTemplate from './modules/consumoApi/template';
import HomeTemplate from './modules/home/template';
const App = () => {



  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTemplate/>} />
          <Route path="/Login" element={<LoginTemplate/>} />
          <Route path="/ConsumoApi" element={<ConsumoApiTemplate/>} />

        </Routes>

       </BrowserRouter> 
  )
}

export default App