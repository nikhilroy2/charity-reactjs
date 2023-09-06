import React from 'react';
import Logo from '../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

//  icons
function HeaderTop(props) {
    return (
        <div className='bg-ch-primary-2'>
            <div className="container_wrapper">
                <div className="flex justify-between p-2">
                    <Link to="/">
                        <img className='h-[60px]' src={Logo} alt="logo" />
                    </Link>
                    <ul className="flex items-center gap-5">
                        <li className='relative'>
                            <input type="search" name="search" placeholder='Search here...' id="searchPages" className='bg-ch-primary-1 text-ch-white focus:outline-none text-white inline-block px-3 pl-9 py-2 rounded-full shadow-0 border-0' />
                            <svg className='absolute h-[25px] left-2 top-2' fill='#aaa' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchIcon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>

                        </li>
                        <li>
                            <a href="#" className='text-ch-white block px-2 py-2 w-[100px] text-center rounded-full duration-100 hover:bg-ch-secondary'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='text-ch-white block px-2 py-2 w-[100px] text-center rounded-full duration-100 hover:bg-ch-secondary'>Login</a>
                        </li>
                        <li>
                            <a href="#" className='text-ch-white block px-2 py-2 w-[100px] text-center rounded-full duration-100 bg-ch-secondary'>Donate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;