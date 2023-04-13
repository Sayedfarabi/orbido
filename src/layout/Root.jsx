import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Root = () => {
    return (
        <>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='min-h-[100vh]'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default Root;