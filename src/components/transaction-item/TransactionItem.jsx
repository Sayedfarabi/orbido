import React from 'react';
import "./transactionItem.css";

const TransactionItem = ({ image, days, rotate, itemName }) => {
    return (
        <div className='flex justify-between items-center text-[#FFFFFF]'>
            <div className='flex justify-between items-center mx-4'>
                <div className='mr-2'>
                    <img src={image} alt="" className='w-16 h-16 rounded-full' />
                </div>
                <div>
                    <h6 className='font-semibold'>{itemName}</h6>
                    <p className='text-xs'>{days}</p>
                </div>
            </div>
            <div className='flex justify-center items-center mx-4'>
                <div className={`${rotate ? "triangle-true" : "triangle-false"} mr-2`}>

                </div>
                <div>
                    <p>-$250,93</p>
                </div>
            </div>
        </div>
    );
};

export default TransactionItem;