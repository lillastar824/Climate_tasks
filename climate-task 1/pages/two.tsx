import React from "react";
import Slide from "../components/Slide";
import CustomRadio from "../components/CustomRadio";
import { motion } from "framer-motion";
import ArrowIcon from "../styles/imges/arrow.png";
import Link from "next/link";
import Image from "next/image";

const one = () => {
  return (
    <div className="climate-main">
      <motion.div
        initial={{ opacity: 1, y: "-30vh" }}
        animate={{ opacity: 0, y: 0 }}
        transition={{ delay: 1, duration: 5 }}
      >
        <Slide>
          <CustomRadio
            name="radioBtn"
            label={"Electricity is measured in units called watts"}
            value="one"
          />
          <CustomRadio name="radioBtn" label={"Second One"} value="two" />
          <CustomRadio name="radioBtn" label={"Third One"} value="third" />
        </Slide>
      </motion.div>

      <Link href={"/one"}>
        <motion.div
          style={{ width: "100px", cursor: "pointer" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 5 }}
        >
          <Image src={ArrowIcon} alt="arrow-icon" />
        </motion.div>
      </Link>
    </div>
  );
};

export default one;
