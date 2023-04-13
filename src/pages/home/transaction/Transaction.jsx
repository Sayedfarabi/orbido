import React from 'react';
import dribbble from "../../../assets/images/transactionItem/dribbble.png";
import netflix from "../../../assets/images/transactionItem/netflix.png";
import manulife from "../../../assets/images/transactionItem/manulife.jpg";
import paypal from "../../../assets/images/transactionItem/paypal.png";
import apple from "../../../assets/images/transactionItem/appleStore.png";
import google from "../../../assets/images/transactionItem/googlePlay.png";
import "./transaction.css";
import TransactionItem from '../../../components/transaction-item/TransactionItem';

const Transaction = () => {
    return (
        <section className='my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-16'>
                <div>
                    <div className='transaction-container'>
                        <div className="transaction">
                            <div className='mb-4'>
                                <h3 className='text-[#FFFFFF] text-2xl p-2'>Last Transaction</h3>
                            </div>
                            <TransactionItem
                                image={dribbble}
                                days={"15 Days ago"}
                                rotate={true}
                                itemName={"Dribbble Pro"}
                            >
                            </TransactionItem>
                            <TransactionItem
                                image={netflix}
                                days={"4 Days ago"}
                                rotate={true}
                                itemName={"Netflix"}
                            >
                            </TransactionItem>
                            <TransactionItem
                                image={manulife}
                                days={"4 Days ago"}
                                rotate={false}
                                itemName={"Manulife Cash"}
                            >
                            </TransactionItem>
                        </div>
                        <div className="paypal">
                            <div className='flex justify-start items-center m-4'>
                                <div className='mr-2'>
                                    <img src={paypal} alt="" className='w-16 h-16 rounded-full' />
                                </div>
                                <div>
                                    <h6 className='font-semibold text-2xl text-white'>Paypal</h6>
                                    <p className='text-sm text-gray-400'>Checkout</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mx-4'>
                                <div>
                                    <p className='text-sm text-gray-400'>Total</p>
                                    <h6 className='font-semibold text-xl text-white'>$120</h6>
                                </div>
                                <div>
                                    <button className='border border-cyan-500 text-cyan-500 px-2 rounded-sm'>Change</button>
                                </div>
                            </div>
                            <div className='mx-4 mt-4'>
                                <button className='btn'>Make Payment</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='text-white'>
                    <div>
                        <div className='text-6xl'>
                            <h1>Easily control your billing & invoicing.</h1>
                        </div>
                        <div className='mt-12'>
                            <p className='text-gray-400'>
                                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio Aeneas neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                            </p>
                        </div>
                        <div className='flex justify-start items-center mt-12'>
                            <div className='mr-8 cursor-pointer'>
                                <img src={apple} alt="Apple" className='w-36 h-12' />
                            </div>
                            <div className='mr-8 cursor-pointer'>
                                <img src={google} alt="Google" className='w-36 h-12' />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transaction;