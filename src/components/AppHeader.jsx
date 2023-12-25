import React from 'react';
import logo from '../assets/img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
    return (
        <>
            <header className='bg-white my-3'>
                <div className='container-fluid mx-auto'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img className='logo' src={logo} alt='Not Found'/>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                            <div className='d-flex gap-3 align-items-center'>
                                <FontAwesomeIcon className='header_icon' icon={faLocationDot}/>
                                <h3 className='header_head'>Bangladesh</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AppHeader;