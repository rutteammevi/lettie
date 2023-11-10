"use client";
import React, { useState } from "react";
import { Info } from "@phosphor-icons/react";

export default function OnboardingPage() {
  const [isNeeded, setIsNeeded] = useState(true);

  return (
    <div className="space-y-8 heading4 text-darkgray">
      <div className="pb-10 space-y-3 text-center ">
        <p className="menu text-lightgray">1/3</p>
        <p className="text-black text-heading1">어떤 이름으로 할까요?</p>
        <p className="text-darkgray text-menu">
          주소와 이름은 신중히 작성해주세요
        </p>
      </div>
      <div className="space-x-2.5 flex items-center">
        <span className="w-[200px]">페이지 주소</span>
        <div className="flex items-center space-x-2">
          <input
            className="border rounded-md w-[226px] text-body h-[54px] px-5 focus:outline-none placeholder:body placeholder:text-lightgray focus:placeholder-shown: "
            placeholder="입력하세요"
          ></input>
          <p>.lette.io</p>
        </div>
      </div>
      <div className="space-x-2.5 flex items-center">
        <span className="w-[200px]">뉴스레터 이름</span>
        <div className="flex items-center space-x-2">
          <input
            className="border rounded-md w-[349px] text-body h-[54px] px-5 focus:outline-none placeholder:body placeholder:text-lightgray "
            placeholder="입력하세요"
          />
        </div>
      </div>
      <div className="space-x-2.5 flex items-center pb-20">
        <p className="flex items-center w-[200px] space-x-2">
          <span>구독 기능 </span>
          <Info width={28} height={28} color="#ABABAB" />
        </p>
        <div className="flex items-center flex-auto menu ">
          <div
            className={`flex items-center h-[54px] cursor-pointer justify-center w-1/2 border hover:bg-white transition-all duration-300 ${
              isNeeded ? "bg-white border-brand" : "bg-backgray"
            } rounded-tl-md rounded-bl-md`}
            onClick={() => setIsNeeded(true)} // "필요해요"를 클릭하면 상태를 true로 변경합니다.
          >
            필요해요
          </div>
          <div
            className={`flex items-center h-[54px] cursor-pointer justify-center w-1/2 border transition-all duration-300 ${
              !isNeeded ? "bg-white border-brand" : "bg-backgray"
            } rounded-tr-md rounded-br-md`}
            onClick={() => setIsNeeded(false)} // "필요없어요"를 클릭하면 상태를 false로 변경합니다.
          >
            필요없어요
          </div>
        </div>
      </div>
      <button className="flex mx-auto border heading4 text-white rounded-lg items-center justify-center w-80 h-[72px] bg-brand hover:bg-hoverbrand transition-all duration-300">
        디자인 정하기
      </button>
    </div>
  );
}
