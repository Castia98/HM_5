import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const swiperImages = [
    { url: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-6.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-7.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-8.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-9.jpg" },
];

const FiveComponent = () => {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                Five
            </h2>{" "}
            <br />
            <Swiper
                watchSlidesProgress={true}
                spaceBetween={30}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {swiperImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={img.url}
                            alt={`Slide ${idx + 1}`}
                            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default FiveComponent;