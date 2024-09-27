'use client'
import {
    Card,CardContent,CardDescription,CardFooter,CardHeader, CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import { postFun } from "@/app/clientActions";



const Cardproduct =  ({data,userId}:any, ) => {
  const route = useRouter()


    return ( 
      <>
      
      <section className=" p-1 grid grid-cols-2 sm:flex sm:justify-center flex-wrap  gap-1">
       {data.map((item:any)=>(
        <Card key={item.id} className="w-[170px] h-52 overflow-hidden border border-green-600 relative  sm:w-72 sm:h-80 m-1 mt-0">
        <div className="left-0 z-50 top-0 p-1 w-min-16 max-w-28 h-8 absolute bg-black opacity-90 rounded-lg">
          <span className="bg-green-700  rounded-md text-center text-sm font-black p-1">{item.qty}</span>
        </div>
        <div className="absolute bg-black rounded-lg flex opacity-60 flew-row w-14 right-1 gap-1 z-50 top-4 text-white text-sm justify-center items-center">
          <span className="font-semibold">Avail</span>
          <span className="size-2 animate-pulse bg-green-600 z-50 rounded-full"></span>
        </div>
<CardContent className="flex items-center h-[100%] overflow-hidden relative justify-center ">

<Image onClick={()=>(route.push(`/products/${item.id}`))} className="rounded-lg object-contain absolute top-0  cursor-pointer shadow-2xl "
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
<IoMdAddCircleOutline className="mr-2 h-4 w-4"/> Add To Cart</Button>
</div>
</div>
</Card>

       ))}
        
      </section>
      </>
     );
}
 
export default Cardproduct;