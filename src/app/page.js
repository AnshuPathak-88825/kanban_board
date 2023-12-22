"use client"
import Image from 'next/image'

import Navbar from './component/Navbar'
import Body from './component/Body'
import { useState, useEffect } from 'react';
export default function Home() {
  const [selectedGrouping, setSelectedGrouping] = useState(localStorage.getItem('selectedGrouping') || 'Status');
  const [selectedOrdering, setSelectedOrdering] = useState(localStorage.getItem('selectedOrdering') || 'Priority');
  useEffect(() => {
    localStorage.setItem('selectedGrouping', selectedGrouping);
    localStorage.setItem('selectedOrdering', selectedOrdering);
  }, [selectedGrouping, selectedOrdering]);
 
  return (
    < >
    {/* <div className='bg-black w-full' > hello</div> */}
      <Navbar selectedGrouping={selectedGrouping} setSelectedGrouping={setSelectedGrouping} selectedOrdering={selectedOrdering} setSelectedOrdering={setSelectedOrdering}/>
      <Body selectedGrouping={selectedGrouping} setSelectedGrouping={setSelectedGrouping} selectedOrdering={selectedOrdering} setSelectedOrdering={setSelectedOrdering}/>

    </>
  )
}
