import logo from "../assets/logo.png";
import slogo from "../assets/slogo.png";
import des from "../assets/des.png";
import case3 from "../assets/case3.png";
import case4 from "../assets/case4.png";
import case5 from "../assets/case5.png";
import case6 from "../assets/case6.png";
import case7 from "../assets/case7.png";
import case8 from "../assets/case8.png";
import case9 from "../assets/case9.png";
import case10 from "../assets/case10.png";
import case11 from "../assets/case11.png";
import case12 from "../assets/case12.png";
import case13 from "../assets/case13.png";
import case14 from "../assets/case14.png";
import case15 from "../assets/case15.png";
import case16 from "../assets/case16.png";
import case17 from "../assets/case17.png";
import cas1 from "../assets/cas1.png";
import cas9 from "../assets/cas9.png";
import cas2 from "../assets/cas2.png";
import cas3 from "../assets/cas3.png";
import cas4 from "../assets/cas4.png";
import cas5 from "../assets/cas5.png";
import cas6 from "../assets/cas6.png";
import cas7 from "../assets/cas7.png";
import cas8 from "../assets/cas8.png";
import cas10 from "../assets/cas10.png";
import cas11 from "../assets/cas11.png";
import cas12 from "../assets/cas12.png";
import cas13 from "../assets/cas13.png";
import cas14 from "../assets/cas14.png";
import cas15 from "../assets/cas15.png";
import cas16 from "../assets/cas16.png";
import cas17 from "../assets/cas17.png";
import desktop from "../assets/desktop.png";
import irescue from "../assets/irescue.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Case = () => {
  const location = useLocation();

  const navlink = [
    { name: "Home", to: "/" },
    { name: "About", to: "https://bugbounty.defcomm.ng/" },
    { name: "Case Study", to: "/case-study" },
    { name: "Contact", to: "https://bugbounty.defcomm.ng/contact" },
  ];

  const projects = [
    {
      name: "Nigeria Police Force (NPF) Insurance",
      href: "https://www.npfinsurance.com/",
      description: `A robust digital platform designed to streamline insurance management for the NPF.\n\nWe focused on high level security and data integrity to handle sensitive personnel records and claims processing efficiently.`,
      image: des,
      img: cas1,
      alt: "NPF Insurance",
    },
    {
      name: "Irescue",
      href: "https://irescue.ng/",
      description: `A mission critical emergency response and rescue platform.\n\nThe development prioritized speed, mobile responsiveness, and intuitive navigation to ensure users can access life saving services instantly during crises.`,
      image: irescue,
      img: cas2,
      alt: "iRescue",
    },
    {
      name: "East-West Energy",
      href: "https://eng.eastwest.cn/",
      description: `An international corporate site built to bridge regional markets.\n\nThe project required a multilingual, high performance interface that maintains brand consistency across different regulatory and digital environments.`,
      image: case3,
      img: cas3,
      alt: "East-West Energy",
    },
    {
      name: "Fresh From Naija",
      href: "https://irescue.ng/",
      description: `A modern, e-Commerce web application designed for content discovery.\n\nThis project showcases our ability to deploy cutting edge frameworks for real time content updates and high user engagement.`,
      image: case4,
      img: cas4,
      alt: "Fresh From Naija",
    },
    {
      name: "Justina World Life Foundation",
      href: "https://justinaworldlifefoundation.org/",
      description: `A mission driven website designed to drive engagement and donations. \n\nWe focused on emotional storytelling through layout and a secure, transparent donation pathway to build trust with global donors.`,
      image: case5,
      img: cas5,
      alt: "Justina World Life Foundation",
    },
    {
      name: "Etiquette Management School ",
      href: "https://etiquettemanagementschool.com/",
      description: `A sophisticated educational portal designed to mirror the refined nature of the brand. \n\nWe integrated a seamless user journey that transitions visitors from course exploration to enrollment.`,
      image: case6,
      img: cas6,
      alt: "Etiquette Management School",
    },
    {
      name: "DICON X-Shield  ",
      href: "https://www.xshield.ng/",
      description: `Developed for the Defence Industries Corporation of Nigeria (DICON), this project involved creating a digital interface for advanced defense technology. \n\nThe focus was on reflecting technical precision and institutional authority through a clean, secure architecture.`,
      image: case7,
      img: cas7,
      alt: "DICON X-Shield ",
    },
    {
      name: "Rotterdam School of Business and Public Policy (RSBPP)",
      href: "https://rsbpp.nl/",
      description: `Silex Secure Lab developed a custom digital platform for the Rotterdam School of Business and Public Policy (RSBPP), featuring a WordPress based website with a user friendly design and optimized performance. \n\n The live learning system was custom-built using React and Laravel, delivering seamless online video classes and an enhanced, high quality user experience.`,
      image: case8,
      img: cas8,
      alt: "Rotterdam School of Business and Public Policy (RSBPP)",
    },
    {
      name: "American Business Council",
      href: "https://www.abcnig.com/",
      description: `Silex Secure Lab redesigned the American Business Council website, delivering a secure, high performance platform with improved UI/UX, accessibility, and cross-device functionality. \n\n They also implemented comprehensive SEO strategies to boost visibility and traffic, while ensuring strong security, fast performance, and scalability for future growth.`,
      image: case9,
      img: cas9,
      alt: "American Business Council",
    },
    {
      name: "Rensan & Co",
      href: "https://rensan.co.uk/industries/service/",
      description: `A premium UK Consulting firm requiring a minimalist, high impact aesthetic to showcase structural excellence. \n\nWe optimized a media centric portfolio system to demonstrate technical precision and luxury project management.`,
      image: case10,
      img: cas10,
      alt: "Rensan & Co",
    },
    {
      name: "Lead with Levity (Truth or Dare)",
      // href: "https://rensan.co.uk/industries/service/",
      description: `A corporate culture gamification tool requiring an engaging, psychology led interface for organizational development. \n\nWe executed a dynamic interactive sequence to foster psychological safety and team cohesion through digital play.`,
      image: case11,
      img: cas11,
      alt: "Lead with Levity (Truth or Dare)",
    },
    {
      name: "CASAF (Child & Adolescent Survivors of Abuse Foundation)",
      href: "https://casaf.org.ng/",
      description: `A humanitarian advocacy portal requiring a compassionate, highly secure digital environment for sensitive social impact. \n\nWe centralized a resource driven knowledge base to facilitate global outreach and provide critical support infrastructure.`,
      image: case12,
      img: cas12,
      alt: "CASAF (Child & Adolescent Survivors of Abuse Foundation)",
    },
    {
      name: "Kigali International Financial Centre (KIFC)",
      href: "https://kifc.rw/",
      description: `An institutional investment gateway requiring a prestigious, high performance design to attract international financial stakeholders. \n\nWe engineered a scalable data architecture to support complex regulatory transparency and cross border capital networking.`,
      image: case13,
      img: cas13,
      alt: "Kigali International Financial Centre (KIFC)",
    },
    {
      name: "Arik Air",
      href: "https://arikair.com/",
      description: `A premier West African aviation carrier requiring a high availability digital portal for mission critical passenger logistics. \n\nWe engineered an integrated booking, Group Booking, Reservation and tracking architecture to streamline global reservations and real time flight monitoring. \n\nWe were also responsible for building the Job Recruitment Portal for the airline.`,
      image: case14,
      img: cas14,
      alt: "Arik Air",
    },
    {
      name: "Sustainable Procurement, Environmental and Social Standards Enhancement (SPESSE)",
      // href: "",
      description: `A World Bank initiative requiring a transparent, data centric oversight framework. \n\nWe developed a comprehensive Monitoring and Evaluation (M&E) ecosystem to track institutional performance and ensure multi sectoral accountability through The National universities commission (NUC).`,
      image: case15,
      img: cas15,
      alt: "Sustainable Procurement, Environmental and Social Standards Enhancement (SPESSE)",
    },
    {
      name: "NG Eagle",
      // href: "",
      description: `An emerging next-generation domestic carrier requiring a streamlined, user centric digital storefront for the Nigerian aviation market. \n\nWe deployed a robust booking and real-time tracking engine to enhance passenger autonomy and operational reliability across regional routes.`,
      image: case16,
      img: cas16,
      alt: "NG Eagle",
    },
    {
      name: "ONE",
      // href: "",
      description: `Silex Secure Lab developed a State of Primary Health Care Service Delivery Portal to support nationwide health system transparency, monitoring, and decision making. \n\nThe portal powers the State of Primary Health Care Service Delivery Report an advocacy and accountability tool developed by ONE, National Advocates for Health, Nigeria Health Watch, Public & Private Development Centre (PPDC), and other partners.`,
      image: case17,
      img: cas17,
      alt: "ONE",
    },

    // just keep adding objects here for all 15...
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#590001] w-full h-fit">
      {/* ================= HEADER ================= */}
      <div className="fixed bg-[#B00103] w-full z-100 rounded-br-[100px]">
        <div className="sticky top-3.5 z-90 flex justify-center pointer-events-none">
          <header className="pointer-events-auto flex w-[90%] md:w-fit items-center justify-between backdrop-blur-md bg-[#B00103]/20 border border-gray-300 rounded-full gap-6 px-8 py-3">
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
                    ${
                      isActive
                        ? "border border-white bg-white/10"
                        : "hover:text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </header>

          {/* Mobile Dropdown */}
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
                    ${
                      isActive
                        ? "bg-white/20 font-semibold"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <h2 className="text-3xl md:text-5xl pl-10 font-black text-white mt-7 mb-5">
          Case Study
        </h2>
      </div>

      {/* ================= MAIN ================= */}
      <div className="bg-[#590001] relative w-full rounded-br-[150px] md:pt-54 pt-40 pb-0 pl-0 md:pl-10">
        <div className="w-full flex flex-col gap-40 px-5 md:px-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-10"
            >
              {/* LEFT TEXT */}
              <div className="w-full md:w-1/2">
                <a
                  href={project.href}
                  target="_blank"
                  className="text-3xl font-bold text-white hover:underline transition-all duration-300"
                >
                  {project.name}
                </a>
                <p className="mt-6 text-2xl text-white whitespace-pre-line">
                  {project.description}
                </p>
              </div>
              {/* RIGHT IMAGE */}
              <div className="w-full md:w-1/2 flex justify-end pr-0 md:pr-10">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-[440px] h-[250px] hidden md:block"
                />
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-[440px] h-[250px] md:hidden block"
                />
              </div>
            </div>
          ))}
        </div>

        {/* fixed monitor screen */}
        <div className="md:fixed hidden md:block absolute top-52 right-8  z-50">
          <img
            src={desktop}
            alt="Desktop Monitor"
            className="w-[460px] h-[350px]"
          />
        </div>

        {/* ===================== FOOTER ===================== */}
        <div className="w-full justify-start items-center flex mt-20">
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
                  <Link
                    to="/"
                    className="hover:text-[#B00103] transition-colors"
                  >
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
    </div>
  );
};

export default Case;
