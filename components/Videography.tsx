import React from 'react'

export const Videography = () => {
  return (
    <div className=' w-full  flex flex-col items-center justify-center  h-96 bg-cover relative bg-no-repeat bg-center bg-[url(/Broil.jpg)]
    '>Videography
        <video src="/chickens-2.mp4" className=' brightness-50 
        rounded absolute top-0 right-0 object-contain w-full bg-white 
        h-auto text-center  ' autoPlay muted loop>
        </video>
          <h1 className='text-green-500 font-semibold
          text-5xl
           absolute z-50
           text-center
           '>
            Shop with us and earn rewards to shop for free after ten Purchases
            for any of our organic products
          </h1>
          <button className="btn wi z-50 absolute bottom-5 w-48 text-white
           text-xl h-10 border-2 bg-transparent hover:border-green-600  ">Sign Up</button>
    </div>
  )
}
