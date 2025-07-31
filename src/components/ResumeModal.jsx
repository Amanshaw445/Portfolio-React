import React from 'react';

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-lg shadow-lg p-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center text-black">My Resume</h2>

        <iframe
          src="/resume.pdf"
          width="100%"
          height="100%"
          className="rounded-lg"
          title="Resume"
        />

        <a
          href="/resume.pdf"
          download
          className="mt-4 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition text-sm"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
