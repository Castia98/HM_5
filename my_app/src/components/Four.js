import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
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

const FourComponent = () => {
    return (
        <div
            style={{
                margin: "0 auto",
                width: "100%",
                height: "100vh",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Four</h2>
            <Swiper
                direction="vertical"
                slidesPerView={3}
                spaceBetween={30}
                mousewheel={true}
                modules={[Mousewheel]}
                style={{ height: "100%" }}
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
                    <SwiperSlide
                        key={idx}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <img
                            src={img.url}
                            alt={`Slide ${idx + 1}`}
                            style={{
                                maxWidth: "20%",
                                height: "auto",
                                borderRadius: "8px",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FourComponent;