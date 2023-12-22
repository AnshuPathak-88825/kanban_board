"use client";
import { ImEqualizer } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";
const Navbar = ({
  selectedGrouping,
  setSelectedGrouping,
  selectedOrdering,
  setSelectedOrdering,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };
  const handleGroupingChange = (event) => {
    setSelectedGrouping(event.target.value);
    setIsOptionsVisible(false);
  };

  const handleOrderingChange = (event) => {
    setSelectedOrdering(event.target.value);
    setIsOptionsVisible(false);
  };
  return (
    <div className="w-full bg-white">
      <div className="w-full flex flex-row items-center justify-between px-[60px] py-[20px] ">
        <button className="flex flex-row justify-between items-center gap-2 px-[15px] py-[8px] border border-[#e7e8ea] rounded-lg shadow " onClick={handleButtonClick}>
          <ImEqualizer className="bg-white " />
          display
          <FaChevronDown className="bg-white " />
        </button>

        <button>l/d</button>
      </div>
      {isOptionsVisible && (
        <div className="z-1 absolute top-[75px] left-[60px] w-[300px] font-700 px-[20px] py-[15px] border-[1px] border-[#e7e8ea] rounded-lg bg-white text-[#a1a1a3]">
          <div className="flex flex-col bg-transparent gap-[15px]  ">
            <div className="flex flex-row items-center justify-between decoration-none font-[15px]">
              <div className="">
                Grouping
                <FaChevronDown className="z-1 absolute top-[25px] right-[26px] bg-transparent" />
              </div>
              <div className="min-w-[120px] bg-white z-2 rounded-md">
                <select className=" appearance-none w-full font-[15px] border-2 border-[#e7e8ea] rounded-lg px-[10px] py-[4px] text-black pointer bg-white" id="option1" value={selectedGrouping} onChange={handleGroupingChange}>
                  <option value="Status">Status</option>
                  <option value="User">User</option>
                  <option value="Priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between decoration-none font-[15px]">
              <div>
                Ordering
                <FaChevronDown className="z-1 absolute top-[75px] right-[26px] bg-transparent" />
              </div>
              <div className="min-w-[120px] bg-white z-2 rounded-md">
                <select   className="appearance-none w-full font-[15px] border-2 border-[#e7e8ea] rounded-lg px-[10px] py-[4px] text-black pointer bg-white" id="option1" value={selectedOrdering} onChange={handleOrderingChange}>
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>

                </select>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
