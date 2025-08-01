import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SectionToggle = ({ onScrollUp, onScrollDown }) => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      <button
        onClick={onScrollUp}
        className="backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-full 
                   hover:scale-110 transition transform shadow-md"
      >
        <FaChevronUp className="text-blue-400 text-xl" />
      </button>
      <button
        onClick={onScrollDown}
        className="backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-full 
                   hover:scale-110 transition transform shadow-md"
      >
        <FaChevronDown className="text-green-400 text-xl" />
      </button>
    </div>
  );
};

export default SectionToggle;
