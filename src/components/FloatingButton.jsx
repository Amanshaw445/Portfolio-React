import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label="Open Chat"
      initial={{ borderRadius: "2rem", y: -100, opacity: 0 }}
      animate={{ borderRadius: "50%", y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-400 to-blue-500 text-white w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition"
    >
      <FaPaperPlane size={20} />
    </motion.button>
  );
};

export default FloatingButton;
