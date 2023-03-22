
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
            errors.nombre = "* El Nombre es requerido";
        }
        if (!values.email) {
            errors.email = "* El Email es requerido";
        } else if (!regex.test(values.email)) {
            errors.email = "* Email no válido";
        }
        if (!values.asunto) {
            errors.asunto = "* El asunto es requerido";
        }
        if (!values.mensaje) {
            errors.mensaje = "* El mensaje es requerido";
        } else if (values.mensaje.length> 300) {
            errors.mensaje = "* EL mensaje no puede exceder de 300 caracteres";
        }

        return errors;

    }

    const ClearForm = () => {
        formValues.nombre = "";
        formValues.email = "";
        formValues.asunto = "";
        formValues.mensaje = "";
        
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
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div class="alert alert-success" role="alert">
                            Mensaje enviado!
                        </div>
                    ) : (<p ></p>)}
                    <form onSubmit={handleSubmit} id='frmContacto' action="">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                            <div class="col ">
                                <input
                                    name='nombre'
                                    className='form-control w-100'
                                    type="text" placeholder='Nombre'
                                    value={formValues.nombre}
                                    onChange={handleChange} />
                                <label className=' validar ms-4' name='nombre' >{formErrors.nombre}</label>
                            </div>

                            <div class="col ">
                                <input
                                    name='email'

                                    className='form-control w-100'
                                    type="email"
                                    placeholder='direccion@email.com'
                                    value={formValues.email}
                                    onChange={handleChange} />
                                <label className=' ms-4 validar' name='email'>{formErrors.email}</label>
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
                        <label className=' ms-4 validar' name='asunto'  >{formErrors.asunto}</label>
                        <div id='frmTextArea' className='mt-4' >
                            <textarea
                                name='mensaje'
                                maxLength="300"
                                className='form-control'
                                placeholder="Escribe tu comentario aquí"
                                value={formValues.mensaje}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <label className=' ms-4 validar'   name='mensaje'  >{formErrors.mensaje}</label>

                        <div id='btnContactar' className="my-2 text-start">
                            <button  className='btnBontona mt-2 top-50 start-50 me-5'>Enviar Mensaje</button>
                            <button onClick={ClearForm} className='btnBontonb mt-2  top-50 end-0'>Limpiar todo</button>
                        </div>
                        

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contacto;