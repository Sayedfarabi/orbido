import React from 'react';
import "./card.css"

const Card = ({ image, content, title }) => {
    return (
        <div className='card my-2'>
            <div className='flex justify-start items-center p-5'>
                <div className='mx-4'>
                    <img src={image} alt="Icon" className='w-[64px] h-[64px]' />
                </div>
                <div className='mx-4'>
                    <p className='font-semibold text-[#FFFFFF] my-2'>{title}</p>
                    <p className='text-[#aaa9ae] my-2'>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;