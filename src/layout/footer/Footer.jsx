import React from 'react';
import logo from '../../assets/images/logo/logo (2).png';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='pb-[161px]'>
            <div className='pb-[154px]'>
                <div className='our-service'>
                    <div className='h-full flex flex-col justify-center items-center'>
                        <div className='flex justify-evenly items-center'>
                            <div>
                                <h3 className='mb-[35px]'>Let’s try our service now!</h3>
                                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                            </div>
                            <div>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <footer className="footer">
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                            <div className='mx-auto'>
                                <div className='flex justify-start items-center pb-[33px]'>
                                    <div>
                                        <img className='logo' src={logo} alt="logo" />
                                    </div>
                                    <div>
                                        <Link to={"/"}>
                                            <h5 className='text-[#FFFFFF] text-4xl'>OR<span className='text-[#c98a01]'>BIDO</span> </h5>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <p>A new way to make the payments easy, reliable and secure.</p>
                                </div>
                            </div>
                            <div className='mx-auto'>
                                <span className="footer-title">Usefull Links</span>
                                <ul>
                                    <li>Content</li>
                                    <li>How it Works</li>
                                    <li>Create</li>
                                    <li>Explore</li>
                                    <li>Terms and Services</li>
                                </ul>
                            </div>
                            <div className='mx-auto'>
                                <span className="footer-title">Community</span>
                                <ul>
                                    <li>Help Center</li>
                                    <li>Partners</li>
                                    <li>Suggestions</li>
                                    <li>Blog</li>
                                    <li>Newsletters</li>
                                </ul>
                            </div>
                            <div className='mx-auto'>
                                <span className="footer-title">Partner</span>
                                <ul>
                                    <li>Our Partner</li>
                                    <li>Become a Partner</li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className='mx-[81px]'>
                <hr />
            </div>
            <div className='pt-[28px]'>
                <div>
                    <footer className="copyright">
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-[#FFFFFF]'>Copyright © 2023 Orbido. All Rights Reserved.</p>
                            </div>

                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Footer;