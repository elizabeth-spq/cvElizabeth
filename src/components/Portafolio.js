import React, { useEffect, useState } from 'react';
import './Portafolio.css';
import Allprojects from './Allprojects';


function Portafolio(props) {
    const mostrarProyectosAll = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-1  g-4 mt-1" id="cards-proyectos">
                {Allprojects.map(item =>
                    <div id='cont' className="col-card col" key={item.id} >
                        <div className="card">
                            <img className='px-5 py-5' src={item.imagen} alt="..." />
                            <div className="capa">
                                <div className='titu'>{item.categoria}</div>
                                <h5 className='text-light text-start ms-4 me-5 '>{item.Name}</h5>
                                <p className='text-light text-start ms-4 me-5 ' >{item.descripcion}</p>
                                <div className='position-absolute bottom-0 start-0 mb-3 ms-4 '>
                                    <a href={item.github} className=" fs-2 text-warning me-2"><i class="bi bi-link"></i></a>
                                    {/*<a href={item.muestra} className=" fs-2  text-warning"><i class="bi bi-youtube" ></i></a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        )
    }
    const mostrarProyectosWeb = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-1  g-4 mt-1" id="cards-proyectos">
                {Allprojects.filter((item) => {
                    return item.categoria === "Web";
                }).map(item =>
                    <div id='cont' className="col-card col" key={item.id} >
                        <div className="card">
                            <img className='px-5 py-5' src={item.imagen} alt="..." />
                            <div className="capa">
                                <div className='titu'>{item.categoria}</div>
                                <h5 className='text-light text-start ms-4 me-5'>{item.Name}</h5>
                                <p className='text-light text-start ms-4 me-5 ' >{item.descripcion}</p>
                                <div className='position-absolute bottom-0 start-0 mb-3 ms-4 '>
                                    <a href={item.github} className=" fs-2 text-warning me-2"><i class="bi bi-github" ></i></a>
                                    {/*<a href={item.muestra} className=" fs-2  text-warning"><i class="bi bi-youtube" ></i></a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    const mostrarProyectosApp = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-1  g-4 mt-1" id="cards-proyectos">
                {Allprojects.filter((item) => {
                    return item.categoria === "App";
                }).map(item =>
                    <div id='cont' className="col-card col" key={item.id} >
                        <div className="card">
                            <img className='px-5 py-5' src={item.imagen} alt="..." />
                            <div className="capa">
                                <div className='titu'>{item.categoria}</div>
                                <h5 className='text-light text-start ms-4 me-5' >{item.Name}</h5>
                                <p className='text-light text-start ms-4 me-5' >{item.descripcion}</p>
                                <div className='position-absolute bottom-0 start-0 mb-3 ms-4 '>
                                    <a href={item.github} className=" fs-2 text-warning me-2"><i class="bi bi-github" ></i></a>
                                    {/*<a href={item.muestra} className=" fs-2  text-warning"><i class="bi bi-youtube" ></i></a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    const mostrarProyectosFigma = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-1  g-4 mt-1" id="cards-proyectos">
                {Allprojects.filter((item) => {
                    return item.categoria === "Figma";
                }).map(item =>
                    <div id='cont' className="col-card col" key={item.id} >
                        <div className="card">
                            <img className='px-5 py-5' src={item.imagen} alt="..." />
                            <div className="capa">
                                <div className='titu'>{item.categoria}</div>
                                <h5 className='text-light text-start ms-4 me-5' >{item.Name}</h5>
                                <p className='text-light text-start ms-4 me-5' >{item.descripcion}</p>
                                <div className='position-absolute bottom-0 start-0 mb-3 ms-4 '>
                                    <a href={item.github} className=" fs-2 text-warning me-2"><i class="bi bi-link"></i></a>
                                    {/*<a href={item.muestra} className=" fs-2  text-warning"><i class="bi bi-youtube" ></i></a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div id='portafolio' className='servicios container'>
            <h1 className='subtitle my-5'>Portafolio</h1>
            <div>
                <ul className="nav nav-tabs d-flex flex-row justify-content-start " id="myTab" role="tablist">
                    <li className="nav-item " role="presentation">
                        <button className="nav-link nav-link-Tab active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <div className='px-3'>
                                <i class="bi bi-pc-display-horizontal"></i>
                                <small className='px-3 fs-5 fw-bolder'>Todos</small>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item " role="presentation">
                        <button className="nav-link nav-link-Tab" id="web-tab" data-bs-toggle="tab" data-bs-target="#web" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <div className='px-3'>
                                <i class="bi bi-pc-display-horizontal"></i>
                                <small className='px-3 fs-5 fw-bolder'>Web</small>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item " role="presentation">
                        <button className="nav-link nav-link-Tab" id="app-tab" data-bs-toggle="tab" data-bs-target="#app" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <div className='px-3'>
                                <i class="bi bi-phone"></i>
                                <small className='px-3 fs-5 fw-bolder'>Apps</small>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item " role="presentation">
                        <button className="nav-link nav-link-Tab" id="figma-tab" data-bs-toggle="tab" data-bs-target="#figma" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <div className='px-3'>
                                <i class="bi bi-phone-flip"></i>
                                <small className='px-3 fs-5 fw-bolder'>Figma</small>
                            </div>
                        </button>
                    </li>
                </ul>
                <div className="tab-content " id="myTabContent">

                    <div className="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                        {mostrarProyectosAll()}

                    </div>
                    <div className="tab-pane fade" id="web" role="tabpanel" aria-labelledby="web-tab">
                        {mostrarProyectosWeb()}

                    </div>
                    <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="app-tab">
                        {mostrarProyectosApp()}

                    </div>
                    <div className="tab-pane fade" id="figma" role="tabpanel" aria-labelledby="figma-tab">
                        {mostrarProyectosFigma()}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;