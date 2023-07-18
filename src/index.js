import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter,BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App';
import Transition from './sections/LoadingAnimation';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
  </BrowserRouter>
  )
}



root.render(renderApp());


