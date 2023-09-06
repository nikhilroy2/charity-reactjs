import React from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../styles/_Carousel.scss';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import CarouselImg from '../../assets/images/carousel/FSHD-Sydney-Chocolate-Ball-2023-Web-Banner-TOS-1920x383-–-White-1200x239.png';

function Carousel(props) {
    return (
        <div>
            <div className="container_wrapper">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <Link> <img src={CarouselImg} alt="" /> </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CarouselImg} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel;