"use client";

import React from "react";

type BackdropProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const DarkBackdrop: React.FC<BackdropProps> = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Optional: adds a semi-transparent black background
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up to the backdrop
      >
        {children}
      </div>
    </div>
  );
};

export default DarkBackdrop;
