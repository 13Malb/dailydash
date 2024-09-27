'use client'
import Image from "next/image";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Button } from "./ui/button";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { Home, MailCheck, PackageCheck, PackageOpen, Trash2, Truck } from "lucide-react";
import { deletePost, updateAddress,updateTranactions } from "@/app/clientActions";
import { History } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePolling } from "@/app/hooks/usePolling";

import {Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "./ui/drawer";






export const Empty =()=>(
  <div className="bg-black h-screen text-white text-xl">
    <strong>Oops there is nothing here</strong>
  </div>
)



const Cartmodel =  ({Data, userName,invent, address,userId}:any) => {
  usePolling(3000)

  const routeDecider =()=>{
    if(houseData.length !== 0 && Data.length !== 0){
      updateTranactions(userId)
      toast.success("Order Confirmed, Our Team will contact you Shortly ",{
        classNames:{
          toast:'bg-yellow-600'
        }
      })
    }
   if(Data.length == 0){
    toast.warning('Add Products To Process first')
   }

   if(Data.length !== 0 && houseData.length ==0){

     return route.push(`/order/${userId}`)
   }
  }
  
  


  const route = useRouter()
  const userInitial = userName[0]
  const houseData = address.find((data:any)=>(data.userId == userId)) || ''
  const showAddress  = ()=>{
    const schema = z.object({
      street: z.string().min(5,{message: "Eish! Required"}),
      suburb:  z.string().min(3,{message: "Eish! Required"}),
      city:  z.string().min(3,{message: "Eish! Required"}),
      phone: z.number().min(9)
    })
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    });

    
    if(address.length != 0){
      return <div className="w-full  bg-black mt-1 rounded p-1">
     <Drawer>
  <DrawerTrigger>
    <Button className="bg-blue-600"><Home color="black"/>View Address </Button>
  </DrawerTrigger>
  <DrawerContent className="bg-black border p-1 flex flex-col justify-center  border-green-600 text-white">
    <DrawerHeader>
      <DrawerTitle>View and Edit Your Address</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
      <div className="border w-full flex items-center justify-center rounded-md border-white">
      <form   className=' w-80 sm:w-[60%] mb-2 rounded-lg border-2 border-white mt-2 gap-2 pl-3 text-white flex flex-col bg-black p-1 h-auto'>
                <label className='text-xl w-full  text-white' >Street</label>
                <input defaultValue={houseData.street} placeholder='18 main street' required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1' {...register('street')}/>
                <label  className='text-xl w-full  text-white' >Suburb</label>
                <input defaultValue={houseData.suburb} placeholder='Turffontien'required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1' {...register('suburb')}/>
                <label className='text-xl w-full  text-white' >City</label>
                <input defaultValue={houseData.city} placeholder='Johanesburg' value='Johannesburg' required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1'{...register('city')}/>
                <label className='text-xl w-full  text-white' >Phone Number</label>
                <input defaultValue={houseData.phone} placeholder='07898211..' required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1' type="tel" {...register('phone', { valueAsNumber: true })} />
                  <Button onClick={handleSubmit((data)=>(updateAddress(houseData.id,data)))} className='bg-green-700 hover:bg-white hover:text-black cursor-pointer text-xl mb-2'>Update</Button>
             </form>
         </div>
    </DrawerHeader>
    <DrawerFooter>
      
      <DrawerClose>
        <Button className="text-black font-bold" variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

     
    </div>
    }
    return null
  }
  

  const totalPrice =()=>{
    if(Data.length >1){
      return  Data.map((totalset:any)=>(totalset.amount)).reduce((tot:any,num:any)=>(Number(tot)+ Number(num))).toFixed(2)
    }
    if(Data.length == 1){
      return Data.map((item:any)=>(item.amount))
    }

    return 0
  }
  
  
   const imageUrl =(id:string)=>{
    if(id){
    return invent.find((pro:any)=>(pro.id == id))
    }
   }
   
    
  const displayDicider =()=>{
    if(Data.length != 0){
         return Data.map((item:any)=>(
          <div  key={item.id}  className={`w-full flex items-center lg:gap-2 gap-1 p-1 truncate my-1 h-28 bg-white text-black`}>
            <div className="size-24 flex items-center justify-center cursor-pointer relative rounded ring ring-gray-500 bg-black ">
              
                <Image onClick={()=>(route.push(`/products/${item.productId}`))} className="object-cover absolute rounded-lg"
                  src={`${imageUrl(item.productId).imageUrl}`}
                  fill={true}
                   sizes={'100%'}
                   priority={true}    
                        alt="Picture of the author"
                    />
                    
                     
               
                     </div>
            <div className="w-40 bg-slate-900 rounded lg:basis-2/3 h-20 flex flex-col p-1">
              <span className="font-bold md:text-xl text-white">{item.name}</span>
              <span className="text-[10px] truncate opacity-80 text-white">Item No:{item.productId}</span>
              <span className="w-36 sm:w-40 rounded-lg truncate font-medium p-1 opacity-70 text-sm bg-blue-600">Status: <span className="text-green-500 font-bold">{item.status}</span></span>
            </div>
            <div className="flex flex-col gap-1">
            <span className="bg-green-600 p-1 w-20 lg:h-10 lg:w-40 text-center font-semibold rounded-lg">R{item.amount}</span>
            <Button onClick={()=>( deletePost(item.id))} className="w-20" variant='destructive'><Trash2 size={24} color="black"/></Button>
            </div>
        </div>
        ))
    }

    return (
      <div className="w-full flex-col h-[600px] rounded-md mt-1 flex items-center justify-center bg-slate-600">
        <History color="black" className="size-40 opacity-85"/>
         <span className="w-full text-xl p-1 text-white flex items-center justify-center font-semibold opacity-80"> No Products or Refresh page</span>
      </div>
    )
  }
  
 
      
    return ( 
        <section className="w-full relative min-h-full ">
            <div className="mt-0 relative bg-black w-full flex justify-center items-center h-16 ">
               <GrClose onClick={()=>(route.back())} className="absolute hover:opacity-60 cursor-pointer left-2 top-4 size-8" color="white"/>
              <span className="text-white text-xl ml-1 font-semibold">Orders</span>
              <MdOutlineShoppingCartCheckout size={16} color="green"/>
            </div>
                 
                 <div className="w-full h-full bg-slate-600 p-1">
                  <div className="p-1 w-full rounded-md bg-black cursor-pointer pl-2 h-16 shadow shadow-white gap-2 flex items-center">
                    <div className="size-12 text-black text-3xl font-semibold ring justify-center flex items-center ring-green-600 rounded-full cursor-pointer hover:border-yellow-950 hover:bg-black hover:text-green-700 bg-yellow-800">
                      <span>{userInitial}</span>
                    </div>
                    <span className="text-white font-semibold text-xl">hey, {userName}</span>
                  </div>

                  <div className="w-full p-1 my-2 flex items-center justify-center">
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


                      <div className="flex text-white w-full p-1 justify-center items-center"> 
                     <ul className="steps">
                         <li className="step step-primary">Add to cart</li>
                        <li className="step step-primary">Confirm</li>
                        <li className="step">Wait for a message</li>
                        <li className="step">Receive Product</li>
                     </ul>
                     </div> 

                  {showAddress()}
                  
                  {displayDicider()}



                 </div>
              
              <div className="w-full  p-1 text-white rounded-lg m-1 bg-yellow-700">
                <span className=" brightness-150">When your products status changes from <strong className="text-red-700">PROCESSING TO CONFIRMED</strong> it  means we have received yor Order and we getting it ready for delivery!!!</span>
              </div>
                 <div className="bg-black   w-full gap-1 h-28 shadow flex flex-col items-center justify-center p-1">
            <span className="text-sm">Total:<strong className="text-white"> R{totalPrice()}</strong></span>
                  <Button onClick={()=>(routeDecider())} className="bg-green-600 cursor-pointer hover:bg-white text-white w-[60%] hover:text-black text-xl p-1">Order</Button>
           </div> 
        </section>
     );
}
 
export default Cartmodel;