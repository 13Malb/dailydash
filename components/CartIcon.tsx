"use client"
import { usePolling } from "@/app/hooks/usePolling";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";



const CartIcon = ({data}:any) => {
    usePolling(3000)
    const route = useRouter()
        const navigator =()=>{
            return route.push('/order')
        }
        const totalOrders =()=>{
            if(data.length == 0){
                return 0
            }
            if(data.length > 0){
                return data.length
            }
        }
    

    return ( 
        <section onClick={()=>(navigator())} className="size-16 cursor-pointer hover:opacity-80 fixed z-50 bottom-2  right-11 bg-green-600 rounded-full flex justify-center items-center">
        <ShoppingBag color="black"/>
        <span className="absolute bg-black rounded-full right-2 -top-2 z-50 size-2 animate-ping"></span>
        <span className="bg-yellow-700 rounded-full text-black absolute right-1 border border-green-600 sm:size-8 sm:-bottom-2 sm:-right-2 font-bold -bottom-1 justify-center items-center size-6 flex">{totalOrders()}</span>
    </section>
     );
}
 
export default CartIcon;