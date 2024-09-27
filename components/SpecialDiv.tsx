"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { postFun } from "@/app/clientActions";
  import Image from "next/image";
import { LuPlus } from "react-icons/lu";


const SpecialDiv = ({Data,userId}:any) => {
    return ( 
        <Carousel
      opts={{
        align: "center",
      }}
      className="w-full overflow-hidden"
    >
          
      <CarouselContent>
      {Data.map((item:any)=>(
                  <CarouselItem key={item.id} className="bg-white basis-3/5 md:basis-1/2 lg:basis-1/5 p-1 w-full h-auto gap-1 flex justify-center items-center">
                  <div  className="size-32 relative lg:size-40 flex justify-center flex-col items-center cursor-pointer border hover:border-blue-400 rounded-full  bg-black">
                  <Image  className="rounded-full hover:opacity-80 absolute object-cover    cursor-pointer shadow-2xl "
                    src={item.imageUrl}
                    fill={true}
                     sizes={'100%'}
                    priority={true}
                    alt={item.name}
                    />
                  <span className="absolute border-red-800 border-2  top-0 right-1 size-4 flex  justify-center animate-ping items-center rounded-full bg-green-500 "></span>
                  <span className="absolute z-50 font-semibold lg:text-lg text-black text-sm">{item.name}</span>
                  <span className=" absolute top-1  opacity-80 z-50 text-green-600  font-bold lg:text-lg  text-sm">{item.qty}</span>
                  <div className=" grid grid-cols-2 p-1  content-center shadow-xl  absolute bottom-0 w-full h-10 lg:h-14 bg-black opacity-80 z-50 border rounded-lg border-black ">
                      <div className="bg-white p-1   shadow-lg shadow-black rounded-xl flex justify-center items-center w-16 lg:w-24">
                          <span className="text-green-800 z-50  font-bold  lg:text-xl text-sm"><strong className="text-black">R</strong>{item.price}</span>
                          <button onClick={()=>(postFun(item,userId))}  className="bg-green-700 absolute border-0  rounded-full lg:size-10 size-8 z-50 hover:bg-white hover:border-green-700 hover:border right-1 flex justify-center items-center">
                              <LuPlus  size={24} color="black"/>
                          </button>
                      </div>
      
                  </div>
              </div>
              </CarouselItem>
            ))}
      </CarouselContent>
     
    </Carousel>
     );
}
 
export default SpecialDiv;