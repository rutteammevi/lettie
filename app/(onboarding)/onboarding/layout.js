import React from "react";

export default function OnboardingLayout({ children }) {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      {children}
    </div>
  );
}
