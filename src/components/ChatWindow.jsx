import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ChatWindow = ({ onClose }) => {
  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-lg z-50 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">Chat with Aman</span>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Chat Messages (demo content) */}
      <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2 bg-gray-50">
        <div className="text-left bg-gray-200 p-2 rounded-lg w-fit">Hi there! 👋</div>
        <div className="text-right bg-blue-100 p-2 rounded-lg w-fit ml-auto">Hello!</div>
      </div>

      {/* Input */}
      <div className="p-3 border-t flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="ml-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
