'use client'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Truck,ArrowLeft, PackageCheck,MailCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { HandCoins } from 'lucide-react';
import { PackageOpen } from 'lucide-react';
import { postAddress } from '@/app/clientActions';

const schema = z.object({
    street: z.string().min(5,{message: "Eish! Required"}),
    suburb:  z.string().min(3,{message: "Eish! Required"}),
    city:  z.string().min(3,{message: "Eish! Required"}),
    phone: z.number().min(10)
})


const OrderId = ({userId,address}:any) => {
    const route = useRouter()
    const routeDicider = ()=>{
        if(address.length == 0)
            route.push('/')
    } 
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });

      const onsubmit = (data:any)=>(postAddress(data,userId), route.push('/') )

    return ( 
        <section className="bg-white  relative p-1 h-auto w-full">
            <span onClick={()=>(route.back())} className="size-10 cursor-pointer hover:opacity-80 bg-green-600 flex items-center justify-center rounded-full absolute left-2 top-2">
                <ArrowLeft size={24} color="white"/>
            </span>
            <div className="p-1 gap-1 w-full h-24 bg-black rounded-sm flex justify-center items-center">
                <span className="text-white text-xl">Finish Up your Order</span>
                <Truck color="white"/>
            </div>

             <div className="w-full bg-black p-1  flex items-center justify-center">
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
                    <span className="size-10 cursor-pointer hover:opacity-80 shadow-lg brightness-105 rounded-md border-2 border-red-600 flex justify-center items-center bg-yellow-700">
                    <Truck color='black' className='size-9'/>
                    </span>
                   </div>

              <section className="bg-black w-full justify-center items-center p-1 h-auto flex">
             <form   className=' w-80 sm:w-[60%] mb-2 rounded-lg border-2 border-white mt-2 gap-2 pl-3 text-white flex flex-col bg-black p-1 h-auto'>
                <label className='text-xl w-full  text-white' >Street</label>
                <input placeholder='18 main street' required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1' {...register('street')}/>
                <label  className='text-xl w-full  text-white' >Suburb</label>
                <input placeholder='Turffontien'required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1' {...register('suburb')}/>
                <label className='text-xl w-full  text-white' >City</label>
                <input placeholder='Johanesburg' value='Johannesburg' required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1'{...register('city')}/>
                <label className='text-xl w-full  text-white' >Phone Number</label>
                <input placeholder='07898211..' required className='bg-black border-2 sm:w-[80%] h-12 border-green-600 rounded-md w-72 p-1' type="tel" {...register('phone', { valueAsNumber: true })} />
                  <Button onClick={handleSubmit(onsubmit)} className='bg-green-700 hover:bg-white hover:text-black cursor-pointer text-xl mb-2'>Order</Button>
             </form>
              </section>
                 
                 <div className="w-full sm:flex sm:justify-center sm:items-center grid grid-cols-2 p-1 gap-1 h-auto">
                    <div className='size-40 rounded-lg flex justify-center items-center hover:brightness-90 bg-black'>
                        <HandCoins className='size-40' color='gold'/>
                    </div>
                    <div className='size-40 rounded-lg bg-black text-xl font-semibold text-white flex justify-center items-center text-wrap text-center'>
                        Pay Cash when you get your goods or EFT when you get them
                    </div>
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


                      <div className="flex w-full p-1 justify-center items-center"> 
                     <ul className="steps">
                         <li className="step step-primary">Add to cart</li>
                        <li className="step step-primary">Confirm</li>
                        <li className="step">Wait for a message</li>
                        <li className="step">Receive Product</li>
                     </ul>
                     </div>  

                   <div className="p-1 w-full bg-red-700 text-white rounded-lg">
                    <span>After you Order Please  wait for a message confirming your order and delivery time from our trusted <strong className='font-bold text-green-700'>Dashers</strong> </span>
                   </div>
          </section>
     );
}
 
export default OrderId;