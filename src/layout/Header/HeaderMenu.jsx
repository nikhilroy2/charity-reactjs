import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarList } from '../../data/NavbarList';
function HeaderMenu(props) {
    return (
        <menu className='p-2 bg-ch-primary'>
            <div className="container_wrapper">
                <ul className='flex items-center gap-3'>
                    {
                        NavbarList.map((v, index) => {
                            return (
                                <li key={index} className='flex relative group'>
                                    <Link className='text-ch-white hover:text-ch-secondary' to={v.link}>
                                        {v.name}
                                    </Link>
                                    {index !== NavbarList.length - 1 && <span className='text-ch-white px-2 pl-4'> | </span>}

                                    {
                                        v?.list && (
                                            <div  className="dropdown_menu absolute hidden group-hover:block bg-ch-primary top-full min-w-[300px] z-[100]">
                                                <ul>
                                                    {
                                                        v?.list.map(j => {
                                                            return (
                                                                <li key={j.id}>
                                                                    <Link to={j.link} className='text-ch-white block p-3 hover:text-ch-secondary bg-opacity whitepsace-nowrap border-b border-[#F0F6DF]'> {j.name} </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }

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