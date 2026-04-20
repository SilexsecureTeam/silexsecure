import logo from "../assets/logo.png";
import slogo from "../assets/slogo.png";
import des from "../assets/des.png";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navlink = [
    { name: "Home", to: "/" },
    { name: "About", to: "https://bugbounty.defcomm.ng/" },
    { name: "Case Study", to: "/case-study" },
    { name: "Contact", to: "https://bugbounty.defcomm.ng/contact" },
  ];

  return (
    <div className="bg-black w-full h-fit">
      {/* ===================== STICKY PILL HEADER ===================== */}
      <div className="sticky top-5 z-50 flex justify-center pointer-events-none">
        <header className="pointer-events-auto flex items-center justify-between backdrop-blur-md bg-[#B00103]/20 border border-gray-300 rounded-full gap-14 px-8 py-4">
          <img src={logo} alt="SilexSecure Logo" className="h-auto w-30" />

          <div className="flex space-x-1">
            {navlink.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`px-4 py-2 text-white transition-all duration-300 rounded-full
                ${isActive ? "border border-white bg-white/10" : "hover:text-gray-300"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </header>
      </div>

      {/* ===================== RED GRADIENT SECTION ===================== */}
      <div className="bg-gradient-to-b from-[#B00103] to-[#590001] w-full h-full rounded-br-[150px] pl-5 md:pl-10 -mt-19">
        {/* ===================== HERO SECTION ===================== */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 relative pt-44">
          {/* LEFT COLUMN — contains hero text + industry pills, grows tall */}
          <div className="w-full md:w-2/3">
            <h2 className="text-6xl font-bold text-white">
              Elevating your{" "}
              <span className="text-8xl font-black">Digital Presence</span> with{" "}
              <span className="text-[#000000]">Custom Web Solutions</span>
            </h2>
            <p className="mt-10 text-xl w-4/5 text-white">
              Silex Secure has developed and implemented digital platforms
              across multiple sectors including,
            </p>

            {/* list section — moved inside left column so it adds height next to the sticky image */}
            <div className="py-20 w-full text-white">
              <div className="space-y-4">
                {/* Top Row - 2 Items */}
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                  <div className="flex-1 max-w-sm bg-black/50 p-3 rounded-full">
                    <h3 className="text-2xl text-center text-white font-semibold mb-3">
                      aviation
                    </h3>
                  </div>
                  <div className="flex-1 max-w-sm bg-black/50 p-3 rounded-full">
                    <h3 className="text-2xl text-center text-white font-semibold mb-3">
                      e-commerce
                    </h3>
                  </div>
                </div>

                {/* Middle - Single Centered Item */}
                <div className="flex justify-center">
                  <div className="flex-1 max-w-sm bg-black/50 p-3 rounded-full">
                    <h3 className="text-3xl text-center text-white font-bold mb-4">
                      enterprise
                    </h3>
                  </div>
                </div>

                {/* Bottom Row - 2 Items */}
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                  <div className="flex-1 max-w-sm bg-black/50 p-3 rounded-full">
                    <h3 className="text-2xl text-center text-white font-semibold mb-3">
                      oil and gas
                    </h3>
                  </div>
                  <div className="flex-1 max-w-sm bg-black/50 p-3 rounded-full">
                    <h3 className="text-2xl text-center text-white font-semibold mb-3">
                      government
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — sticky hero image ONLY on desktop */}
          <div className="w-full md:w-1/3 md:fixed md:right-0 md:z-70 md:top-40 self-start">
            <img src={des} alt="Design" className="w-full h-110" />
          </div>
        </div>
        {/* END HERO + LIST SECTION */}
      </div>
      {/* END RED GRADIENT */}

      {/* ===================== OUR APPROACH ===================== */}
      <div className="bg-white w-full md:w-2/3 px-5 md:px-10 py-5 rounded-r-full my-8">
        <h2 className="text-[#590001] text-3xl font-extrabold mb-6">
          Our Approach
        </h2>
        <p className="text-[#590001] text-lg">
          Our approach integrates high performance architecture with intuitive
          user experiences (ux), ensuring that every line of code serves a
          strategic purpose, from lead generation to seamless scalability.
          <br /> <br />
          This portfolio showcases our commitment to transforming complex
          business requirements into elegant, secure, and high-converting
          digital platforms.
        </p>
      </div>

      {/* ===================== FULL CIRCLE SECTION ===================== */}
      <div className="bg-black ml-0 md:-ml-26 py-5 flex overflow-hidden relative">
        <div className="relative w-full max-w-[600px] h-[600px] ">
          {/* FULL WHITE CIRCLE */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 900 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="450"
                cy="450"
                r="365"
                stroke="#ffffff"
                strokeWidth="1"
                strokeOpacity="0.85"
                fill="none"
              />
            </svg>
          </div>

          {/* 1. Top Center - Security By Design */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="bg-zinc-900 text-white z-20 px-8 py-3 rounded-3xl text-lg font-semibold tracking-wide border border-zinc-700 mb-4">
              Security By Design
            </div>
            <div className="bg-red-600 -mt-8 text-white px-3 py-4 rounded-3xl max-w-xl w-full text-center">
              <p className="text-base font-light leading-relaxed">
                Security Is Embedded From System Architecture To Deployment.
              </p>
            </div>
          </div>

          {/* 2. Right Side - User-Centered Design */}
          <div className="absolute top-1/2 right-[-30px] -translate-y-1/2 flex flex-col items-end z-10">
            <div className="bg-zinc-900 text-white z-20 px-8 py-3 rounded-3xl text-lg font-semibold tracking-wide border border-zinc-700 mb-4">
              User-Centered Design
            </div>
            <div className="bg-red-600 -mt-8 text-white px-3 py-4 rounded-3xl max-w-xs w-full text-center">
              <p className="text-base font-light leading-relaxed">
                Platforms Are Built To Be Intuitive, Efficient, And Accessible.
              </p>
            </div>
          </div>

          {/* 3. Bottom Center - Scalable Technology */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="bg-zinc-900 text-white z-20 px-8 py-3 rounded-3xl text-lg font-semibold tracking-wide border border-zinc-700 mb-4">
              Scalable Technology
            </div>
            <div className="bg-red-600 -mt-8 text-white px-3 py-4 rounded-3xl max-w-xl w-full text-center">
              <p className="text-base font-light leading-relaxed">
                Solutions Are Designed To Grow With The Needs Of The
                Organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== DOWNLOAD BROCHURE ===================== */}
      <div className="mb-10 flex justify-center items-center">
        <button className="bg-white cursor-pointer mx-auto px-8 py-4 rounded-full text-[#590001] font-extrabold text-2xl">
          Download Brochure
        </button>
      </div>

      {/* ===================== FOOTER ===================== */}
      <div className="w-full justify-start items-center flex">
        <div className="bg-white w-full md:w-1/2 px-5 md:px-10 py-5 rounded-r-full my-8">
          <div className="flex justify-between gap-3">
            {/* Logo */}
            <div>
              <img
                src={slogo}
                alt="SilexSecure Logo"
                className="h-auto w-40 ml-6"
              />
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-[#B00103] font-semibold text-lg mb-2">
                Quick Links
              </h3>
              <div className="flex flex-col gap-1.5 text-[#590001]">
                <Link
                  to="/"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="https://bugbounty.defcomm.ng/"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/case-study"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  Case Study
                </Link>
                <Link
                  to="https://bugbounty.defcomm.ng/contact"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-[#B00103] font-semibold text-lg mb-2">
                Get In Touch
              </h3>
              <div className="flex flex-col gap-1.5 text-[#590001]">
                <a
                  href="tel:+2348188822411"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  (234) 818 882 2411
                </a>
                <a
                  href="tel:+2348020989037"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  (234) 802 098 9037
                </a>
                <a
                  href="mailto:cyber@silex.com"
                  className="hover:text-[#590001]/30 transition-colors"
                >
                  cyber@silex.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-[#590001] mt-3 pt-3 text-center text-[#590001] text-sm">
            © {new Date().getFullYear()} SilexSecure. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
