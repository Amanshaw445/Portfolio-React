import React from 'react';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-lg p-4 relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-red-500 text-2xl z-50"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center text-black">
          My Resume
        </h2>

        {/* PDF Iframe */}
        <iframe
          src="/resume2.pdf"
          className="flex-1 w-full rounded-lg"
          title="Resume"
        />

        {/* Download Button */}
        <a
          href="/resume2.pdf"
          download
          className="mt-4 text-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition text-sm"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
