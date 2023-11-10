import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function SideBarHeader() {
  return (
    <section className="pt-[50px] px-11 space-y-3 flex flex-col">
      <span className="text-[22px] leading-[1.5em] font-extrabold ">Lette</span>
      <div className="heading3 text-lightgray">
        <span className="">뉴스레터 이름</span>
        <Link
          href={"/"}
          className="flex items-center  space-x-0.5 cursor-pointer"
        >
          <span>바로가기</span> <ArrowUpRight width={32} height={32} />
        </Link>
      </div>
    </section>
  );
}
