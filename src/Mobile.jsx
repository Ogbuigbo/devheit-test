import React from "react";
import Elipse from "../assets/mobile";

function Mobile() {
  return (
    <div className="bg-[#E7F5FF] my-8 md:hidden m-6 p-4 flex flex-col gap-4 justify-center items-center rounded-lg">
      <div className="relative">
        <Elipse />
        <div className="absolute top-3 right-2">
          <p className="text-primary font-bold">75%</p>
          <p className="text-primary text-[8px]">Complete</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm font-bold">Profile Information</h1>
        <p className="text-center text-[#737373] text-[10px]">
          Enhance your chances of selection by completing your profile – a fully
          detailed profile attracts more opportunities!
        </p>

        <button className="bg-primary text-white py-3 px-6 mt-8 text-[10px] w-full rounded-md">
          Complete my Profile
        </button>
      </div>
    </div>
  );
}

export default Mobile;
