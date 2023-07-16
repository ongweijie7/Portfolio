import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App';
import Transition from './sections/Transition';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Transition/>}/>
      <Route path="/home" element={<App/>}/>
    </Routes>
  </BrowserRouter>
  )
}



root.render(renderApp());


