import React from 'react';
import './Portafolio.css';

function Portafolio(props) {
    return (
        <div id='portafolio' className='servicios container'>
            <h1 className='subtitle my-5'>Portafolio</h1>
            <div>
                <ul className="nav nav-tabs nav-justified  " id="myTab" role="tablist">
                    <li className="nav-item w-50 " role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="bi bi-table"></i></button>
                    </li>
                    <li className="nav-item w-50 " role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="bi bi-grid-3x3-gap-fill"></i></button>
                    </li>
                </ul>
                <div className="tab-content " id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Portafolio;