import React from 'react';
import { Link } from 'react-router-dom';
function FooterMenu(props) {
    const menu_list = [
        {
            id: 1,
            name: 'Donate',
            link: '/get-involved'
        },
        {
            id: 2,
            name: 'About Us',
            link: '/about-us'
        },
        {
            id: 3,
            name: 'Annual Reports',
            link: '/annual-reports'
        },
        {
            id: 4,
            name: 'Sponsors',
            link: '/sponsors'
        },
        {
            id: 5,
            name: 'Blog',
            link: '/news-events/blog'
        },
        {
            id: 6,
            name: 'Privacy Policy',
            link: 'https://fshdglobal.org/wp-content/uploads/2019/06/FSHD-Global-Privacy-Policy.pdf'
        },
    ]
    return (
        <menu className='bg-ch-primary-2 py-4 border-b'>
            <div className="container_wrapper">
                <ul className="flex gap-4 items-center">
                    {
                        menu_list.map(v => {
                            return (
                                <li key={v.id}>
                                    <Link to={v.link} className='text-ch-white hover:underline hover:text-ch-secondary'>
                                        {v.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </menu>
    );
}

export default FooterMenu;