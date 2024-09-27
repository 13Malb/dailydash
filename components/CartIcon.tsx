"use client"
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";



const CartIcon = ({data}:any) => {
    const route = useRouter()
        const navigator =()=>{
            if (data.length != 0) {
                route.push('/order')
            }
            return route.push('/order')
        }
    

    return ( 
        <section onClick={()=>(navigator())} className="size-16 cursor-pointer hover:opacity-80 fixed z-50 bottom-2  right-11 bg-green-600 rounded-full flex justify-center items-center">
        <ShoppingBag color="black"/>
        <span className="absolute bg-black rounded-full right-2 -top-2 z-50 size-2 animate-ping"></span>
    </section>
     );
}
 
export default CartIcon;