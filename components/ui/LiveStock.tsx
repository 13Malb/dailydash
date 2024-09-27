import React from 'react'

const LiveStock = () => {
  return (
    <div className='bg-white relative p-4 text-pretty text-center text-white flex flex-col'>
        <h1 className="text-black font-semibold  text-pretty text-center text-2xl ">Live Chicken and Slaughted according to your specification</h1>
      
        <video src="/chickens-1.mp4" className='border-2 object-cover m-2 ring-2 ring-slate-200 hover:shadow-blue-950 transition-shadow ease-out delay-75 shadow-xl shadow-black brightness-50 bg-black border-red-950 rounded-full size-60' autoPlay muted loop/>
        <video src="/chickens-2.mp4" className='border-2 object-cover m-2 ring-2 ring-slate-200 hover:shadow-blue-950 transition-shadow ease-out delay-75 shadow-xl shadow-black brightness-50 bg-black border-red-950 rounded-full size-60' autoPlay muted loop/>
    </div>
  )
}

export default LiveStock