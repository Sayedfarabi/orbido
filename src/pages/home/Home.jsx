import React from 'react';
import Banner from './banner/Banner';
import Transaction from './transaction/Transaction';
import Business from './business/Business';
import Currencies from './currencies/Currencies';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Business></Business>
            <Transaction></Transaction>
            <Currencies></Currencies>
        </>
    );
};

export default Home;