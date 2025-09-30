import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const Img = () => {
    

    return (
        <motion.div className="grid grid-rows-2 grid-cols-2 gap-[50px]">
            <motion.div className="w-[100px] h-[50px] row-span-2 bg-white">1</motion.div>
            <motion.div className="w-[140px] h-[100px] bg-white">2</motion.div>
            <motion.div className="w-[140px] h-[100px] bg-white">2</motion.div>
        </motion.div>
    );
};

export default Img;
