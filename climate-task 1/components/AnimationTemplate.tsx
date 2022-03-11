import React from "react";
import { motion } from "framer-motion";

const AnimationTemplate = ({ children }: any) => {
  const motionVariants = {
    initial: {
      opacity: 0,
      x: "-10vw",
    },
    in: {
      opacity: 1,
      x: 0,
    },
  };

  const motionTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.4,
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={motionVariants}
      transition={motionTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationTemplate;

// function template({ rotate }: any) {
//   return `rotate(${rotate}))`;
// }
