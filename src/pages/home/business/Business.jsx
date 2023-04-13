import React from 'react';
import star from '../../../assets/images/card-icon/Star.png';
import shield from '../../../assets/images/card-icon/Shield Done.png';
import send from '../../../assets/images/card-icon/Send.png';
import "./business.css";
import Card from '../../../components/business-card/Card';

const Business = () => {
    const starContent = "The best credit cards offer some tantalizing combinations of promotions and prizes";
    const shieldContent = "We take proactive steps make sure your information and transactions are secure.";
    const sendContent = "A balance transfer credit card can save you a lot of money in interest charges.";
    return (
        <section className='py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-16'>
                <div className=' mx-4'>
                    <div className='my-12'>
                        <h1 className='text-5xl text-white mb-6'>You do the business,</h1>
                        <h1 className='text-5xl text-white mb-6'>we’ll handle the money.</h1>
                    </div>
                    <div className='my-12'>
                        <p className='text-gray-400'>
                            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className=' mx-4'>
                    <div>
                        <Card
                            image={star}
                            content={starContent}
                            title={"Rewards"}
                        ></Card>
                        <Card
                            image={shield}
                            content={shieldContent}
                            title={"100% Secured"}
                        ></Card>
                        <Card
                            image={send}
                            content={sendContent}
                            title={"Balance Transfer"}
                        ></Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;