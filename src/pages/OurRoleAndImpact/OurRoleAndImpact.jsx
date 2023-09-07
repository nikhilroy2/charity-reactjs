import React from 'react';
import { Link } from 'react-router-dom';
import HomeFoundImg from '../../assets/images/our_role_impact/about-the-foundation-2.png'
import MissionImg from '../../assets/images/our_role_impact/our-mission-1.png'
function OurRoleAndImpact(props) {
    return (
        <div className='my-10 '>
            <div className="container_wrapper bg-ch-neutrals-2 py-10">
                <div className="flex justify-center">
                    <Link className="box flex flex-col justify-center items-center mr-10 p-10 bg-ch-white shadow w-[400px]">
                        <img className='h-[150px]' src={HomeFoundImg} alt="" />
                        <span className='text-3xl text-center w-full whitespace-nowrap mt-8'>About the Foundation</span>
                    </Link>

                    <Link className="box flex flex-col justify-center items-center   p-10 bg-ch-white shadow w-[400px]">
                        <img className='h-[150px]' src={MissionImg} alt="" />
                        <span className='text-3xl text-center w-full whitespace-nowrap mt-8'>About the Foundation</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OurRoleAndImpact;