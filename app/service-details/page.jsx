"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import { useEffect } from "react";

const services = [
  {
    title: "Web Design",
    id: "web-design",
    description:
      "Developing responsive and modern websites with a focus on seamless user experiences. Expertise in creating portfolio, business, and e-commerce sites using HTML, CSS, JavaScript, React, and Next.js. Skilled in optimizing performance, implementing SEO best practices, and ensuring cross-browser compatibility. Committed to delivering high-quality web solutions tailored to client needs.",
    image: assets.web_development,
    link: "/projects/web-design",
  },
  {
    title: "Mobile App Development",
    id: "mobile-app",
    description:
      "Designing and developing sleek, user-friendly mobile apps for Android and iOS. Skilled in Flutter and React Native for cross-platform compatibility. Expertise in leveraging Firebase and other backend-as-a-service solutions for data storage, authentication, and serverless functions. Proficient in using APIs, integrating third-party libraries, testing, and debugging to ensure high-quality app performance and user experience.",
    image: assets.mobile_app,
    link: "/projects/mobile-apps",
  },
  {
    title: "UI/UX Design",
    id: "ui-ux",
    description:
      "Creating intuitive and engaging user interfaces and experiences. Focus on user-centered design using tools like Figma, Adobe XD, and Framer. Expertise in researching, prototyping, and testing to ensure seamless user experiences. Skilled in creating low and high-fidelity wireframes, user flow diagrams, and interactive prototypes to communicate design ideas effectively. Proficient in designing for accessibility, responsiveness, and usability. Committed to staying up-to-date with the latest design trends and best practices.",
    image: assets.ui_ux_design,
    link: "/projects/ui-ux",
  },
  {
    title: "Graphics Design",
    id: "graphics",
    description:
      "Designing high-quality visuals including logos, banners, social media posts, and marketing materials using Adobe Photoshop, Illustrator, and Canva. Expertise in creating vector graphics, infographics, and typography. Skilled in designing for web, print, and digital mediums. Proficient in color theory, composition, and visual hierarchy to ensure visually appealing designs that communicate effectively.",
    image: assets.graphics_design,
    link: "/projects/graphics",
  },
];

const ServiceDetails = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <div className="w-full ">
      <div className="fixed top-0 w-full z-10 ">
        <div className="container mx-auto p-4 flex justify-between dark:bg-[#1c1c1c]">
          <a href="/" className="ml-5">
            <Image
              src={isDarkMode ? assets.return_white : assets.return_black}
              alt="return"
              width={30}
              height={30}
            />
          </a>
          <button
            className="bg-transparent border-2 border-gray-400 mr-5 rounded-full px-4 py-2 hover:bg-gray-200 transition dark:hover:bg-black/80"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? (
              <Image
                src={assets.sun_icon}
                alt="dark mode"
                width={25}
                height={25}
              />
            ) : (
              <Image
                src={assets.moon_icon}
                alt="light mode"
                width={25}
                height={25}
              />
            )}
          </button>
        </div>
      </div>
      {services.map((service, index) => (
        <section
          id={service.id}
          key={index}
          className={`mt-20 scroll-mt-20 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white text-gray-900 border border-gray-400 p-10 rounded-lg shadow-black m-10 dark:bg-gray-800 dark:text-white dark:border-gray-600`}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {service.title}
            </h2>
            <p className="text-lg md:text-xl mb-6">{service.description}</p>
            <a
              href={service.link}
              className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-black/70 transition dark:bg-white dark:text-black dark:hover:bg-white/70"
            >
              View Projects
              <Image
                src={isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark}
                alt="arrow"
                className="w-3 inline-block ml-2"
              />
            </a>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] shadow-lg rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} Preview`}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServiceDetails;
