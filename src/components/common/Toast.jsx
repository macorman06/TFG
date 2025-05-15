import React from 'react';

const Toast = ({ message, type, onClose }) => {
  const baseClasses = "fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white z-50 transition-opacity duration-300";
  const typeClasses = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500"
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {message}
    </div>
  );
};

export default Toast;