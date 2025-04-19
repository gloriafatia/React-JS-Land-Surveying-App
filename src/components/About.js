import React from 'react';

const About = () => {
  const [state] = React.useState({
    subHeader: "About Us",
    text: `Geo Matrix Solutions, under the brand ALB MATRIX GROUP, has, in just 3 years, become a well-known and innovative company in the broad construction market of Albania, Kosovo, and North Macedonia. Since 2019, it has been operating in Geodetic, Geophysical, and Geological services, with a focus on improving quality and bringing the highest standards to the Albanian market, aiming ultimately to expand throughout the entire Balkans.`
  });

  return (
    <section className="bg-[#f8f9fa] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f39c12] drop-shadow-md mb-4">
            {state.subHeader}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto">
            {state.text}
          </p>
          <div className="w-20 h-1 bg-[#f39c12] mx-auto mt-6 rounded-full" />
        </div>

        {/* Card Section */}
        <div className="bg-white px-6 py-8 sm:px-10 sm:py-10 rounded-xl shadow-md border border-gray-200 transition-all duration-300">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Our Mission
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Geo Matrix Solutions is driven by the mission to provide top-tier surveying and engineering services.
            Our team of experts strives to implement cutting-edge technologies to deliver exceptional results
            and ensure the highest level of precision in every project we undertake. We are committed to improving the
            infrastructure and environmental sustainability of the regions we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
