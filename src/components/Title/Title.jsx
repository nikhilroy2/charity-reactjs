import React from 'react';
import StarIcon from '../../assets/images/PNG/FHSD_Asset_B4.png';
function Title(props) {
    return (
        <div className='flex justify-center items-center mb-10'>
            <img src={StarIcon} className='h-[100px]' alt="" />
            <h2 className='text-center text-ch-primary text-5xl '>{props.children}</h2>
            <img src={StarIcon} className='h-[100px]' alt="" />

        </div>
    );
}

export default Title;