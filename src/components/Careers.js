import React from 'react';

const Careers = () => {
  return (
    <section className="bg-[#f8f9fa] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#f39c12] mb-4 drop-shadow-md">
            Careers at GeoMatrix
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Join our team and help us revolutionize the construction industry through innovation and dedication.
          </p>
        </div>

        {/* Kickstart Your Career Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Kickstart Your Career at GeoMatrix
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            At GeoMatrix, we develop our team members to be problem-solvers and innovators who always think outside the box
            to provide clients with unique solutions. We’re committed to creating a culture of trust, safety, and respect
            where everyone works well together and feels that they’re part of a supportive team.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            As an innovative company that relies heavily on digital infrastructure, we give our team maximum flexibility
            by allowing them to work from anywhere. This way, you can take charge of your day and use your time more
            efficiently.
          </p>
        </div>

        {/* Current Openings Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Current Openings
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We are currently hiring! Check back soon for updated job listings or reach out to us via email.
          </p>
          {/* Future job listings example */}
          {/* 
          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li>Survey Technician – Remote</li>
            <li>GIS Analyst – Calgary Office</li>
          </ul> 
          */}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-lg sm:text-xl font-semibold text-[#f39c12] mb-4">
            Interested in Joining Us?
          </h3>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            If you’re passionate about innovation and problem-solving, we’d love to hear from you! Reach out to us via email
            or stay tuned for our upcoming job openings.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#f39c12] text-white rounded-lg shadow-lg hover:bg-[#e67e22] transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
