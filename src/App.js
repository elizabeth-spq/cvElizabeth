import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Inicio from './home/Inicio';
import Mainbar from './common/Mainbar';
import Aboutme from './home/Aboutme';
import Sidebar from './common/Sidebar';


function App() {

  const [show, setShow] = useState(false)


  return (
    <div >
      <BrowserRouter>        
          <Sidebar />
      </BrowserRouter>




    </div>
  );
}

export default App;
