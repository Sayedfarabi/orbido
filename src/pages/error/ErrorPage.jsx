import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/images/error/error_404.png';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen my-auto'>
                <div className='text-center'>
                    <img src={errorImage} alt="errorImage" className='w-2/3 md:w-3/5 rounded-md mx-auto' />
                    <p className='text-3xl'>Oops!</p>
                    <p className='text-red-400'>Sorry, an unexpected error has occurred</p>
                    <p className='text-red-400'>This Route is not found, status 404.</p>
                    <p className='text-red-400'>
                        <i>{error?.statusText || error?.message}</i>
                    </p>
                    <p>
                        Please Back to <br /> <Link to={"/"}> <button className='btn btn-xs btn-border-'>Home</button> </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;