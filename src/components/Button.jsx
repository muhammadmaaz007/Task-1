import React from "react";
import clsx from "clsx";

const Button = (maaz) => {
  return (
    <button
      className= "bg-black text-white rounded-md px-6 py-2"
    >
      {maaz.name}
    </button>
  );
};

export default Button;
