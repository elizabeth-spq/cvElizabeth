import React from 'react';
import './Aboutme.css';

function Aboutme(props) {
    return (
        <div id='aboutme' className='sobremi container'>
            <h1 className='subtitle mb-5'>Sobre Mi</h1>

            <div class="row description margin-description mb-5">
                <div class="col-sm-6 col-md-5 col-lg-6">
                    <p>Soy estudiante de Desarrollo de Software en ISIL. Esta es mi segunda carrera. Obtuve mi título de Arquitectura en 2021 en la Universidad San Agustín de Arequipa, por lo que también soy arquitecta. En el 2019 terminé mis estudios de inglés en el "Centro Cultural Peruano Norteamericano - Arequipa". He trabajado en algunos estudios de arquitectura desde 2017 pero ahora me gustaría adquirir experiencia en mi segunda carrera. Como estudiante he trabajado en proyectos usando muchas tecnologías como Java, C#, PHP, JavaScript, ReactJS, Angular, HTML, CSS, Swift y Kotlin.</p>
                </div>
                <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                    <div className='row'>
                        <div className='col'>Inglés</div>
                        <div className='col text-end align-bottom'>B2</div>
                    </div>
                    <div class="progress mb-4">
                        <div class="progress-bar ingles" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='row'>
                        <div className='col pt-3'>Español </div>
                        <div className='col pt-3 text-end align-bottom'>C2</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar espanol" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="mt-5 text-center">
                        <button className='btnBontona top-50 start-50'>Descargar CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;