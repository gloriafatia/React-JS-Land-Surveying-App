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
    <section className="services py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#f39c12] mb-4 drop-shadow-lg">
            {header.mainHeeader}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {header.text}
          </p>
          <div className="w-24 h-1 bg-[#f39c12] mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {state.map((info) => {
            const Icon = info.icon;
            let path = "/";
            if (info.heading === "Surveying") path = "/surveying";
            else if (info.heading === "Geology/Geophysics") path = "/geology";
            else if (info.heading === "Inspection") path = "/inspection";

            return (
              <div key={info.id} className="service-card group">
                <Link to={path} className="block relative rounded-lg overflow-hidden">
                  <div
                    className="service-image h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-300 rounded-lg"
                    style={{
                      backgroundImage: `url(${info.image})`,
                    }}
                  >
                    <div className="service-overlay absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
                    <Icon className="service-icon text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="service-info p-6 bg-white rounded-b-lg">
                    <h3 className="text-xl font-semibold text-[#f39c12] group-hover:underline">{info.heading}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
