import React from "react";
import "../assets/css/Home.css";
import heroSlide_1 from "../assets/images/heroSlide_1.jpg";
import heroSlide_2 from "../assets/images/heroSlide_2.jpg";
import heroSlide_3 from "../assets/images/heroSlide_3.jpg";
import heroSlide_4 from "../assets/images/heroSlide_4.jpg";
import heroSlide_5 from "../assets/images/heroSlide_5.jpg";
import heroSlide_6 from "../assets/images/heroSlide_6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="content">
          <h3>app landing page</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            maiores perferendis placeat alias vero accusamus ea aliquid expedita
            et iusto quae sit soluta provident reiciendis repellat modi facilis,
            laudantium distinctio!
          </p>
          <a href="#" className="btn">
            get started
          </a>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper image-slider"
        >
          <SwiperSlide>
            <img src={heroSlide_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroSlide_2} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
