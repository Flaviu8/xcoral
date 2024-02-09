
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from "../../assets/cars/Cars.json"
import './style.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
   
            <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            zoom={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Zoom, Navigation, Pagination]}
            className="mySwiper"
          >
      {
        data.cars.map((datas, index) => {
            return (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={datas.photo} />
              </div>
            </SwiperSlide>
            )
               })
            }
          </Swiper>
    </>
  );
}
