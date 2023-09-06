import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarList } from '../../data/NavbarList';
function HeaderMenu(props) {
    return (
        <menu className='p-2 bg-ch-primary'>
            <div className="container_wrapper">
                <ul className='flex items-center gap-3'>
                    {
                        NavbarList.map((v,index) => {
                            return (
                                <li key={index} className='flex'>
                                    <Link className='text-ch-white hover:text-ch-secondary' to={v.link}>
                                        {v.name}
                                    </Link>
                                    {index !== NavbarList.length - 1 && <span className='text-ch-white px-2 pl-4'> | </span>}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </menu>
    );
}

export default HeaderMenu;