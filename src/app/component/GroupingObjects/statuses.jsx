import React from 'react'

import { LuCircleDashed } from "react-icons/lu";
import { MdOutlineCircle } from "react-icons/md";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

//Array representing different statuses along with their icons
const statuses = [
    {
        title: 'Backlog',
        icon: <LuCircleDashed className='bg-transparent flex items-center justify-center w-[20px] h-[20px] font-bold text-[#e3e3e4]'/>
    },
    {
        title: 'Todo',
        icon: <MdOutlineCircle className='bg-transparent flex items-center justify-center w-[22px] h-[22px] font-bold text-[#e3e3e4] '/>
    },
    {
        title: 'In progress',
        icon: <FaCircleHalfStroke className='bg-transparent flex items-center justify-center w-[18px] h-[18px] border-2 border-[#f1c94b] rounded-full bg-[#f1c94b]'/>
    },
    {
        title: 'Done',
        icon: <FaCircleCheck className='bg-transparent flex items-center justify-center w-[19px] h-[19px] rounded-full bg-[#f4f5f8] text-[#5d6ad1]'/>
    },
    {
        title: 'Canceled',
        icon: <MdCancel className='bg-transparent flex items-center justify-center w-[21px] h-[21px]  text-[#94a2b2] '/>
    },
];

export default statuses