import React from 'react';
import Banner from './banner/Banner';
import Transaction from './transaction/Transaction';
import Business from './business/Business';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Business></Business>
            <Transaction></Transaction>
        </>
    );
};

export default Home;