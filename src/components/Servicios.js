import React from 'react';
import code from '../assets/code.png';
import eng from '../assets/eng.png';
import plano from '../assets/plano.png';
import './Servicios.css';


function Servicios(props) {
    return (
        <div id='servicios' className='servicios container'>
            <h1 className='subtitle py-5'>Estudios</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 card-color-3">
                        <div className='text-center pt-5 pb-1'>
                            <img id='code' src={code} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body  ">
                            <h5 class="card-title fs-4 fw-bolder px-3">Desarrolladora de Software</h5>
                            <p class="card-text pt-3 pb-3" >Desarrollo de Software - ISIL <br /> Terciario/Técnico - En Curso <br /> desde 01-08-2021  hasta la fecha </p>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card h-100 card-color-1">
                        <div className='text-center pt-5 pb-1 '>
                            <img id='eng' src={eng} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body px-2">
                            <h5 class="card-title fs-4 fw-bolder"> Inglés</h5>
                            <p class="card-text pt-3 pb-3 ">Centro Cultural Peruano Norteamericano <br /> Terciario/Técnico <br />desde 01-01-2016 hasta 31-07-2019 </p>
                        </div>
                    </div> 
                </div>
                <div class="col">
                    <div class="card h-100 card-color-2">
                        <div className='text-center pt-5 pb-1'>
                            <img id='plano' src={plano} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body px-2">
                            <h5 class="card-title fs-4 fw-bolder">Arquitectura</h5>
                            <p class="card-text pt-3 pb-3 ">Universidad Nacional San Agustín De Arequipa <br /> Universitario - Graduado <br />desde 01-03-2012 hasta 01-07-2017 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-5'>
                <small className='minText fs-6 '>Interesado en algún servicio? <a href="" className='link-danger'> Click aquí</a>  para contactarme! 👋</small>
            </div>

        </div>
    );
}

export default Servicios;