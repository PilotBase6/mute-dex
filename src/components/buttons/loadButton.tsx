"use client";
import React from "react";

interface LoadButtonProps {
  children: React.ReactNode;
  loadMore: () => void;
  disabled?: boolean;
}

const LoadButton = ({ children, loadMore, disabled }: LoadButtonProps) => {
  return (
    <button
      onClick={loadMore}
      disabled={disabled}
      className={`${disabled ? "bg-gray-400": "animate-waves"} px-4 py-2 text-white font-semibold hover:bg-gradient-to-r from-blue-500 to-red-500 rounded-md transition-all duration-500 uppercase`}
    >
      {children}
    </button>
  );
};

export default LoadButton;
