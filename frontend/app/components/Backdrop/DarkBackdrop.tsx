"use client";

import React from "react";

type BackdropProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const DarkBackdrop: React.FC<BackdropProps> = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90"
      onClick={onClose}
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
