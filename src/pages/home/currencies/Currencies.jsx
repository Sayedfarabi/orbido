import React from 'react';
import airbnb from "../../../assets/images/currency/airbnb.png"
import binance from "../../../assets/images/currency/binance.png"
import coinbase from "../../../assets/images/currency/coinbase.png"
import dropbox from "../../../assets/images/currency/dropbox.png"

const Currencies = () => {
    return (
        <section className='mb-[175px]'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={airbnb} alt="" className='mx-auto' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={binance} alt="" className='mx-auto' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={coinbase} alt="" className='mx-auto' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={dropbox} alt="" className='mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Currencies;