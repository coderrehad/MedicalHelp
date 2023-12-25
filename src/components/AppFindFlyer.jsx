import React from 'react';
import Button from "react-bootstrap/Button";

const AppFindFlyer = () => {
    return (
        <>
            <section className='flyer py-5'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 px-5'>
                            <h3 className='flyer_head'>View This Week's Flyer</h3>
                            <h4 className='flyer_sub_head'>Save with weekly deals and promotions.</h4>
                            <p className='flyer_pera'>Are you looking to save on some of your favourite products? Access the products that you
                                need, when you need them at a competitive price. Explore the deals and promotions in our
                                weekly flyer today. The availability of certain products and flyer deals may vary from
                                one pharmacy location to another.</p>
                            <Button variant={"primary"}>View Flyer</Button>
                        </div>
                        <div className='col-md-6'>
                            <div className='w-100 h-100 overflow-hidden'>
                                <img className='w-100 h-100 object-fit-cover' src='https://i.postimg.cc/SsKnwdTr/rxhm-flyer.png' alt='Not_Found'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppFindFlyer;