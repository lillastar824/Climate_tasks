import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: { repeat: Infinity, repeatDelay: 3 },
  },
};
const Icon = ({ icon, handleIconClick }: any) => {
  return (
    <motion.div
      className="icon-main"
      variants={iconVariants}
      initial="hidden"
      animate="visible"
    >
      <Image src={icon} alt="icons" onClick={handleIconClick} />
    </motion.div>
  );
};

export default Icon;
