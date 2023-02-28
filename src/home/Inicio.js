import React from 'react';
import './Inicio.css';
import Aboutme from './Aboutme';
import Servicios from '../components/Servicios';
import Experiencia from '../components/Experiencia';
import Portafolio from '../components/Portafolio';
import Contacto from '../components/Contacto';

function Inicio(props) {
    return (
        <div>
            <div id='inicio' className='fondoinicio' >

                <h1 id='txtprincipal'>Elizabeth Pumacota </h1>

                <h5 className='txtDescrip'>Desarrolladora</h5>

                <div className='btnredes my-4'>
                    <a href=""><i className="bi bi-envelope-fill px-2 my-4 text-light"></i></a>
                    <a href=""><i className="bi bi-github px-2 text-light"></i></a>
                    <a href=""><i className="bi bi-behance px-2 text-light"></i></a>
                    <a href=""><i className="bi bi-whatsapp px-2 text-light"></i></a>
                </div>
                <div>
                    <button className='btnContacto'>Contactar</button>
                </div>

            </div>
            <Aboutme />
            <Servicios/>
            <Experiencia/>
            <Portafolio/>
            <Contacto/>

        </div>



    );
}

export default Inicio;