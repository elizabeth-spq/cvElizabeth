import React from 'react';
import './Inicio.css';
import Aboutme from './Aboutme';
import Servicios from '../components/Servicios';
import Experiencia from '../components/Experiencia';
import Portafolio from '../components/Portafolio';
import Contacto from '../components/Contacto';
import Directory from './Directory';

function Inicio(props) {
    return (
        <div>
            <div id='inicio' className='fondoinicio' >
                {Directory.map(item =>
                    <div key={item.id}>
                        <h1 id='txtprincipal'>Elizabeth Pumacota </h1>
                        <div id='txtDescrip ' className='d-flex justify-content-center efecto '>
                            <p className='pe-2'>Soy</p>
                            <div className='profesiones'>
                                <div className='colorb text-start'>Desarrolladora</div>
                                <div className=' colora text-start'>Arquitecta</div>
                                <div className='colorc text-start'>Diseñadora</div>

                            </div>


                        </div>

                        <div className='btnredes my-4'>
                            <a href={item.gmail}><i className="bi bi-envelope-fill px-2 my-4 text-light"></i></a>
                            <a href={item.github}><i className="bi bi-github px-2 text-light"></i></a>
                            <a href={item.linkedl}><i class="bi bi-linkedin  px-2 text-light"></i></a>
                        </div>
                        <div className='mt-5'>
                            <a href='#contacto' className='btnBontona text-light'>Contactar</a>
                        </div>
                    </div>
                )}
            </div>
            <Aboutme />
            <Servicios />
            <Experiencia />
            <Portafolio />
            <Contacto />

        </div>



    );
}

export default Inicio;