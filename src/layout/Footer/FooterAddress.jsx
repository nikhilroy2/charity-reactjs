import React from 'react';

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
            </div>
        </div>
    );
}

export default FooterAddress;