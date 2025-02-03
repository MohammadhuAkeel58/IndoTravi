const OptionsB = () => {
  return (
    <div className="lg:w-1/2 w-full font-body h-full">
      <div className="h-full flex flex-col">
        <h3 className="text-lg text-gray-500 font-medium">How it works</h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">
          One click for you
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Find your destination
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  Embark on a journey to discover your dream destination, where
                  adventure and relaxation await.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 2v12H4V6h16zm-7 10h-2v-2h2v2zm0-4h-2V8h2v4z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Book a ticket
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  Ensure a smooth travel experience by booking tickets to your
                  preferred destination via our platform.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1-4h-4v-4h4v4z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Make payment
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  We offer a variety of payment options to ensure a hassle-free
                  process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 text-gray-600 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2a10 10 0 00-7.546 16.182l7.546 3.787 7.546-3.787A10 10 0 0012 2zm0 15l-6.53-3.265A8 8 0 1120.53 13.735L12 17z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Explore destination
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  Immerse yourself in captivating sights, sounds, and tastes as
                  you explore the ancient streets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsB;
