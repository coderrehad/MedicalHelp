import React from 'react';
import Button from "react-bootstrap/Button";

const AppBanner = () => {
    return (
        <>
            <section className='banner'>
                <div className='container-fluid'>
                    <div className='banner_wrapper'>
                        <h3 className='banner_head'>Virtual Help From Online Doctors</h3>
                        <p className='banner_para'>Online doctor visits and prescriptions, anytime 24/7.</p>
                        <Button variant="primary">Find A Pharmacy</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppBanner;