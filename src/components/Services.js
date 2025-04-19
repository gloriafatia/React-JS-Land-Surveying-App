import React from "react";
import { IoSearchCircle } from "react-icons/io5";
import { SiGooglesearchconsole } from "react-icons/si";
import { GrInspect } from "react-icons/gr";
import { Link } from "react-router-dom";
import surveying from "../assets/Surveying.jpg";
import geology from "../assets/Geology.jpg";
import inspection from "../assets/Inspection.jpg";

const Services = () => {
  const [header] = React.useState({
    mainHeeader: "SERVICES",
    text: "GeoMatrix Services. Click an image below to learn more about our services.",
  });

  const [state] = React.useState([
    {
      id: 1,
      icon: IoSearchCircle,
      heading: "Surveying",
      image: surveying,
    },
    {
      id: 2,
      icon: SiGooglesearchconsole,
      heading: "Geology/Geophysics",
      image: geology,
    },
    {
      id: 3,
      icon: GrInspect,
      heading: "Inspection",
      image: inspection,
    },
  ]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mb-4 drop-shadow-md">
            {header.mainHeeader}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            {header.text}
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {state.map((service) => {
            const Icon = service.icon;
            let path = "/";
            if (service.heading === "Surveying") path = "/surveying";
            else if (service.heading === "Geology/Geophysics") path = "/geology";
            else if (service.heading === "Inspection") path = "/inspection";

            return (
              <Link
                key={service.id}
                to={path}
                className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="relative h-64 sm:h-72 md:h-80 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition duration-300" />
                  <Icon className="absolute text-white text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 group-hover:underline">
                    {service.heading}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
