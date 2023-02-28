import React, { useEffect, useState } from 'react';
import './Mainbar.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';


function Mainbar(props) {
    const [isOpen, setisOpen] = useState (false);
    const togle = () => setisOpen (!isOpen);


    return (

        <div className='container position ' style={{with: isOpen ? "300px" : "50px"}} >
            <div className="sidebar">
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}}>Logo</h1>
                    <i className="bi bi-list"  onClick={togle}></i>

                </div>

            </div>
            <ul className="a" style={{display: isOpen ? "block" : "none"}}>
                <li className="nav-item menuItem">
                    <a className="nav-link active" href="#inicio">iNICIO</a>
                </li>
                <li className="nav-item menuItem">
                    <a className="nav-link active" href="#aboutme">Proveedores</a>
                </li>


            </ul>
        </div>


    );
}

export default Mainbar;