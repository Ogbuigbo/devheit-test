import React from "react";
import Outline from "../assets/outline";
import Elipse from "../assets/elipse";
import Blue from "../assets/blue";

function Overview() {
  return (
    <div className="md:flex md:flex-col xl:flex-row mt-8  w-full  gap-4 hidden">
      <div className="overview-container xl:w-[694px] w-  p-6 text-white rounded-2xl  pb-8">
        <div className="flex justify-between w-full items-center border-b pb-2">
          <h1 className="text-xl">Financial Overview</h1>
          <span className="flex gap-4 items-center">
            <p>View all campaigns</p>
            <Outline />
          </span>
        </div>

        <div className="flex mt-12 gap-8">
          <span>
            <p>Total Income</p>
            <p className="lg:text-2xl text-xl">$62,932</p>
          </span>
          <span>
            <p>Funds in Escrow</p>
            <p className="lg:text-2xl text-xl">$6,231</p>
          </span>
          <span>
            <p>Ave.Income Monthly</p>
            <p className="lg:text-2xl text-xl">$3,542</p>
          </span>
        </div>

        <div className="flex mt-12 gap-4 text-white">
          <p className="font-bold">January Summary:</p>
          <p className="flex gap-4">
            Total Fund in Escrow{" "}
            <span className="flex items-center gap-2">
              <Elipse />
              $350
            </span>
          </p>
          <p className="flex gap-4">
            Total Income{" "}
            <span className="flex items-center gap-2">
              <Elipse />
              $850
            </span>
          </p>
        </div>
      </div>

      <div className="border border-black rounded-2xl w-[340px] p-6 hidden xl:flex xl:flex-col">
        <div className="flex justify-between items-center border-b border-[#BFBFBF]">
          <h1 className="text-xl text-primary">Profile Information</h1>
          <Blue />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              src="https://tinypic.host/images/2024/10/04/Profile.png"
              alt="logo"
              className="w-[56px] h-[56px]"
            />
            <div className="">
              <h1 className="mb-4 font-bold text-primary">Olivia Jacobs Jacobs</h1>
              <div className="flex rounded-lg  bg-blue-300  text-sm w-[190px] mb-[10px]">
                <div className="bg-blue-600 w-[50px] p-[2px] rounded-tr-lg rounded-br-lg" />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm font-medium">15%</p>
        </div>
        <p className="mt-10 text-sm text-justify">
          Complete your profile with details showcasing your skills and
          personality. Stand out and attract more opportunities.
        </p>
      </div>
    </div>
  );
}

export default Overview;
