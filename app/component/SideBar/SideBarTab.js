import React from "react";
import {
  MagicWand,
  Envelope,
  Pencil,
  Heart,
  User,
  Palette,
  Gear,
} from "@phosphor-icons/react/dist/ssr";
export default function SideBarTab() {
  return (
    <section className="px-8 space-y-[5px] menu mt-8">
      <div className="flex items-center p-4 space-x-3">
        <MagicWand width={28} height={28} className="text-lightgray" />
        <p>시작 도우미</p>
      </div>
      <div className="flex items-center p-4 space-x-3">
        <Envelope width={28} height={28} className="text-lightgray" />
        <p>뉴스레터</p>
      </div>
      <div className="flex items-center p-4 space-x-3">
        <Pencil width={28} height={28} className="text-lightgray" />
        <p>소개 페이지</p>
      </div>
      <div className="flex items-center p-4 space-x-3">
        <Heart width={28} height={28} className="text-lightgray" />
        <p>구독자</p>
      </div>
      <div className="flex items-center p-4 space-x-3">
        <User width={28} height={28} className="text-lightgray" />
        <p>관리자</p>
      </div>
      <div className="flex items-center p-4 space-x-3">
        <Palette width={28} height={28} className="text-lightgray" />
        <p>디자인</p>
      </div>
    </section>
  );
}
