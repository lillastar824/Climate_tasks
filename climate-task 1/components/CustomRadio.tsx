import { motion } from "framer-motion";
const childVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.4,
      staggerChildren: 0.5,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
};
function CustomRadio(props: any) {
  return (
    <motion.div
      className="radio-main"
      variants={childVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.label variants={childVariant} initial="hidden" animate="visible">
        <input type="radio" {...props} />
        {props.label}
      </motion.label>
    </motion.div>
  );
}

export default CustomRadio;
