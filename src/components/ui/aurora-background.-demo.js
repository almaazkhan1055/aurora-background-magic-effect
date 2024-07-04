"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Switch from "react-switch";

export function AuroraBackgroundDemo() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOff, setIsOff] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setIsOff(!isOff);
    setChecked(!checked);
  };

  return (
    <AuroraBackground className={isDarkMode ? "dark" : ""}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <Switch
          onChange={handleClick}
          checked={checked}
          onColor="black"
          checkedIcon={
            <MdLightMode className="h-6 w-6 translate-x-0.5 translate-y-0.5 text-center text-yellow-100" />
          }
          uncheckedIcon={
            <MdDarkMode className="h-6 w-6 translate-x-0.5 translate-y-0.5 text-center text-yellow-100" />
          }
        />
      </motion.div>
    </AuroraBackground>
  );
}
