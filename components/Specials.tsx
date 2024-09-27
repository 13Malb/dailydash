
import React from 'react'
import Image from 'next/image'


type dataFeed = [{
  "id":String,
  "name":String,
  "info": String,
  "image":String,
  "price":String
 
 }]

 type obj = {
  "id":String,
  "name":String,
  "info": String,
  "image":String,
  "price":String
 }

const Specials = ({response}:dataFeed | any) => {
     
 
  return (
    <div className='w-full bg-black h-auto flex flex-col items-center py-10' >
        <label className="text-xl text-white pb-3 lg:text-3xl">Curated Deals For You</label>
          <div className="w-full h-14 m-5 flex flex-row flex-wrap lg:gap-3 gap-1 justify-center items-center p-1">
           
            {response.map((id :obj | any)=>(
            <span key={id.id} className="btn w-20 lg:w-40 font-semibold font-sans text-center text-pretty truncate text-ellipsis text-black bg-white hover:text-white">{id.name}</span>

            ))}
            </div>
            <div className='w-full p-2 h-auto flex flex-row flex-wrap gap-2 items-center justify-center'>

            <div className="bg-white rounded-full h-20 w-20 lg:w-32 lg:h-32 border-2 hover:shadow-xl shadow-green-600 cursor-pointer hover:border-green-500"></div>   
            <div className="bg-white rounded-full h-20 w-20 lg:w-32 lg:h-32"></div>   
            <div className="bg-white rounded-full h-20 w-20 lg:w-32 lg:h-32"></div>   
            <div className="bg-white rounded-full h-20 w-20 lg:w-32 lg:h-32"></div>   
            <div className="bg-white rounded-full h-20 w-20 lg:w-32 lg:h-32"></div>
            <Image
      src="/chicken-breast.jpg"
      className='rounded-full size-20 lg:size-36 cursor-pointer  hover:border-2 hover:border-green-600'
      alt="Picture of the author"
      width={100}
      height={100}

    />
               
                      

            </div>
    </div>
  )
}

export default Specials