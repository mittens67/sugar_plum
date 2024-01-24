import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Carousel = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 8500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide className="relative">
          <picture className="lg:self-start lg:block">
            <source
              media="(min-width: 640px)"
              srcSet={`/assets/banners/Banner1.jpg`}
            />
            <img src={`/assets/banners/Banner1_mobile.jpg`} alt="Banner" className="w-[100%]"/>
          </picture>
          {/* <img src={"../assets/banners/Banner1.jpg"} alt="Carousel POR" /> */}
          <Link to={`/category/menu`}>
            <Button1
              text={`Explore Menu`}
              customClass="absolute bottom-[30%] inset-x-0 mx-[auto] text-[12px] px-[12px] py-[5px] sm:text-xs sm:px-[100px] sm:py-[10px]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <picture className="lg:self-start lg:block">
            <source
              media="(min-width: 640px)"
              srcSet={`/assets/banners/Banner2.jpg`}
            />
            <img src={`/assets/banners/Banner2_mobile.jpg`} alt="Banner" className="w-[100%]" />
          </picture>
          {/* <img src={"../assets/banners/Banner2.jpg"} alt="Carousel POR" /> */}
          <Link to={`/category/menu`}>
            <Button2
              text={`Explore Menu >`}
              customClass="absolute text-[14px] sm:text-sm sm:left-[5%] top-[40%] left-[12%] hover:text-secondary-500 "
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <picture className="lg:self-start lg:block">
            <source
              media="(min-width: 640px)"
              srcSet={`/assets/banners/Banner3.jpg`}
            />
            <img src={`/assets/banners/Banner3_mobile.jpg`} alt="Banner" className="w-[100%]"/>
          </picture>
          {/* <img src={"../assets/banners/Banner3.jpg"} alt="Carousel POR" /> */}
          <Link to={`/category/occasions`}>
            <Button2
              text={`< View Collection`}
              customClass="absolute text-[14px] sm:text-sm bottom-[42%] right-[10%] text-primary-100  hover:text-secondary-500"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
