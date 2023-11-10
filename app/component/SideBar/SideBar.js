import React from "react";
import SideBarHeader from "./SideBarHeader";
import SideBarTab from "./SideBarTab";
import {
  MagicWand,
  Envelope,
  Pencil,
  Heart,
  User,
  Palette,
  Gear,
} from "@phosphor-icons/react/dist/ssr";
export default function SideBar() {
  return (
    <div className="w-80 h-[100vh] border-r">
      <SideBarHeader />
      <SideBarTab />
      <section className="px-8 space-y-[5px] menu mt-8">
        <div className="flex items-center p-4 mt-[66.5px] space-x-3">
          <Gear width={28} height={28} className="text-lightgray" />
          <p>설정</p>
        </div>
      </section>
    </div>
  );
}
