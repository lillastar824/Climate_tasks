import React from "react";
import Slide from "../components/Slide";
import CustomRadio from "../components/CustomRadio";
import { motion } from "framer-motion";
import ArrowIcon from "../styles/imges/arrow.png";
import Link from "next/link";
import Image from "next/image";

const one = () => {
  const parentVariant = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const childVariant = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };
  return (
    <div className="climate-main">
      <motion.div variants={parentVariant} animate={"visible"} initial="hidden">
        <Slide>
          {["One", "two", "three"].map((ele, index) => (
            <motion.div
              key={index}
              variants={childVariant}
              animate="visible"
              initial="hidden"
            >
              <CustomRadio name="radioBtn" label={ele} value={ele} />
            </motion.div>
          ))}
        </Slide>
      </motion.div>

      <Link href={"/two"}>
        <motion.div
          style={{ width: "100px", cursor: "pointer" }}
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.2, duration: 2 }}
        >
          <Image src={ArrowIcon} alt="arrow-icon" />
        </motion.div>
      </Link>
    </div>
  );
};

export default one;
