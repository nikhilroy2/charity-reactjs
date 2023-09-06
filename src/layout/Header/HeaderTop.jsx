import React from 'react';
import Logo from '../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
function HeaderTop(props) {
    return (
        <div className='bg-ch-primary-2'>
            <div className="container_wrapper">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>   
            </div>
        </div>
    );
}

export default HeaderTop;