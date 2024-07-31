import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, EffectFlip, Pagination, Navigation, Thumbs, FreeMode} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import {useState} from "react";



export const SwiperComponent = ({swiperImages, handleChange}) => {


    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        // <Swiper
        // // effect='cards'
        // grabCursor
        // // modules={[EffectCards]}
        // className='mySwiper'
        // effect='flip'
        // pagination={true}
        // navigation={true}
        // modules={[EffectFlip, Pagination, Navigation]}
        // >
        //
        //     {swiperImages.map((img, idx) =>
        //         <SwiperSlide key={idx}>
        //             <img style={{width:'300px'}} src={img.url} alt=''/>
        //         </SwiperSlide>
        //     )}
        // </Swiper>
        <>
            <Swiper style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='mySwiper'

            >
                {swiperImages.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img src={img.url} alt=''/>
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"

            >
                {swiperImages.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img  src={img.url} alt=''/>
                    </SwiperSlide>
                )}
            </Swiper>


        </>
    )
}