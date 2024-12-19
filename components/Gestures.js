"use client";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
        >
          Click Me!
        </motion.button>
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          style={{ backgroundColor: "red" }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
