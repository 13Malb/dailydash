"use client"
import Image from "next/image";
import { useParams} from "next/navigation";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import {
  Card,CardContent,CardDescription,CardFooter,CardHeader, CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { postFun } from "@/app/clientActions";






const Demo = ({Data, userId}:any) => {
     const {id} = useParams()
     const route = useRouter()
     const productdata = Data.find((pro:any)=>(pro.id == id || ''))
    
    
    return ( 
        <section className="bg-white relative overflow-x-hidden w-full h-min-screen pt-20 overflow-y-auto  h-screen  text-black">
        <div className="bg-white flex h-16 shadow rounded-lg z-50   items-center shadow-black w-[98%] absolute top-1 p-1">
          
            <MdOutlineArrowBackIos onClick={()=>(route.back())} color="white" className="absolute  border-green-800 cursor-pointer bg-black z-50 sm:size-12 size-10 right-3 hover:opacity-60 rounded-full border-2 hover:brightness-200 hover:shadow-md top-3"/>
            
        </div>
        <div className="flex p-2 flex-col sm:flex-row w-full h-auto gap-1 ">
          <div className="bg-gray-200  shadow-md relative h-[300px] rounded-lg sm:w-[600px] w-full">
          <Image className="object-cover sm:object-contain rounded-lg"
          src={`${productdata.imageUrl}`}
          fill={true}
           sizes={'100%'}
          priority={true}    
          alt="Picture of the author"
          />
          </div>
          <div className="bg-black  text-white rounded w-full sm:w-[60%] m-1 p-2">
            <div className="bg-gray-300 shadow-lg h-20 flex flex-row items-center rounded-lg p-1 w-full">
              <span className="text-sm font-semibold text-black">category</span>
              <span className="flex flex-row gap-0"><IoChevronForward className="m-0" color="black" size={20}/>
               
              </span>
              
              <span onClick={()=>(route.push(`/category/${productdata.category.toLowerCase()}`))}  className="text-xl focus:text-black hover:underline cursor-pointer hover:brightness-200 hover:text-white">{productdata.category}</span>
              
            </div>
            <div className="bg-white flex flex-col text-2xl relative w-full p-1 rounded-lg my-3 h-40 text-black">
              <span className="bg-black w-40 hover:bg-green-600 cursor-pointer rounded-md h-10 text-white text-xl m-1 p-1">R{productdata.price}</span>
              <span className="p-1">{productdata.name}</span>
              <span className="text-black p-1 text-xl font-bold bg-green-600 rounded-lg w-14">{productdata.qty}</span>
              <span className="absolute rounded-xl text-black p-1 w-20 right-1 top-1 flex items-center justify-center bg-gray-300 h-16">1:Qty</span>
              <span className="absolute rounded-lg lg:opacity-80 md:right-1 md:bottom-1 flex justify-center w-52 lg:w-96 h-20 lg:h-36 truncate text-pretty overflow-hidden items-center brightness-75 bottom-2 right-2 opacity-70  lg:right-32 p-1 bg-gray-200">
                <p className="text-black text-sm overflow-scroll truncate font-mono text-wrap">
                  {productdata.description}
                </p>
               
              </span>
            </div>
            <div className="w-full p-1 flex justify-center items-center">

            <Button onClick={(e)=>(postFun(productdata,userId))} className="hover:brightness-75 bg-green-600 w-[60%] hover:bg-gray-500" >
              <HiOutlinePlus color="white" size={24}/>
              Add To cart</Button>
            </div>
          </div>
        </div>
        <div className="w-full p-1 m-1 flex flex-col justify-center items-center">
          <span className="text-black text-xl">For you Deals</span>
             
               <section className=" p-1 grid items-center justify-center grid-cols-2 sm:flex sm:justify-center flex-wrap  gap-1">
   {Data.map((item:any)=>(
    <Card key={item.id} className="w-[165px] h-52 overflow-hidden border border-green-600 relative  sm:w-72 sm:h-80 m-1 mt-0">
    <div className="left-0 z-50 top-0 p-1 w-min-16 max-w-28 h-8 absolute bg-black opacity-90 rounded-lg">
          <span className="bg-green-700  rounded-md text-center text-sm font-black p-1">{item.qty}</span>
        </div>
  <CardContent className="flex items-center h-[100%] overflow-hidden relative justify-center ">
<Image  onClick={()=>(route.push(`/products/${item.id}`))} className="rounded-lg object-contain absolute top-0  cursor-pointer shadow-2xl "
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
<HiOutlinePlus className="mr-2 h-4 w-4"/> Add To Cart</Button>
</div>
</div>
</Card>

   ))}
    
       </section>

        </div>
    </section>
     );
}
 
export default Demo;