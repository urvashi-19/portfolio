import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contacts from "./routes/Contacts";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path ='/' element = {<App/>}/>
  <Route path ='/' element = {<Home/>}/>
  <Route path ='/about' element = {<About/>}/>
  <Route path ='/contacts' element = {<Contacts/>}/>
  <Route path ='/project' element = {<Project/>}/>

  
  

  
  </Routes>
   
  </BrowserRouter>
  
   
   </>
  

);