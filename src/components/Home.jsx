import logo from "../assets/logo.png";
import slogo from "../assets/slogo.png";
import des from "../assets/silex.png";
import des1 from "../assets/des1.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const useParallaxFade = (speed = 0.3) => {
  // const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-parallax]");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startFade = windowHeight * 0.85;
        const endFade = windowHeight * 0.15;

        let progress = 0;

        if (rect.top <= startFade && rect.bottom >= endFade) {
          progress = 1 - (rect.top - endFade) / (startFade - endFade);
        }

        const clamped = Math.max(0, Math.min(1, progress));

        // const start = windowHeight * 0.95; // 15% from bottom
        // const end = windowHeight * 0.05;   // 15% from top

        // const progress = (start - rect.top) / (start - end);
        // const clamped = Math.max(0, Math.min(1, progress));

        const translateY = (1 - clamped) * 60 * speed;
        const opacity = clamped;
        const scale = 0.95 + clamped * 0.05;

        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.opacity = opacity;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  // return style;
};

const Home = () => {
  useParallaxFade();
  const location = useLocation();
  const navlink = [
    { name: "Home", to: "/" },
    { name: "About", to: "https://bugbounty.defcomm.ng/" },
    { name: "Case Study", to: "/case-study" },
    { name: "Contact", to: "https://bugbounty.defcomm.ng/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black w-full h-fit">
      {/* ===================== STICKY PILL HEADER ===================== */}
      <div className="sticky top-5 z-90 flex justify-center pointer-events-none">
        <header className="pointer-events-auto flex w-[90%] md:w-fit items-center justify-between backdrop-blur-md bg-[#B00103]/20 border border-gray-300 rounded-full gap-6 px-8 py-4">
          <img src={logo} alt="SilexSecure Logo" className="h-auto w-30" />

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
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

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </header>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute pointer-events-auto top-full mt-0 w-[90%] backdrop-blur-md bg-[#B00103]/20 border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
            {navlink.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-white transition-all duration-200
              ${isActive ? "bg-white/20 font-semibold" : "hover:bg-white/10"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* ===================== RED GRADIENT SECTION ===================== */}
      <div className="bg-gradient-to-b from-[#B00103] to-[#590001] w-full h-full rounded-br-[150px] pl-0 md:pl-10 -mt-19">
        {/* ===================== HERO SECTION ===================== */}
        <div className="w-full flex flex-col md:flex-row items-start justify-center md:justify-between gap-6 px-5 md:px-0 relative pt-44">
          {/* LEFT COLUMN — contains hero text + industry pills, grows tall */}
          <div className="w-full md:w-2/3">
            <h2 className="md:text-6xl text-2xl text-center md:text-start font-bold text-white">
              Elevating your{" "}
              <span className="md:text-8xl text-3xl font-black">
                Digital Presence
              </span>{" "}
              with <span className="text-[#000000]">Custom Web Solutions</span>
            </h2>

            {/* RIGHT COLUMN — sticky hero image ONLY on desktop */}
            <div className="w-full block mt-3 md:hidden">
              <img
                src={des}
                alt="Design"
                className="hidden md:block w-full h-full"
              />
              <img
                src={des1}
                alt="Design"
                className="block md:hidden w-full h-full"
              />
            </div>

            <p className="mt-10 text-xl md:w-4/5 text-center md:text-start text-white">
              Silex Secure has developed and implemented digital platforms
              across multiple sectors including,
            </p>

            {/* list section — moved inside left column so it adds height next to the sticky image */}
            <div className="py-20 w-full text-white">
              <div className="space-y-4">
                {/* Top Row - 2 Items */}
                <div className="flex flex-row gap-8 justify-center">
                  <div className="flex-1 max-w-xs bg-black/50 p-3 rounded-full">
                    <h3
                      data-parallax
                      className="text-lg md:text-4xl text-start text-white font-black mb-3"
                    >
                      aviation
                    </h3>
                  </div>
                  <div className="flex-1 max-w-xs bg-black/50 p-3 rounded-full">
                    <h3
                      data-parallax
                      className="text-lg md:text-4xl text-start text-white font-black mb-3"
                    >
                      e-commerce
                    </h3>
                  </div>
                </div>

                {/* Middle - Single Centered Item */}
                <div className="flex justify-center ">
                  <div className="md:flex-1 w-[180px]  md:max-w-xs bg-black/50 p-3 rounded-full">
                    <h3
                      data-parallax
                      className="text-lg md:text-4xl text-start text-white font-black mb-4"
                    >
                      enterprise
                    </h3>
                  </div>
                </div>

                {/* Bottom Row - 2 Items */}
                <div className="flex flex-row gap-8 justify-center">
                  <div className="flex-1 max-w-xs bg-black/50 p-3 rounded-full">
                    <h3
                      data-parallax
                      className="text-lg md:text-4xl text-start text-white font-black mb-3"
                    >
                      oil and gas
                    </h3>
                  </div>
                  <div className="flex-1 max-w-xs bg-black/50 p-3 rounded-full">
                    <h3
                      data-parallax
                      className="text-lg md:text-4xl text-start text-white font-black mb-3"
                    >
                      government
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — sticky hero image ONLY on desktop */}
          <div className="w-full hidden md:block md:w-1/3 md:fixed md:right-0 md:z-30 md:top-40 self-start">
            <img
              src={des}
              alt="Design"
              className="hidden md:block w-full h-110"
            />
            <img
              src={des1}
              alt="Design"
              className="block md:hidden w-full h-110"
            />
          </div>
        </div>
        {/* END HERO + LIST SECTION */}
      </div>
      {/* END RED GRADIENT */}

      {/* ===================== OUR APPROACH ===================== */}
      <div className="bg-white w-[99%] mx-auto md:mx-0 md:w-3/4 relative z-50 px-5 md:px-10 py-5 rounded-[50px] md:rounded-r-full my-8">
        <h2 className="text-[#590001] text-3xl font-extrabold mb-6">
          Our Approach
        </h2>
        <p className="text-[#590001] text-justify md:text-start text-lg">
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
      <div className="bg-black -ml-20 md:-ml-30 py-5  flex overflow-hidden relative">
        <div className="relative z-50 w-full  md:w-6/9 aspect-square">
          {/* FULL WHITE CIRCLE */}
          <div className="absolute inset-0  aspect-square pointer-events-none">
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
          <div className="absolute top-[-2px] md:top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div
              data-parallax
              className="bg-zinc-900 text-white z-20 px-8 py-3 rounded-3xl text-sm md:text-xl font-semibold tracking-wide border border-zinc-700 mb-4"
            >
              Security By Design
            </div>
            <div className="bg-red-600 -mt-8 text-white px-3 py-4 rounded-3xl max-w-[250px] md:max-w-sm w-full ">
              <p
                data-parallax
                className="text-sm md:text-xl font-light leading-relaxed"
              >
                Security Is Embedded From System Architecture To Deployment.
              </p>
            </div>
          </div>

          {/* 2. Right Side - User-Centered Design */}
          <div className="absolute top-1/2 right-[30px] md:right-[-180px] -translate-y-1/2 flex flex-col items-center z-10">
            <div
              data-parallax
              className="bg-zinc-900 text-white z-20 px-8 py-3 rounded-3xl text-base md:text-xl font-semibold tracking-wide border border-zinc-700 mb-4"
            >
              User-Centered Design
            </div>
            <div className="bg-red-600 -mt-8 text-white px-3 py-4 rounded-3xl max-w-[250px] md:w-xs  w-full">
              <p
                data-parallax
                className="text-sm md:text-xl font-light leading-relaxed"
              >
                Platforms Are Built To Be Intuitive, Efficient, And Accessible.
              </p>
            </div>
          </div>

          {/* 3. Bottom Center - Scalable Technology */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div
              data-parallax
              className="bg-zinc-900 text-white z-20 px-8 py-3 rounded-3xl text-base md:text-xl font-semibold tracking-wide border border-zinc-700 mb-4"
            >
              Scalable Technology
            </div>
            <div className="bg-red-600 -mt-8 text-white px-3 py-4 rounded-3xl max-w-[200px] md:max-w-sm w-full ">
              <p
                data-parallax
                className="text-sm md:text-xl font-light leading-relaxed"
              >
                Solutions Are Designed To Grow With The Needs Of The
                Organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FOOTER ===================== */}
      <div className="w-full justify-start items-center flex">
        <div className="bg-white w-full md:w-1/2 px-5 md:px-10 py-5 md:rounded-r-full rounded-t-[40px] rounded-bl-[100px] mb-0 md:mt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-6 pl-10 md:pl-0 md:items-start sm:gap-3">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start">
              <img
                src={slogo}
                alt="SilexSecure Logo"
                className="h-auto w-40 sm:ml-6"
              />
            </div>

            {/* Navigation Links */}
            <div className="text-left">
              <h3 className="text-[#B00103] font-semibold text-lg mb-2">
                Quick Links
              </h3>
              <div className="flex flex-col gap-1.5 text-[#590001]">
                <Link to="/" className="hover:text-[#B00103] transition-colors">
                  Home
                </Link>
                <Link
                  to="https://bugbounty.defcomm.ng/"
                  className="hover:text-[#B00103] transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/case-study"
                  className="hover:text-[#B00103] transition-colors"
                >
                  Case Study
                </Link>
                <Link
                  to="https://bugbounty.defcomm.ng/contact"
                  className="hover:text-[#B00103] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="text-left">
              <h3 className="text-[#B00103] font-semibold text-lg mb-2">
                Get In Touch
              </h3>
              <div className="flex flex-col gap-1.5 text-[#590001]">
                <a
                  href="tel:+2348188822411"
                  className="hover:text-[#B00103] transition-colors"
                >
                  (234) 818 882 2411
                </a>
                <a
                  href="tel:+2348020989037"
                  className="hover:text-[#B00103] transition-colors"
                >
                  (234) 802 098 9037
                </a>
                <a
                  href="mailto:cyber@silex.com"
                  className="hover:text-[#B00103] transition-colors"
                >
                  cyber@silex.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="md:border-t md:border-[#590001] mt-3 pt-3 text-center text-[#590001] text-sm">
            © {new Date().getFullYear()} SilexSecure. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
