import React from 'react';
import Lottie from "lottie-react";
import lottie from '../lotties/lotties.json'

const ErrorPage = () => {
    return (
        <div className='w-50 mx-auto'>
            <Lottie animationData={lottie} loop={true} />;
        </div>
    );
}


export default ErrorPage;