import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import Button1 from './Button1';
import Button2 from './Button2';

const Carousel = () => {
  return (
    <div>
        <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide className='relative'>
          <img src={"../assets/banners/Banner1.jpg"} alt="Carousel POR"/>
          <Link to={`/category/menu`}>
            <Button1 text={`Explore Menu`}  customClass='absolute bottom-[30%] left-[40%] px-[100px] py-[10px]'/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={"../assets/banners/Banner2.jpg"} alt="Carousel POR" />
          <Link to={`/category/menu`}>
          <Button2 text={`Explore Menu >`} customClass='absolute top-[40%] left-[5%] '/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={"../assets/banners/Banner3.jpg"} alt="Carousel POR" />
          <Link to={`/category/occasions`}>
          <Button2 text={`< View Collection`} customClass='absolute bottom-[45%] right-[10%] text-white'/>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel