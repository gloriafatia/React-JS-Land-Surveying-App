import React from "react";
import video from "../assets/GeoMatriks.mp4";

const Banner = () => {
  return (
    <header className="relative w-full h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center md:text-left">
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
      </div>
    </header>
  );
};

export default Banner;
