import React from 'react';
import AboutImg from '../../assets/images/about/about-the-foundation.png';
import CheckIcon from '../../assets/images/PNG/FHSD_Asset_B2@2x.png'
function AboutTheFoundation(props) {
    return (
        <div className='py-10'>
            <div className="container_wrapper bg-ch-neutrals-2">
                <div className="flex mb-10 items-start">
                    <img src={AboutImg} alt="" />

                    <div className="content flex-grow p-5">
                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                The FSHD Global Research Foundation focuses on finding treatments and a cure for FSHD. In doing so, we fund world class medical research, awareness and education. We are also committed to complete transparency and accountability in our operations.
                            </span>
                        </h2>

                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                The Foundation was established in 2007 by Bill Moss AO, a well-known Australian businessman and philanthropist who lives with FSHD. Since then, we have been addressing the chronic lack of medical funding and awareness of FSHD, both in Australia and globally.
                            </span>
                        </h2>


                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                The true prevalence of this disease is still unknown. Due to poor diagnostics and misdiagnosis, many people live unaware they carry the genetic gene, at risk of passing down generations.
                            </span>
                        </h2>


                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                The Foundation undertakes a wide range of medical research focused on; slowing this disease, muscle wellness and muscle technology. The aim of this research is not only to find a cure for FSHD, but to find ways that all people suffering from muscle weakness caused by neuromuscular disorders, muscle trauma and ageing will benefit.
                            </span>
                        </h2>


                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                Since 2007, the Foundation has committed over $11 million to fund 56 ongoing medical research grants in 11 countries; the USA, Canada, the Netherlands, Israel, Italy, France, Belgium, Spain, New Zealand and Australia.
                            </span>
                        </h2>



                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                The FSHD Global Research Foundation does not operate like an average not for profit. We allocate  donations we receive to current and future medical research grants. The Foundation‘s operations are supported by non-tax deductible sponsorships.
                            </span>
                        </h2>

                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                This pure charity model offers great transparency and accountability to our mission. Proud of our innovative structure, we offer all donors via the ‘FSHD – Find the Cure’ mobile APP the opportunity to track exactly which research programs their money has been allocated to, with updates on the latest milestones of those programs.
                            </span>
                        </h2>


                        <h2 className="text-xl flex mb-3  flex-col items-center justify-center py-3 px-10 shadow bg-ch-white rounded">
                            <img src={CheckIcon} alt="" className='h-[80px]' />
                            <span>
                                With no government support the main sources of our funding for FSHD research are individuals afflicted by FSHD, their friends, supporters, as well as corporate sponsors. All funds donated are invested through careful consideration, guided by our Scientific Advisory Boards, Board of Directors and International Research Committees, ensuring FSHD Global remains a leader in discovering world’s best science.
                            </span>
                        </h2>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutTheFoundation;