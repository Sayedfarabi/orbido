import React from 'react';
import logo from "../../assets/images/logo/logo (2).png";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <div>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <div className='brand-name'>
                        <Link to={"/"}>
                            <h5 className='text-[#FFFFFF]'>OR<span className='text-[#c98a01]'>BIDO</span> </h5>
                        </Link>
                    </div>
                </div>
                <div>
                    <ul className='flex justify-end items-center'>
                        <li className='text-[#FFFFFF]'><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/"}>About Us</Link></li>
                        <li><Link to={"/"}>Features</Link></li>
                        <li><Link to={"/"}>Solution</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;