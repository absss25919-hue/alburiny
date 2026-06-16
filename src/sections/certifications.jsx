import React from "react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-gradient-to-br from-[#fff5eb] via-[#ffe4cc] to-[#ffd4a3] py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-[#ff3b30] via-[#ff6b00] to-[#ffcc00] bg-clip-text text-transparent mb-2 animate-pulse">
          Certifications & Compliance
        </h2>

        {/* Underline */}
        <div className="w-40 h-1.5 bg-gradient-to-r from-[#ff3b30] via-[#ff9500] to-[#ffcc00] mx-auto rounded-full shadow-lg shadow-orange-400/60 mb-8" />

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center mb-16">
          We supply products that meet international safety standards and comply
          with local regulations. Our equipment is sourced from certified
          manufacturers and tested for reliability and performance.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl
            p-12 text-center transition-all duration-500
            hover:-translate-y-6 hover:scale-110
            border-t-[5px] border-[#ff3b30]
            flex flex-col justify-center h-full">

            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 8C32 8 24 16 24 24C24 32 28 40 32 44C36 40 40 32 40 24C40 16 32 8 32 8Z"
                  fill="url(#fireGradient)"
                />
                <defs>
                  <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF3B30" />
                    <stop offset="100%" stopColor="#FFB800" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h4 className="text-[#ff3b30] text-2xl font-bold mb-3">
              LPCB Approved
            </h4>
            <p className="text-gray-500 text-base">
              Fire Alarm Systems
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl
            p-12 text-center transition-all duration-500
            hover:-translate-y-6 hover:scale-110
            border-t-[5px] border-[#ff6b00]
            flex flex-col justify-center h-full">

            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 8L20 18V32C20 44 32 56 32 56C32 56 44 44 44 32V18L32 8Z"
                  fill="#2563EB"
                />
              </svg>
            </div>

            <h4 className="text-[#ff3b30] text-2xl font-bold mb-3">
              LPCB & BSI Certified
            </h4>
            <p className="text-gray-500 text-base">
              Kitemark Approved
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl
            p-12 text-center transition-all duration-500
            hover:-translate-y-6 hover:scale-110
            border-t-[5px] border-[#ff9500]
            flex flex-col justify-center h-full">

            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                <circle
                  cx="32"
                  cy="32"
                  r="24"
                  fill="#E8F5E9"
                  stroke="#4CAF50"
                  strokeWidth="2"
                />
                <path
                  d="M20 32L28 40L44 24"
                  stroke="#4CAF50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h4 className="text-[#ff3b30] text-2xl font-bold mb-3">
              Fire Fighting Systems
            </h4>
            <p className="text-gray-500 text-base">
              Fully Certified Equipment
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl
            p-12 text-center transition-all duration-500
            hover:-translate-y-6 hover:scale-110
            border-t-[5px] border-[#ffcc00]
            flex flex-col justify-center h-full">

            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                <rect
                  x="16"
                  y="14"
                  width="32"
                  height="40"
                  rx="3"
                  fill="#FFB800"
                  opacity="0.2"
                  stroke="#FFB800"
                  strokeWidth="2"
                />
                <rect x="20" y="20" width="24" height="4" fill="#FFB800" />
                <rect x="20" y="28" width="24" height="2" fill="#FFB800" />
                <rect x="20" y="32" width="24" height="2" fill="#FFB800" />
                <rect x="20" y="36" width="24" height="2" fill="#FFB800" />
                <rect x="20" y="40" width="24" height="2" fill="#FFB800" />
                <circle cx="32" cy="50" r="2" fill="#FFB800" />
              </svg>
            </div>

            <h4 className="text-[#ff3b30] text-2xl font-bold mb-3">
              Local Compliance
            </h4>
            <p className="text-gray-500 text-base">
              UAE Fire Safety Codes
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
