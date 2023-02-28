import React from 'react';
import './Experiencia.css';

function Experiencia(props) {
    return (
        <div id='experiencia' className='servicios container'>
            <h1 className='subtitle mb-5'>Experiencia y Habilidades</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">

                <div class="col">
                    <div class="card h-100">
                        <div class="card-body position-relative">
                            <div className='expe1 position-relative mb-5'>
                                <i class="bi bi-briefcase-fill bag-icon red-grey-icon"></i>
                                <div className='ps-5'>
                                    <small>01-03-2020 - 01-08-2021</small> <br />
                                    <div className='vr w-auto'></div>
                                    <small>Auxiliar de diseño de interiores</small>
                                    <h5 class="card-title">HOMY DESING</h5>
                                    <p class="card-text">Asistencia en proyectos de diseño interior. Modelado de propuestas en 3d, diseño
                                        de espacios multifuncionales y remodelación de viviendas y espacios abiertos.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative mb-5'>
                                <i class="bi bi-briefcase-fill bag-icon red-grey-icon"></i>
                                <div className='ps-5'>
                                    <small>01-03-2019 - 01-05-2021</small>
                                    <small>Diseñadora de arquitectura</small>
                                    <h5 class="card-title">OLIBANDO S.A.C</h5>
                                    <p class="card-text">Diseño de viviendas, diseño de mobiliario, Trámites de licencia de construcción,
                                        metrados, costos y presupuestos, asistencia en proyectos arquitectónicos y
                                        diseño interior.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative mb-5'>
                                <i class="bi bi-briefcase-fill bag-icon red-grey-icon"></i>
                                <div className='ps-5'>
                                    <small>01-08-2018 - 01-12-2018</small> <br />
                                    <small>Arquitecta en prácticas</small>
                                    <h5 class="card-title">MUNICIPALIDAD DE CERRO COLORADO</h5>
                                    <p class="card-text">Revisión de expedientes de Licencia de Edificación y Regularización de Licencias
                                        de Edificación.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative mb-5'>
                                <i class="bi bi-briefcase-fill bag-icon red-grey-icon"></i>
                                <div className='ps-5'>
                                    <small>01-03-2018 - 01-04-2018</small> <br />
                                    <small>Arquitecta técnica</small>
                                    <h5 class="card-title">PROVEN GROUP S.A.C.</h5>
                                    <p class="card-text">Actualización de Layout de las tiendas en Arequipa del hipermercado Metro.</p>
                                </div>
                            </div>
                            <span className='line red-line'></span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body position-relative">
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">FRONTEND:</h5>
                                    <p class="card-text">Angular, React, VueJS, JavaScript, TypeScript, Bootstrap, CSS, SASS, HTML, NodeJS, JSON.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">BACKEND:</h5>
                                    <p class="card-text">C#, Java, PHP, Spring, .NET Framework, Python, FastAPI.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">BASE DE DATOS:</h5>
                                    <p class="card-text">MySQL, SQL Server.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">APPS:</h5>
                                    <p class="card-text">Swift, Android, Kotlin, Retrofit, Alamofire.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">DISEÑO UI / UX:</h5>
                                    <p class="card-text">Adobe Photoshop, Adobe Illustrator, Figma.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">GENERAL:</h5>
                                    <p class="card-text">Windows, API Rest, Git, UML, Apache.</p>
                                </div>
                            </div>
                            <div className='expe1 position-relative'>
                                <i class="bi bi-file-earmark-code-fill bag-icon red-icon"></i>
                                <div className='ps-5'>
                                    <small>Informática</small> <br />
                                    <h5 class="card-title">ARCHITECTURA:</h5>
                                    <p class="card-text">SketchUp, ArcGIS, Autocad, Archicad, Revit.</p>
                                </div>
                            </div>

                            <span className='line red-grey-line'></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hab-gray'>
                <div className='col'>
                    <h4 className='py-5'>Otras Habilidades</h4>
                </div>

                <div className='row align-items-end'>
                    <div className='pe-4 col'>
                        <span className='px-4 fs-1'><i class="bi bi-microsoft-teams"></i></span>
                        <div className='px-2'>
                            <p>Trabajo en Equipo</p>
                        </div>
                    </div>
                    <div className='pe-4 col'>
                        <span className='px-4 fs-1'><i class="bi bi-chat"></i></span>
                        <div>
                            <p>Comunicación Asertiva</p>
                        </div>
                    </div>
                    <div className='pe-4 col'>
                        <span className='px-4 fs-1'><i class="bi bi-circle-square"></i></span>
                        <div>
                            <p>Capacidad de Adaptación</p>
                        </div>
                    </div>
                    <div className='pe-4 col'>
                        <span className='px-4 fs-1'><i class="bi bi-diagram-3"></i></span>
                        <div>
                            <p>Resolución de Problemas</p>
                        </div>
                    </div>
                    <div className='col'>
                        <span className='px-4 fs-1'><i class="bi bi-calendar2-check"></i></span>
                        <div>
                            <p>Planeamiento Estratégico</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Experiencia;