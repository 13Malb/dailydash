"use client"
import { FaMapLocation } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Search } from "lucide-react";
  import { useRouter } from "next/navigation";
  import {
    Card,CardContent,CardDescription,CardFooter,CardHeader, CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  import { Button } from "@/components/ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import { useState } from "react";
import { Plus } from "lucide-react";
import { postFun } from "@/app/clientActions";







const SearchDialog = ({data,userId}:any) => {
    const route = useRouter()
    const [value,setvalue]= useState<string>('a')
    const filterData = data.filter((item:any)=>{
      if(item.name.toLowerCase() == value.toLowerCase() || item.name.toLowerCase().includes(value.toLowerCase())){
        return item
      }
    })
     const decider =()=>{
               if(value==''){
                return <div className="text-white text-xl flex justify-end items-center p-1 w-full h-full text-wrap text-center">
                    <span className="opacity-80">No Results</span>
                </div>
               }
               return(

                 <div className="w-[320px] p-1 mt-1 rounded scroll-smooth overflow-y-scroll bg-white h-96">
                      {
                        filterData.map((pro:any)=>(
                          <div key={pro.id} className="w-full gap-2 justify-center flex items-center p-1 h-24 rounded-md shadow shadow-black bg-black">
                        <div className="size-20 relative bg-white hover:brightness-75 rounded">
                        <Image onClick={()=>(route.push(`/products/${pro.id}`))} className="object-contain cursor-pointer  absolute rounded-lg"
                          src={`${pro.imageUrl}`}
                             fill={true}
                            sizes={'100%'}
                            priority={true}    
                           alt="Picture of the author"
                           />
                        </div>
                        <div className="w-52 bg-white flex flex-col relative h-20 rounded-lg p-1">
                           <span className="text-white w-full text-center rounded bg-black text-xl font-semibold">{pro.name}</span>
                           <span className="absolute font-bold left-1 bottom-1 bg-black rounded-md w-32 p-1 text-white">{pro.qty}</span>
                           <span onClick={()=>(postFun(pro,userId))} className="size-14 border-t border-t-white rounded-full flex items-center cursor-pointer hover:bg-slate-200 justify-center absolute right-1 bottom-3 bg-green-600">
                            <Plus color="black"/>
                           </span>
                           <span className="absolute bg-green-500 text-center text-black left-1 flex items-center justify-center font-bold p-1 z-50 rounded-lg top-[40%] h-5  w-20"><strong>R</strong>{pro.price}</span>
                        </div>
                      </div>
                        ))
                      }
                 </div>
               ) 
     }
    return ( 
        <>
        <Dialog>
  <DialogTrigger className="bg-white select-none h-14 sm:h-16 lg:w-1/2 rounded sm:w-4/5 w-64 p-1 flex justify-center gap-1 items-center flex-row">
    <Search color="black" className=" size-8 sm:size-10"/>
    <input name="search"  type="text" placeholder="Search Item name.." className='h-12 w-2/3 p-5 lg:placeholder:text-md lg:opacity-100 bg-white opacity-80 rounded-none text-black placeholder:text-sm placeholder:text-gray-800'/>
  </DialogTrigger>
        <DialogContent className="bg-black w-fit overflow-hidden text-white border-0 rounded">
         <DialogHeader className="flex justify-center items-center w-full">
           <DialogTitle className="flex gap-1 items-center"><Search className="border rounded-md border-white size-8" color="white"/>
           <input value={value} onChange={(e)=>(setvalue(e.target.value))} className="p-1 select-none text-black h-10 rounded-md placeholder:text-sm bg-white" placeholder="Type..eg,chicken,spinach,tomatoes" type="text"/></DialogTitle>
         <DialogDescription>
             {decider()}
         </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
          
        </>
     );
}
 
export default SearchDialog;