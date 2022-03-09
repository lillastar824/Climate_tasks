import Image from "next/image";
import Animation from "../components/Animation";
import { motion } from "framer-motion";
import ArrowIcon from "../styles/imges/arrow.png";
import Link from "next/link";
function HomePage() {
  return (
    <>
      <motion.div
        className="climate-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2 }}
      >
        <Animation />
        <Link href={"/one"}>
          <motion.div
            style={{ width: "100px", cursor: "pointer" }}
            initial={{ x: "-10vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 2 }}
          >
            <Image src={ArrowIcon} alt="arrow-icon" />
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}

export default HomePage;
