'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { GiChicken, GiCow } from "react-icons/gi";
import { GiGoat } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";


const Catergorybadge = () => {
  const route = useRouter()
  return (
    <div className='p-1 pb-3 bg-white h-auto w-full font-medium flex flex-wrap justify-center gap-1 text-sm text-black'>
       <div onClick={()=>(route.push(`/category/beef`))} className="bg-white relative hover:brightness-75 cursor-pointer border border-black w-36 sm:w-20 sm:h-20 h-36 shadow-xl shadow-black flex justify-center items-center rounded-lg">
      <GiCow color='black' className='w-36  sm:w-16 sm:h-16  h-36 object-cover bg-white rounded-lg'/>
      <span  className="absolute text-yellow-600 top-2 left-16 sm:top-1 sm:left-4 font-semibold sm:text-sm text-xl z-50">Beef</span>
       </div>
       <div onClick={()=>(route.push(`/category/beef`))} className="bg-white relative hover:brightness-75 cursor-pointer border border-black w-36 sm:w-20 sm:h-20 h-36 shadow-xl shadow-black flex justify-center items-center rounded-lg">
      <GiGoat color='black' className='w-36 sm:w-16 sm:h-16  h-36 object-cover bg-white rounded-lg'/>
      <span className="absolute text-yellow-600 top-2 left-16 sm:top-0 sm:left-4 font-semibold sm:text-sm text-xl z-50">Goat</span>
       </div>
       <div className="bg-white relative hover:brightness-75 cursor-pointer border border-black w-36 sm:w-20 sm:h-20 h-36 shadow-xl shadow-black flex justify-center items-center rounded-lg">
      <GiTomato onClick={()=>(route.push(`/category/vegetable`))} color='black' className='w-36 sm:w-16 sm:h-16   h-36 object-cover bg-white rounded-lg'/>
      <span className="absolute text-yellow-600 top-2  sm:top-1 sm:left-0 truncate overflow-x-auto font-semibold sm:text-sm text-xl z-50">Vegetables</span>
       </div>
       <div className="bg-white relative hover:brightness-75 cursor-pointer border border-black w-36 sm:w-20 sm:h-20 h-36 shadow-xl shadow-black flex justify-center items-center rounded-lg">
      <GiChicken onClick={()=>(route.push(`/category/chicken`))} color='black' className='w-36 sm:w-16 sm:h-16  h-36 object-cover bg-white rounded-lg'/>
      <span className="absolute text-yellow-600 top-2 left-12 sm:top-1 sm:left-4 font-semibold sm:text-sm text-xl z-50">Chicken</span>
       </div>
    </div>
  )
}

export default Catergorybadge