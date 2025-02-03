const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-6 xxs:gap-8 lg:gap-12">
          {/* About Section */}
          <div className="w-full">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Jobs
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                In Press
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Gallery
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Contact us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Online Chat
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                WhatsApp
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Telegram
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Ticketing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Call Center
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="w-full">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              FAQ
            </h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Account
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Booking
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Payments
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Returns
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 text-sm sm:text-base">
                Terms & Condition
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full xxs:col-span-2 md:col-span-1">
            <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Don't miss out on the exciting world of travel – subscribe now and
              embark on a journey of discovery with us.
            </p>
            <div className="flex flex-col xxs:flex-row gap-2 xxs:gap-0 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full xxs:w-auto flex-1 bg-gray-800 text-gray-300 rounded-lg xxs:rounded-r-none px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-gray-700"
              />
              <button
                type="submit"
                className="w-full xxs:w-auto bg-white hover:bg-gray-600 text-black  px-4 py-2 rounded-lg xxs:rounded-l-none text-sm sm:text-base transition-colors duration-200"
              >
                Submit
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.494v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.796.143v3.241l-1.918.001c-1.504 0-1.795.714-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.324-.593 1.324-1.326v-21.347c0-.733-.594-1.326-1.325-1.326z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186c-.273-1.031-.99-1.847-1.962-2.128-1.725-.498-8.626-.498-8.626-.498s-6.902 0-8.626.498c-.971.281-1.688 1.096-1.962 2.128-.479 1.817-.479 5.616-.479 5.616s0 3.799.479 5.616c.273 1.031.99 1.847 1.962 2.128 1.725.498 8.626.498 8.626.498s6.902 0 8.626-.498c.971-.281 1.688-1.096 1.962-2.128.479-1.817.479-5.616.479-5.616s0-3.799-.479-5.616zm-13.684 9.385v-6.356l6.289 3.178-6.289 3.178z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm sm:text-base">
            ©2023 Indotravi, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
