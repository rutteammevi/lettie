import React from "react";
import SideBar from "../component/SideBar/SideBar";

export default function layout({ children }) {
  return (
    <div className="max-w-[1200px] flex space-x-10  ">
      <SideBar />
      {children}
    </div>
  );
}
