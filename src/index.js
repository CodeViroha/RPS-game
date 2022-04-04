import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Computer from './pages/Computer';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/*" element={<App/>}/>
    <Route exact path="/user" element={<User/>}/>
    <Route exact path="/computer" element={<Computer/>}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
