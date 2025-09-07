import React from 'react';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-lg p-4 relative flex flex-col">
        
        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center text-black">
          My Resume
        </h2>

        {/* PDF Iframe */}
        <iframe
          src="/resume2.pdf"
          className="flex-1 w-full rounded-lg mb-4"
          title="Resume"
        />

        {/* Buttons at the bottom */}
        <div className="flex justify-end gap-4 mt-2">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:scale-105 transition text-sm"
          >
            Close
          </button>
          <a
            href="/resume2.pdf"
            download
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:scale-105 transition text-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
