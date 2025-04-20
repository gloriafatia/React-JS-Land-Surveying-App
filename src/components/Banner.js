import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import banner1 from "../assets/rename.png";
// import banner2 from "../assets/4.png";
// import banner3 from "../assets/5.png";
// import banner4 from "../assets/6.png";
// import banner5 from "../assets/7.png";
// import banner6 from "../assets/8.png";
// import banner7 from "../assets/sc.png";

const Banner = () => {
  return (
    <header className="relative w-full h-screen">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        {[banner1 /*, banner2, banner3, banner4, banner5, banner6, banner7 */].map((img, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Content Section */}
      {/* <div className="relative z-10 flex items-center justify-center h-full px-6 text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to GeoMatriks
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
            Explore cutting-edge solutions for the geospatial industry.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all shadow-lg">
            Learn More
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default Banner;
