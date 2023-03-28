//import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Header from './common/Header';
//import Inicio from './home/Inicio';
//import Mainbar from './common/Mainbar';
//import Aboutme from './home/Aboutme';
import Sidebar from './common/Sidebar';
import DotLoader from "react-spinners/DotLoader";


function App() {

  //const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <div className='splash' >
      {
        loading ?
          <DotLoader
            color={"#FC7802"}
            loading={loading}
            size={120}
          />
          :
          <BrowserRouter>
            <Sidebar />
          </BrowserRouter>
      }

    </div>
  );
}

export default App;
