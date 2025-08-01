import React from "react";

const ChatWindow = () => {
  const handleConnectClick = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" }); // Open Botpress chat
    }
  };

  return (
    <div>
      <button
        onClick={handleConnectClick}
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition transform hover:scale-105"
      >
        Connect Me
      </button>
    </div>
  );
};

export default ChatWindow;
