import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Link from "next/link";

const Services = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.21 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I provide
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.35 }}
        className="text-center text-3xl font-sans"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.49 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I provide the services including: HTML, CSS, JavaScript, React Js, Next
        Js, PHP, SQL, Java, C, Python.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.42, delay: 0.63 }}
        className="grid grid-cols-auto gap-6 my-10 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-xl px-8 py-12 cursor-pointer duration-500 hover:bg-lightHover hover:-translate-y-1 hover:shadow-black dark:hover:bg-darkHover/50 dark:border-white dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-l my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {description}
            </p>
            <Link href={link}>
              <span className="flex items-center gap-2 text-sm mt-5 dark:text-white">
                Read more
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
