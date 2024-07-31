import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


const swiperImages = [
    { url: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-6.jpg" },
];

const ThreeComponent = () => {
    return (
        <div className="page-content three-page">
            <h2 className="page-title" style={{ textAlign: "center" }}>Three</h2>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className='swiper'
            >
                {swiperImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img.url} alt='' className="img-fluid" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ThreeComponent;