import { motion } from 'framer-motion'
import { useState } from 'react';

const Box = () => {
  const handleClick = (e: React.MouseEvent) => {
    console.log("offsetX:", e.nativeEvent.offsetX);
    console.log("offsetY:", e.nativeEvent.offsetY);
  };

  const [st, setSt] = useState <Boolean> (false);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onTapStart={() => console.log("Bắt đầu nhấn")}
      onTap={() => console.log("Tap thành công")}
      onTapCancel={() => console.log("Tap bị hủy")}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      Nhấn vào tôi
    </motion.button>

  );
};

export default Box;