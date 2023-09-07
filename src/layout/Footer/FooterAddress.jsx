import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../../assets/images/logo/Picture5-removebg-preview.png'
function FooterAddress(props) {
    const list_item = [
        `© ${new Date().getFullYear()} – FSHD Global Research Foundation`,
        'Email – admin@fshdglobal.org',
        'Phone – 02 8007 7037',
        'ABN – 79128037614'
    ]
    return (
        <div className='bg-ch-primary py-4'>
            <div className="container_wrapper">
                <div className="flex items-center justify-between">
                    <ul>
                        {
                            list_item.map((v, i) => {
                                return (
                                    <li key={i} className='text-ch-white py-2'>
                                        {v}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <Link to={`/`}>
                        <img src={Logo2} alt="" />
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default FooterAddress;