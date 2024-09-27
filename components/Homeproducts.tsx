'use client'

import {  MdDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { IoIosAddCircle } from "react-icons/io";
import { useRouter } from "next/navigation";


type dataFeed = [{
    "id":String,
    "name":String,
    "info": String,
    "image":String,
    "price":String
    
  }]



  

const Homeproducts = ({response}:dataFeed | any) => {
    
      const router = useRouter()
    
  return (
    <div className='bg-white p-2 h-auto text-black text-pretty'>
        <div className="p-1 flex m-1 flex-row gap-1 justify-center flex-wrap ">
            {response.map((item:dataFeed | any)=>(
                 <span key={item.id} className="p-1 border border-black text-white sm:w-24 sm:h-7 text-ellipsis  cursor-pointer hover:opacity-50 hover:bg-transparent
                 hover:text-black truncate bg-black rounded text-sm font-light">{item.name}</span>
            ))}
        </div>
        <div className="p-2 btn  text-wrap truncate glass rounded-md text-white sm:hover:text-xl mt-1 bg-green-600 text-center w-full">
            Create an account and get points on every purchase to get <strong className='underline decoration-indigo-500 flex flex-row gap-1 items-center'>discount<MdDiscount color="red"/></strong> on your next purchase
        </div>
       <div className="p-3 grid grid-cols-2 content-center place-content-center gap-2  bg-black text-white sm:flex sm:flex-row sm:justify-center sm:gap-2 flex-wrap w-full h-auto shadow-md shadow-black mt-1">
           {response.map((product:dataFeed | any)=>(
            <div key={product.id}  className=" bg-orange-300 w-36 h-40 cursor-pointer text-black mb-2 sm:w-72 sm:h-80 sm:flex sm:flex-col relative items-center justify-center">
                <img src='/chicken-breast.jpg' onClick={()=>(router.push(`/${product.id}`))} alt={product.name} className="w-full h-28 sm:h-60" />
                <div className="w-full p-2 flex opacity-60 flex-row absolute left-1 top-1 items-center">
                    <FaStar color="gold" size={12}/>
                    <FaStar color="gold" size={12}/>
                    <FaStar color="gold" size={12}/>
                    <FaStar color="gold" size={12}/>
                </div>
                <span className="bg-transparent bottom-14 text-sm sm:text-xl ring-white badge-warning ring-1 absolute rounded border border-white text-white right-1 p-2 text-center sm:bottom-24"><strong>R</strong>{product.price}</span>
                <div className="w-full h-10 sm:h-20 text-black text-pretty flex-row flex justify-center items-center">
                    <div className="p-2 text-black font-semibold">
                        <h2>chicken Breast</h2>
                        <h2 className="text-red-800 sm:text-xl">2kg</h2>
                    </div>
                    <div className="absolute bottom-1 sm:hidden gap-2 items-center right-1 w-20 rounded btn-square hover:bg-gray-700 bg-black h-auto flex flex-row ">
                    <IoIosAddCircle className=" sm:hidden btn-circle size-7 bg-black" size={12} color="green" />
                    <span className="text-white hover:text-green-700">Buy</span>
                    </div>
                       <div className="btn hidden sm:block p-1 w-28 h-6 font-normal items-center  justify-center text-center bg-black  text-white">
                        <h1 className="w-full h-full text-center flex justify-center items-center ">Add To Cart</h1>
                       </div>
                </div>
            </div>
           ))}
       </div>
    </div>
  )
}

export default Homeproducts