"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view ->", isInView);
  }, [isInView]);
  return (
    <>
      <div style={{ height: "150vh" }} />

      <motion.div
        style={{ height: "100vh", background: "blue" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "green" : "red",
          transition: "Is background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
