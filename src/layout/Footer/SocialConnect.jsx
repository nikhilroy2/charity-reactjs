import React from 'react';
import FbIcon from '../../assets/images/icons/facebook.svg'
import TwitterIcon from '../../assets/images/icons/twitter.svg';
import YoutubeIcon from '../../assets/images/icons/youtube.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin.svg';
function SocialConnect(props) {
    const social_list = [
        {
            id: 1,
            name: 'Facebook',
            icon: FbIcon,
            link: 'https://www.facebook.com/FSHDGlobal'
        },
        {
            id: 2,
            name: 'Twitter',
            icon: TwitterIcon,
            link: 'https://twitter.com/FSHD'
        },
        {
            id: 3,
            name: 'Youtube',
            icon: YoutubeIcon,
            link: 'https://www.youtube.com/user/FSHDGlobalResearch'
        },
        {
            id: 4,
            name: 'Linkedin',
            icon: LinkedinIcon,
            link: 'https://www.linkedin.com/company/fshd-global-research-foundation'
        },

    ]
    return (
        <div className='bg-ch-primary py-4 border-b '>
            <div className="container_wrapper">
                <div className="flex items-center text-ch-white">
                    <h2 className='text-2xl mr-10'>Connect with us</h2>
                    <ul className='flex items-center gap-6'>
                        {
                            social_list.map(v => {
                                return (
                                    <li key={v.id}>
                                        <a href={v.link}>
                                            <img src={v.icon} alt={v.name} />
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default SocialConnect;