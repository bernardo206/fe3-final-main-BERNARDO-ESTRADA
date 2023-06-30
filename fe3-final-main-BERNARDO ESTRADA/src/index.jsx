import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from "./Components/utils/ContextGlobalProvider";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"
import DataContextProvider from './Components/DataContextProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
   <BrowserRouter>

   <DataContextProvider>
   <ContextProvider>
  
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path='/favs' element={<Favs/>} />
        
      </Routes>
      
      </ContextProvider>
      </DataContextProvider>
    </BrowserRouter>

  </React.StrictMode>

  
);


