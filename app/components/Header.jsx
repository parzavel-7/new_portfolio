import { assets, socialLinks, toolsData } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center ">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="flex items-center justify-center mt-20"
      >
        <Image
          src={assets.profile_img}
          alt="profile_image"
          className="rounded-full w-32 "
        />
      </motion.div>

      <motion.h3
        className="flex items-center gap-2 text-xl  md:text-2xl mb-3 font-Ovo "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.21 }}
      >
        Hi! I'm Suraj Ganesh
        <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo "
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        Frontend web developer from Nepal.
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.49 }}
      >
        I am a frontend web developer from Jhapa, Nepal with 2 years of
        experience in multiple fields.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black"
        >
          Contact me
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_dark_contact
                : assets.right_arrow_white
            }
            alt="right"
            className="w-4 dark:text-black"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.84 }}
          href="/my_resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-white dark:bg-[#1c1c1c]"
        >
          My Resume{" "}
          <Image
            src={isDarkMode ? assets.download_white : assets.download_icon}
            alt=" "
            className="w-4"
          />
        </motion.a>
      </div>

      <div className="mt-4">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.91 }}
          className="my-4 text-black font-Ovo dark:text-white/80"
        >
          Visit me on
        </motion.h4>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex items-center gap-3 sm:gap-5"
        >
          {socialLinks.map(({ icon, link }, index) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={index}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-full cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:bg-white/90 dark:hover:shadow-white/20"
            >
              <a target="_blank" href={link}>
                <Image src={icon} alt="tool" className="w-5 sm:w-7" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Header;

