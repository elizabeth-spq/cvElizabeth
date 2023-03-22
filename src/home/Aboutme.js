import React from 'react';
import './Aboutme.css';

function Aboutme(props) {
    return (
        <div id='aboutme' className='sobremi container'>
            <h1 className='subtitle mb-5'>Sobre Mi</h1>




            
            <div className='description margin-description mb-5'>
                <div className="row ">
                    <div className="col">
                        <p>Soy estudiante de Desarrollo de Software en ISIL. Esta es mi segunda carrera. Obtuve mi título de Arquitectura en 2021 en la Universidad San Agustín de Arequipa, por lo que también soy arquitecta. En el 2019 terminé mis estudios de inglés en el "Centro Cultural Peruano Norteamericano - Arequipa". He trabajado en algunos estudios de arquitectura desde 2017 pero ahora me gustaría adquirir experiencia en mi segunda carrera. Como estudiante he trabajado en proyectos usando muchas tecnologías como Java, C#, PHP, JavaScript, ReactJS, Angular, HTML, CSS, Swift y Kotlin.</p>
                    </div>
                    <div className="col-md-auto px-3">
                        <div className="row d-block">
                            <div className="col ">
                                <div className='row'>
                                    <div className='col'>Inglés</div>
                                    <div className='col text-end align-bottom'>B2</div>
                                </div>
                                <div className='progress'>
                                    <div className='progress-bar-a'></div>
                                </div>
                            </div>
                            <div className="col  mt-4">
                                <div className='row'>
                                    <div className='col pt-3'>Español </div>
                                    <div className='col pt-3 text-end align-bottom'>C2</div>
                                </div>
                                <div className='progress'>
                                    <div className='progress-bar-b'></div>
                                </div>

                            </div>

                            <div className="col mt-5 text-center">
                                <button className='btn-download top-50 start-50'>Descargar CV</button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Aboutme;