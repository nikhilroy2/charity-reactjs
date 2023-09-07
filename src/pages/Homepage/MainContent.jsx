import React from 'react';
import CheckIcon from '../../assets/images/PNG/FHSD_Asset_B5@2x.png'
import DownIcon from '../../assets/images/PNG/FHSD_Asset_B17@2x.png';
import HomeImg1 from '../../assets/images/homepage/aru-captain-starlight-bubbles.png'
import HomeImg2 from '../../assets/images/homepage/captain-starlight-visits-chayse-on-hospital-ward.jpg'
import HomeImg3 from '../../assets/images/homepage/marley-card.png'
import HomeImg4 from '../../assets/images/homepage/starlight_hero_child-1_re-touched.jpg'
import HomeImg5 from '../../assets/images/homepage/taiyo-and-parents-card.png'

function MainContent(props) {
    return (
        <div className='py-10 '>
            <div className="container_wrapper">

                <div className="text-center">

                    <div className="flex mb-10">
                        <img src={HomeImg1} alt="" />

                        <h2 className="text-2xl   flex gap-8 flex-col items-center justify-center p-3 shadow bg-ch-neutrals-2 rounded">
                            <img src={CheckIcon} alt="" className='h-[100px]' />
                            <span>
                                Facioscapulohumeral Muscular Dystrophy (FSHD) is a highly complex disease and progressive

                                <b>muscle wasting disease</b>
                                causing weakening and loss of skeletal muscle in adults and children, robbing the ability to
                                <b>walk, talk, smile, blink or even eat.</b>
                            </span>

                        </h2>
                    </div>

                    <div className="flex mb-10">
                        <h2 className="text-2xl  flex gap-8 flex-col items-center justify-center p-3 shadow bg-ch-neutrals-2 rounded">
                            <img src={CheckIcon} alt="" className='h-[100px]' />

                            <span>
                                The FSHD Global Research Foundation was established in 2007 with a core mission to fund treatments and an ultimate cure for FSHD.
                            </span>
                        </h2>

                        <img src={HomeImg2} alt="" />

                    </div>


                    <div className="flex mb-10">

                        <img src={HomeImg3} alt="" />

                        <h2 className="text-2xl flex gap-8 flex-col items-center justify-center p-3 shadow bg-ch-neutrals-2 rounded">
                            <img src={CheckIcon} alt="" className='h-[100px]' />

                            <span>
                                Since 2007, the Foundation has committed over
                                <b>$11 million to fund 56 ongoing medical research grants in 11 countries; </b>

                                the USA, Canada, the Netherlands, Israel, Italy, France, Belgium, Spain, New Zealand and Australia.
                            </span>
                        </h2>
                    </div>


                    <div className="flex mb-10">
                        <h2 className="text-2xl  flex gap-8 flex-col justify-center items-center p-3 shadow bg-ch-neutrals-2 rounded">
                            <img src={CheckIcon} alt="" className='h-[100px]' />

                            <span>
                                This multi-award winning Foundation has significantly advanced global research into muscle wellness, muscle technology and drug discovery to advance clinical trials for FSHD.
                            </span>
                        </h2>
                        <img src={HomeImg4} alt="" />

                    </div>

                    <div className="flex mb-10">
                        <img src={HomeImg5} alt="" />
                        <h2 className="text-2xl gap-8 flex flex-col justify-center items-center p-3 shadow bg-ch-neutrals-2 rounded">
                            <img src={CheckIcon} alt="" className='h-[100px]' />
                            <span>
                                Driven by strong governance, purpose and passion, we rely on your support to drive research, awareness and fundraising for our mission.
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;