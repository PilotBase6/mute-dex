"use client";
import React from "react";

interface LoadButtonProps {
  children: React.ReactNode;
  loadMore: () => void;
}

const LoadButton = ({ children, loadMore }: LoadButtonProps) => {
  return (
    <button
      onClick={loadMore}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default LoadButton;
