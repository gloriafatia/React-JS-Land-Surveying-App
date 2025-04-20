import React from "react";
import { Link } from "react-router-dom";
import gjeofizik from "../gjeofizike/1.jpg";
import lasarLidar from "../scanning/2.jpg";
import markshajderi from "../markshajderi/markshajderi.jpg";
import topografi from "../topografi/9.jpg";

const Services = () => {
  const [header] = React.useState({
    mainHeeader: "SERVICES",
    text: "GeoMatrix Services. Click an image below to learn more about our services.",
  });

  const [state] = React.useState([
    {
      id: 1,
      heading: "Gjeofizik",
      image: gjeofizik,
    },
    {
      id: 2,
      heading: "3D LaserLidar dhe Photogrametry",
      image: lasarLidar,
    },
    {
      id: 3,
      heading: "Markshajderi",
      image: markshajderi,
    },
    {
      id: 4,
      heading: "Topografi",
      image: topografi,
    },
  ]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-[#f27f32] mb-4 drop-shadow-md"
          >
            {header.mainHeeader}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            {header.text}
          </p>
          <div className="w-20 h-1 bg-[#f27f32] mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {state.map((service, index) => {
            let path = "/";
            if (service.heading === "Gjeofizik") path = "/geology";
            else if (service.heading === "3D LaserLidar dhe Photogrametry")
              path = "/3d-lidar";
            else if (service.heading === "Markshajderi") path = "/markshajderi";
            else if (service.heading === "Topografi") path = "/topografi";

            const extraMargin =
              index === 0
                ? "xl:ml-4"
                : index === state.length - 1
                ? "xl:mr-4"
                : "";

            return (
              <div key={service.id} className={`h-[400px] ${extraMargin}`}>
                <Link
                  to={path}
                  className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div
                    className="relative h-2/3 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition duration-300" />
                  </div>
                  <div className="p-5 text-center h-1/3 flex items-center justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 group-hover:underline">
                      {service.heading}
                    </h3>
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
