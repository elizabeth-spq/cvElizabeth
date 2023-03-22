import React, { useRef, useState, useEffect } from 'react';
import './Contacto.css';


function Contacto(props) {
    const initialValues = { nombre: "", email: "", asunto: "", mensaje: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!values.nombre) {
            errors.nombre = "El Nombre es requerido";
        }
        if (!values.email) {
            errors.email = "El Email es requerido";
        } else if(!regex.test(values.email)){
            errors.email = "Email no válido";
        }
        if (!values.asunto) {
            errors.asunto = "El asunto es requerido";
        }
        if (!values.mensaje) {
            errors.mensaje = "El mensaje es requerido";
        }

        return errors;

    }

    return (
        <div id='contacto' className='servicios container'>
            <h1 className='subtitle my-5'>Contacto</h1>
            <div class="row pt-2">
                <div id='contactoMensaje' class="col-sm-4">
                    <h3>¿Qué opinas de mi trabajo?</h3>
                    <h5> Puedes enviarme un <span className='text-danger'>email</span>  con tu opinión 👋 </h5>
                </div>
                <div class="col-sm-8">
                    <form onSubmit={handleSubmit} id='frmContacto' action="">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                            <div class="col ">
                                <input
                                    name='nombre'

                                    className='form-control w-100'
                                    type="text" placeholder='Nombre'
                                    value={formValues.nombre}
                                    onChange={handleChange} />
                                <p className=' ms-4 text-danger  fs-6'>{formErrors.nombre}</p>
                            </div>

                            <div class="col ">
                                <input
                                    name='email'

                                    className='form-control w-100'
                                    type="email"
                                    placeholder='direccion@email.com'
                                    value={formValues.email}
                                    onChange={handleChange} />
                                <p className=' ms-4 text-danger  fs-6'>{formErrors.email}</p>
                            </div>

                        </div>
                        <div className='mt-4'>
                            <input
                                name='asunto'

                                className='form-control w-100'
                                type="text"
                                placeholder='Asunto'
                                value={formValues.asunto}
                                onChange={handleChange} />
                        </div>
                        <p className=' ms-4 text-danger  fs-6'>{formErrors.asunto}</p>
                        <div id='frmTextArea' className='mt-4' >
                            <textarea
                                name='mensaje'
                                maxlength="300" 
                                className='form-control'
                                placeholder="Escribe tu comentario aquí"
                                value={formValues.mensaje}
                                onChange={handleChange}
                                 ></textarea>
                        </div>
                        <p className=' ms-4 text-danger  fs-6'>{formErrors.mensaje}</p>

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