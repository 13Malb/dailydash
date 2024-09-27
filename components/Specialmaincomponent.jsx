import { Plus } from 'lucide-react'
import React from 'react'

const Specialmaincomponent = () => {
  return (
    <>
    <div className="bg-white h-64 rounded mb-1 w-full flex justify-center items-center">
      <h1 className="  text-red-800 text-2xl font-extrabold">30% OFF</h1>
    </div>
    <div className="bg-black p-1 w-full flex flex-row flex-wrap justify-center  gap-2 h-screen">
      <div className="bg-white p-1 w-52 h-64 rounded">
        <div className="w-full h-40 rounded bg-black"></div>
        <div className="w-full flex relative flex-col gap-0 border shadow-xl rounded mt-1 p-1 h-20">
          <span className='p-1 w-full h-5 text-pretty font-semibold z-50  text-black' >chicken breast 5kg</span>
          <span className='p-1 font-black shadow-lg w-20 rounded mb-1 brightness-50 text-pretty text-green-500'><strong>R</strong> 235.00</span>
          <span className="text-red-800 bg-black p-1 w-20 rounded  text-sm line-through"><strong className='text-white'>R</strong> 316.00</span>
          <span className='size-10 flex justify-center items-center cursor-pointer hover:opacity-50 hover:bg-green-500 rounded-full text-black absolute right-1 border-2 border-black bottom-1'>
            <Plus/>
          </span>
        </div>
      </div>
      <div className="bg-white p-1 w-52 h-64 rounded">
        <div className="w-full h-40 rounded bg-black"></div>
        <div className="w-full flex relative flex-col gap-0 border shadow-xl rounded mt-1 p-1 h-20">
          <span className='p-1 w-full h-5 text-pretty font-semibold z-50  text-black' >chicken breast 5kg</span>
          <span className='p-1 font-black shadow-lg w-20 rounded mb-1 brightness-50 text-pretty text-green-500'><strong>R</strong> 235.00</span>
          <span className="text-red-800 bg-black p-1 w-20 rounded  text-sm line-through"><strong className='text-white'>R</strong> 316.00</span>
          <span className='size-10 flex justify-center items-center cursor-pointer hover:opacity-50 hover:bg-green-500 rounded-full text-black absolute right-1 border-2 border-black bottom-1'>
            <Plus/>
          </span>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Specialmaincomponent