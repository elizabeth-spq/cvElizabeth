import React, { useRef } from 'react';
import './Contacto.css';


function Contacto(props) {
    return (
        <div id='contacto' className='servicios container'>
            <h1 className='subtitle my-5'>Contacto</h1>
            <div class="row pt-2">
                <div id='contactoMensaje' class="col-sm-4">
                    <h3>¿Qué opinas de mi trabajo?</h3>
                    <h5> Puedes enviarme un <span className='text-danger'>email</span>  con tu opinión 👋 </h5>
                </div>
                <div  class="col-sm-8">
                    <form id='frmContacto' action="">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                            <div class="col ">
                                <input className='form-control w-100' type="text" placeholder='Nombre' />
                            </div>
                            <div class="col ">
                                <input className='form-control w-100' type="email" placeholder='direccion@email.com' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <input className='form-control w-100' type="text" placeholder='Asunto' />
                        </div>
                        <div id='frmTextArea' className='mt-4' >
                            <textarea className='form-control' placeholder="Escribe tu comentario aquí" id="floatingTextarea2" ></textarea>
                        </div>

                        <div id='btnContactar' className="my-5 text-start">
                            <button className='btnBontona  top-50 start-50'>Enviar Mensaje</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contacto;