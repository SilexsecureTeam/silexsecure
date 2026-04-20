import logo from "../assets/logo.png";
import slogo from "../assets/slogo.png";
import des from "../assets/des.png";
import irescue from "../assets/irescue.png";
import { Link, useLocation } from "react-router-dom";

const Case = () => {
  const location = useLocation();
  const navlink = [
    { name: "Home", to: "/" },
    { name: "About", to: "https://bugbounty.defcomm.ng/" },
    { name: "Case Study", to: "/case-study" },
    { name: "Contact", to: "https://bugbounty.defcomm.ng/contact" },
  ];

  return (
    <div className="bg-[#590001] w-full h-fit ">
      {/* FIXED HEADER - placed outside the gradient */}
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
      <div className="bg-[#590001] w-full h-full rounded-br-[150px] py-20 pl-5 md:pl-10">
        {/* hero section - NPF */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 relative">
          {/* left text - scrolls normally */}
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl font-bold underline text-white">
              Nigeria Police Force (NPF) Insurance
            </h2>
            <p className="mt-10 text-2xl w-4/5 text-white">
              A robust digital platform designed to streamline insurance
              management for the NPF. <br /> <br /> We focused on high level
              security and data integrity to handle sensitive personnel records
              and claims processing efficiently.
            </p>
          </div>

          {/* FIXED HERO IMAGE - only on desktop */}
          <div className="w-full md:w-2/5">
            <div className="md:sticky md:top-28 z-10">
              {" "}
              {/* ← only the image stays fixed on md+ */}
              <img src={des} alt="Design" className="w-full h-110" />
            </div>
          </div>
        </div>

        {/* next - iRescue */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 py-20 relative">
          {/* left text - scrolls normally */}
          <div className="w-full md:w-3/5">
            <h2 className="text-4xl font-bold underline text-white">iRescue</h2>
            <p className="mt-10 text-2xl w-4/5 text-white">
              A mission critical emergency response and rescue platform. <br />{" "}
              <br />
              The development prioritized speed, mobile responsiveness, and
              intuitive navigation to ensure users can access life saving
              services instantly during crises.
            </p>
          </div>

          {/* FIXED HERO IMAGE - only on desktop */}
          <div className="w-full md:w-2/5">
            <div className="md:sticky md:top-28 z-10">
              {" "}
              {/* ← only the image stays fixed on md+ */}
              <img src={irescue} alt="Design" className="w-full h-110" />
            </div>
          </div>
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
    </div>
  );
};

export default Case;
