import React from "react";
import foto0 from '../uraKukes/3.png'; // The image you want to display

const Surveying = () => {
  return (
    <div className="w-full mt-8 flex justify-center">
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={foto0} // Using just one image
          alt="Surveying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Dark overlay */}
        <div className="absolute inset-y-0 left-8 flex justify-start items-center text-left">
          <h1 className="text-white text-6xl font-bold tracking-wider">Surveying</h1> {/* Larger text on the left */}
        </div>
      </div>
    </div>
  );
};

export default Surveying;
