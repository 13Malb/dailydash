'use client'
import { ArrowLeft, Plus } from "lucide-react";
import Image from "next/image";
import { postFun } from "@/app/clientActions";
import { useRouter } from "next/navigation";




const Discountmain = ({Data,userId}:any) => {
  const route = useRouter()
  const filterData = ()=>{
    const match = Data.filter((products:any) =>( products.category== 'beef'))
    if(match){
       return Data.filter((products:any) =>( products.category== 'beef'))
    }
     return Data
  }

  

 

    return ( 
        <section className="w-full ">
            <div className="bg-white relative w-full p-2 flex items-center text-black h-20">
                
                <div className="p-1 flex items-center">
                <div onClick={()=>(route.push('/'))} className="size-16 border border-red-600 shadow-md shadow-black relative rounded-full bg-black">
                <Image  className="object-contain absolute rounded-lg"
                  src={`/DdLogo.png`}
                  fill={true}
                   sizes={'100%'}
                   priority={true}    
                        alt="Picture of the author"
                    />
                </div>
                <span className="text-black font-bold text-xl">DailyDash</span>
                </div>

                <span onClick={()=>(route.back())} className="bg-white absolute right-2 rounded-full cursor-pointer shadow-lg hover:opacity-90 hover:shadow-black border-2 border-black size-12 flex items-center justify-center">
                    <ArrowLeft color="black"/>
                </span>
            </div>

          <div className="w-full truncate bg-green-700 h-10 flex items-center justify-center text-white text-xl text-center">
            <h1>Specials are updated every Wednesdays</h1>
          </div>

            <section className="p-1 w-full flex justify-center flex-wrap gap-1">
                {
                  filterData().map((items:any)=>(
                    <div key={items.id} className="bg-white size-48 rounded-lg relative border hover:border-green-700 cursor-pointer">
                <Image onClick={()=>(route.push(`/products/${items.id}`))}  className="object-cover absolute cursor-pointer rounded-lg"
                  src={`${items.imageUrl}`}
                  fill={true}
                   sizes={'100%'}
                   priority={true}    
                        alt="Picture of the author"
                    />
                    <span className="text-red-600 font-bold opacity-70 text-xl absolute top-8 right-3">{items.qty}</span>
                     <span className="p-1 font-semibold text-xl truncate w-full absolute top-0 left-0 text-black">{items.name}</span>
                    <span className="p-1 absolute left-1 bottom-1 bg-gray-800 h-10 w-28 text-green-600 text-center text-xl font-semibold truncate border border-black rounded-md"><strong className="text-black">R</strong>{items.price}</span>
                    <div onClick={()=>(postFun(items,userId))} className="flex items-center justify-center hover:border-green-600 border cursor-pointer absolute size-16 right-1 bottom-1 bg-black rounded-full">
                        <Plus color="white"/>
                    </div>
                </div>
                  ))
                }
               
               
            </section>
        </section>
     );
}
 
export default Discountmain;