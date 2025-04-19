import React from "react";

const Geology = () => {
  const categories = [
    {
      title: "Geotechnical / Geological Studies",
      services: [
        "Geotechnical and Geological Study",
        "Geological Drilling",
      ],
    },
    {
      title: "Geophysics GPR",
      services: [
        "Geophysical Study",
        "Ground Penetration Radar (GPR) Scanning",
        "Underground Network Detection, Electrical Cables, and Pipelines",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#fffaf3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#f39c12] mb-4">
            Geology / Geophysics Services
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide comprehensive geological and geophysical services that enable in-depth exploration and analysis of subsurface structures.
          </p>
          <div className="w-24 h-1 bg-[#f39c12] mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid of Services */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-[#f39c12] hover:shadow-xl transition-all duration-300 rounded-lg p-6 group hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-[#f39c12] mb-4 group-hover:underline underline-offset-4 decoration-[#f39c12]">
                {category.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm leading-relaxed">
                {category.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Geology;
