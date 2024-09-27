
import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton
} from '@clerk/nextjs'
import { checkUser } from '@/lib/checkUser'
import { CircleUserRound } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import Image from 'next/image'



const Navbar = async () => {
  const person = await currentUser()

const user = await checkUser()
  return (
    <div className='h-24 w-full flex items-center gap-3  bg-transparent text-black p-5 rounded-md relative' >
      
    
 
<Drawer>
  <DrawerTrigger>
      <label className="btn bg-white btn-circle hover:bg-green-700 swap swap-rotate border-0">
  {/* hamburger icon */}
  <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" color='black' width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
</label>
  </DrawerTrigger>
  <DrawerContent className='bg-black flex items-center justify-center flex-col text-white border border-green-600'>
    <DrawerHeader >
      <DrawerTitle className='flex items-center gap-1'>
        <Image 
        className='size-10 rounded-full'
        src={'/DdLogo.png'}
        width={24}
        height={24}
        alt='logo'/>
        Daily Dash (Pty) Ltd</DrawerTitle>
      <DrawerDescription>Company Policy</DrawerDescription>
      <div className="w-full text-white p-1 overflow-scroll h-52">
        <p>
        Company Policy for DAILY DASH (PTY) Ltd:

At DAILY DASH, we are committed to providing our customers with high-quality products sourced from trusted third-party companies. However, due to the nature of online shopping and transportation, there may be instances where products are damaged during delivery.

Therefore, it is the responsibility of the consumer to inspect all products upon delivery. If any damage is found, we kindly request that you refuse the delivery or note the damage on the delivery receipt. 

We regret any inconvenience caused and assure you that we are committed to resolving any issues promptly. Please contact our customer service team at sales@dailydash.co.za or +27789819384 for assistance.

Thank you for your understanding and cooperation.

Best Regards,
The DAILY DASH Team.
        </p>
      </div>
    </DrawerHeader>
    <DrawerFooter>
      
      <DrawerClose>
        <Button className='text-black' variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>


 <label className='m-1 text-white'>
  <span className='text-3xl lg:text-5xl font-extrabold'>D</span>
  <span className='text-xl lg:text-3xl font-semibold font'>Dash</span>
 </label>
 <div className='p-2 absolute items-center lg:right-12 lg:gap-20 lg:rounded-3xl  gap-2 right-1 w-auto h-auto flex flex-row'>
    
    <SignedIn>
        <div className="w-40 sm:w-44 p-1 h-16 text-white gap-1 truncate rounded-full border-2 border-black flex justify-center items-center">

      <UserButton/>
      <span className='text-xs font-bold truncate'>{person?.firstName}</span>
        </div>
    </SignedIn>
   

   <SignedOut>  

     <SignInButton mode='modal'>
       <div className='size-12 sm:size-16 bg-gradient-to-r from-green-400 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-lg shadow-black hover:border-green-600 border border-black flex items-center justify-center rounded-full cursor-pointer'>
          <CircleUserRound className='size-12' color='black'/>
       </div>
     </SignInButton>

     <SignUpButton mode='modal'>  
       <span className='btn w-24 lg:btn-wide font-semibold border-green-600 shadow-sm  shadow-black bg-black hover:text-green-600 hover:bg-transparent hover:font-bold hover:border-green-950 hover:border text-white rounded-xl'>Sign up</span>
     </SignUpButton>

   </SignedOut>

 </div>
    </div>
  )
}

export default Navbar