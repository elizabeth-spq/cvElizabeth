import React, { useState } from 'react';
import './Sidebar.css';
//import { Link } from 'react-router-dom';
import Inicio from '../home/Inicio';

function Sidebar(props) {

    const [show, setShow] = useState(false)

    return (
        <main className={show ? 'space-toggle' : null}>
            <header id='header' className={`header ${show ? 'space-toggle' : null}`}>
                <div className="header-toggle" onClick={() => setShow(!show)}>
                    <i className="bi bi-list btnmenu"></i>
                </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className="nav">
                    <div>
                        <h1 id='cvName'>Elizabeth <i className="bi bi-circle-fill circlePoint"/></h1>
                        <a href="#inicio" className="nav-logo active">
                            <i className="bi bi-house-door nav-logo-icon"></i>
                            <span className="nav-logo-name">
                                Inicio
                            </span>
                        </a>
                        <div className="nav-list">
                            <a href="#aboutme" className="nav-link ">
                                <i className="bi bi-person-check nav-logo-icon"></i>
                                <span className="nav-logo-name">Sobre mi</span>
                            </a>
                            <a href="#servicios" className="nav-link">
                                <i className="bi bi-briefcase nav-logo-icon"></i>
                                <span className="nav-logo-name">Servicios</span>
                            </a>
                            <a href="#experiencia" className="nav-link">
                                <i className="bi bi-mortarboard nav-logo-icon"></i>
                                <span className="nav-logo-name">Experiencia</span>
                            </a>
                            <a href="#portafolio" className="nav-link">
                                <i className="bi bi-folder-check nav-logo-icon"></i>
                                <span className="nav-logo-name">Portafolio</span>
                            </a>
                            <a href="#contacto" className="nav-link">
                                <i className="bi bi-chat nav-logo-icon"></i>
                                <span className="nav-logo-name">Contacto</span>
                            </a>
                        </div>
                        <h5 className='copy-right'>© 2023 Elizabeth</h5>


                    </div>

                </nav>
            </aside>
            <Inicio />


        </main>
    );
}

export default Sidebar;