import React from 'react'

const Button = ({ text, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={` text-white text-center px-4 py-2 rounded-lg ${className}`}
      >
        {text}
      </button>
    );
  };
  export default Button;