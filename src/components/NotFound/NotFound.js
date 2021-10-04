import React from 'react';
import img from '../../404.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="mt-5 mb-5" src={img} alt="" />
        </div>
    );
};

export default NotFound;