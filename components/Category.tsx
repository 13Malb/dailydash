'use client'
import { PackageOpen, PackageCheck, MailCheck, Truck, MapPin, Timer } from "lucide-react";
import { HiOutlinePlus } from "react-icons/hi2";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { postFun } from "@/app/clientActions";

const Category = ({Data, userId}:any) => {
    const route = useRouter()
    const {category} = useParams();
    const categoryData = Data.filter((cat:any)=>(cat.category.toLowerCase().includes(category)))
    return ( 
        <section className="w-full h-auto bg-white p-1 relative">
        <div className="w-full relative h-[300px]">
            <Image className="object-cover rounded-lg  shadow-inner shadow-green-600 brightness-90" 
            src={`/meat-cover.jpg`}
            fill={true}
            sizes={'100%'}
           priority={true}    
           alt="Picture of the author"/>
           
           <Button onClick={()=>(route.back())} className="absolute right-2 top-2 text-black rounded-full border-green-600 border font-medium bg-black hover:bg-gray-300 flex items-center justify-center size-12">
             <MdOutlineArrowBackIos color="white" size={30}/>
           </Button>
        </div>
        <div className="my-1 w-full p-1 items-center bg-gray-300 rounded-md flex flex-row">
            <div className="p-2 flex flex-col bg-black justify-center items-center border border-yellow-600  rounded-md h-20 text-pretty  text-black text-sm">
           <span className="p-1 flex">
            <MapPin color="white"/><Timer color="white"/>
            </span> 
                <span className="bg-white rounded-md font-medium p-1 text-yellow-600 ">Delivery schedule</span>
            </div>

            <Button className="m-2 bg-green-600 h-12 w-40 font-semibold hover:bg-black border border-black ">Day 1 - 2</Button>

        </div>

        <div className="bg-black">
        <div className="w-full p-1 my-2 text-white bg-black flex items-center justify-center">
                    <span className="size-12 cursor-pointer hover:opacity-80 shadow-lg flex items-center justify-center shadow-black  border border-blue-600 rounded-full bg-yellow-700">
                      <PackageOpen color='black' className='size-9'/>
                    </span>
                    <span className="w-16 h-1 bg-yellow-700 border-2 border-blue-600"></span>
                    <span className="size-10 cursor-pointer hover:opacity-80 shadow-lg border-2 border-blue-800 rounded-md flex justify-center items-center bg-yellow-700">
                    <PackageCheck color='black' className='size-9'/>
                    </span>
                    <span className="w-16 h-1 border-2 border-blue-900 bg-yellow-700"></span>
                    <span className="size-12 cursor-pointer hover:opacity-80 shadow-lg border-2 border-green-600 flex justify-center items-center rounded-full bg-yellow-700">
                      <MailCheck color='black' className='size-9'/>
                    </span>
                    <span className="w-16 h-1  bg-yellow-700 border-2 border-green-600"></span>
                    <span className="size-10 cursor-pointer hover:opacity-80 shadow-lg rounded-md border-2 border-blue-600 flex justify-center items-center bg-yellow-700">
                    <Truck color='black' className='size-9'/>
                    </span>
                   </div>

                      <div className="flex w-full text-white bg-black p-1 justify-center items-center"> 
                     <ul className="steps">
                         <li className="step step-primary">Add to cart</li>
                        <li className="step step-primary">Confirm</li>
                        <li className="step">Wait for a message</li>
                        <li className="step">Receive Product</li>
                     </ul>
                     </div> 
                     </div>

        <section className=" p-1 grid grid-cols-2 sm:flex sm:justify-center flex-wrap  gap-1">
   {categoryData.map((item:any)=>(
    <Card key={item.id} className="w-[165px] h-52 overflow-hidden border border-green-600 relative  sm:w-72 sm:h-80 m-1 mt-0">
    <div className="left-0 z-50 top-0 p-1 w-16 h-8 absolute bg-black opacity-90 rounded-lg">
      <span className="bg-green-700  rounded-md text-center text-sm font-black p-1">2kg</span>
    </div>
  <CardContent className="flex items-center h-[100%] overflow-hidden relative justify-center ">
<Image onClick={()=>( route.push(`/products/${item.id}`))} className="rounded-lg object-contain absolute top-0  cursor-pointer shadow-2xl "
src={`${item.imageUrl}`}
fill={true}
sizes={'100%'}
priority={true}

alt="Picture of the author"
/>
  </CardContent>
<div className="bg-black bottom-0 z-50 rounded-md opacity-80 p-1 absolute w-full h-20 text-white">
<div className="flex flex-rows justify-center gap-1">
<span className="truncate">{item.name}</span>
<span>|</span>
<span className=" border ring-2 sm:min-w-12 sm:text-center ring-red-800 cursor-pointer hover:brightness-50 border-red-800 rounded-md ">R{item.price}</span>
</div>
<div className="w-full p-1  flex justify-center m-1">

<Button onClick={()=>(postFun(item,userId))}   variant="secondary" className="text-black hover:bg-green-600 font-semibold">
<HiOutlinePlus className="mr-2 h-4 w-4"/> Add Cart</Button>
</div>
</div>
</Card>

   ))}
    
       </section>
    </section>
     );
}
 
export default Category;