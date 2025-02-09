import React from 'react'

function Contact() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information Section */}
        <div className="bg-[#2B3B3A] p-8 rounded-lg shadow-lg">
          <h2 className="text-[#AF8E4D] text-2xl font-serif mb-8">
            Contact Us
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#AF8E4D]/10">
                <svg
                  className="w-5 h-5 text-[#AF8E4D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-[#AF8E4D] font-serif">Call Us</h3>
                <p className="text-gray-300 mt-1">+962793939352</p>
                <p className="text-gray-400 text-sm mt-1">
                  Sunday-thursday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#AF8E4D]/10">
                <svg
                  className="w-5 h-5 text-[#AF8E4D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-[#AF8E4D] font-serif">Email Us</h3>
                <p className="text-gray-300 mt-1">Ahmmadtarawnah@gmail.com</p>
                <p className="text-gray-400 text-sm mt-1">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#AF8E4D]/10">
                <svg
                  className="w-5 h-5 text-[#AF8E4D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-[#AF8E4D] font-serif">Visit Us</h3>
                <p className="text-gray-300 mt-1">New Zarqa</p>
                <p className="text-gray-400 text-sm mt-1">jabal almogher</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-[#2B3B3A] text-2xl font-serif mb-2">
            Schedule a Consultation
          </h2>
          <p className="text-gray-600 mb-8">
            Please fill out the form below and we'll get back to you promptly.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AF8E4D] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AF8E4D] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AF8E4D] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AF8E4D] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Case Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#AF8E4D] focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B3B3A] hover:bg-[#2B3B3A]/90 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact