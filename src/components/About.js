import React from 'react';

const About = () => {
  const [state] = React.useState({
    subHeader: "About Us",
    text: `Geo Matrix Solutions, under the brand ALB MATRIX GROUP, has, in just 3 years, become a well-known and innovative company in the broad construction market of Albania, Kosovo, and North Macedonia. Since 2019, it has been operating in Geodetic, Geophysical, and Geological services, with a focus on improving quality and bringing the highest standards to the Albanian market, aiming ultimately to expand throughout the entire Balkans.`
  });

  return (
    <section className="min-h-screen bg-[#f8f9fa] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#f39c12] mb-4 drop-shadow-lg">
            {state.subHeader}
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            {state.text}
          </p>
          <div className="w-24 h-1 bg-[#f39c12] mx-auto mt-6 rounded-full" />
        </div>
        {/* Background and Card */}
        <div className="bg-white p-10 rounded-lg shadow-lg border border-[#e0e0e0]">
          <h3 className="text-2xl font-semibold text-[#333] mb-6">Our Mission</h3>
          <p className="text-gray-600 text-base leading-relaxed">
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
