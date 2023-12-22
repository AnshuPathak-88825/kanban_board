import React from 'react';

import { MdOutlinePriorityHigh } from "react-icons/md";
import { CgBorderStyleDashed } from "react-icons/cg";

import High from '../PriorityIcons/High.jsx';
import Medium from '../PriorityIcons/Medium.jsx';
import Low from '../PriorityIcons/Low.jsx';

const priorities = [
    {
        id: 4,
        name: 'Urgent',
        icon: <MdOutlinePriorityHigh className='flex item-center justify-center border-2 border-[#fb773f] rounded-md bg-[#fb773f] text-white'/>,
    },
    {
        id: 3,
        name: 'High',
        icon: <High className='bg-transparent flex item-center justify-center  '/>,
    },
    {
        id: 2,
        name: 'Medium',
        icon: <Medium className='bg-transparent flex item-center justify-center  '/>,
    },
    {
        id: 1,
        name: 'Low',
        icon: <Low className='bg-transparent flex item-center justify-center '/>,
    },
    {
        id: 0,
        name: 'No Priority',
        icon: <CgBorderStyleDashed className='bg-transparent flex item-center justify-center '/>,
    }
];

// Exporting the priorities array for use in other components
export default priorities;