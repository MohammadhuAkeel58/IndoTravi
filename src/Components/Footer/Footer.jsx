const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 lg:px-20 font-body">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Jobs</li>
            <li>In Press</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>Contact us</li>
            <li>Online Chat</li>
            <li>WhatsApp</li>
            <li>Telegram</li>
            <li>Ticketing</li>
            <li>Call Center</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">FAQ</h4>
          <ul className="space-y-2">
            <li>Account</li>
            <li>Booking</li>
            <li>Payments</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Don’t miss out on the exciting world of travel – subscribe now and
            embark on a journey of discovery with us.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r-lg"
            >
              Submit
            </button>
          </form>

          <div className="flex space-x-4 mt-8">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white hover:bg-gray-500 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.494v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.796.143v3.241l-1.918.001c-1.504 0-1.795.714-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.324-.593 1.324-1.326v-21.347c0-.733-.594-1.326-1.325-1.326z" />
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white hover:bg-gray-500 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.315.975.975 1.253 2.242 1.315 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.67.013-4.947.072-1.496.067-2.846.34-3.946 1.44-1.1 1.1-1.373 2.45-1.44 3.946-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.067 1.496.34 2.846 1.44 3.946 1.1 1.1 2.45 1.373 3.946 1.44 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.496-.067 2.846-.34 3.946-1.44 1.1-1.1 1.373-2.45 1.44-3.946.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.067-1.496-.34-2.846-1.44-3.946-1.1-1.1-2.45-1.373-3.946-1.44-1.277-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.337c-2.301 0-4.175-1.874-4.175-4.175s1.874-4.175 4.175-4.175 4.175 1.874 4.175 4.175-1.874 4.175-4.175 4.175zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-white hover:bg-gray-500 transition"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M23.498 6.186c-.273-1.031-.99-1.847-1.962-2.128-1.725-.498-8.626-.498-8.626-.498s-6.902 0-8.626.498c-.971.281-1.688 1.096-1.962 2.128-.479 1.817-.479 5.616-.479 5.616s0 3.799.479 5.616c.273 1.031.99 1.847 1.962 2.128 1.725.498 8.626.498 8.626.498s6.902 0 8.626-.498c.971-.281 1.688-1.096 1.962-2.128.479-1.817.479-5.616.479-5.616s0-3.799-.479-5.616zm-13.684 9.385v-6.356l6.289 3.178-6.289 3.178z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500">
        ©2023 Indotravi, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
