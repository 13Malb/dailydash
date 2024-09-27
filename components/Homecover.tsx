
import React from 'react'
import Navbar from './Navbar'
import SearchDialog from './SearchDialog'
import Catergorybadge from '@/components/Catergorybadge'
import Cardproduct from '@/components/Cardproduct'
import Dealscomp from '@/components/Dealscomp'
import { fetchData,postData,postTransaction } from '@/app/actions';
import { currentUser } from '@clerk/nextjs/server'
import CartIcon from './CartIcon';
import { SignedIn } from '@clerk/nextjs'
 
 
const Homecover = async() => {
 
  const data = await fetchData('http://localhost:4000/v1/inventory/')
  const user = await currentUser()
  //const response = await  postData('http://localhost:4000/v1/users/',user)
  const orders = await fetchData("http://localhost:4000/v1/users/transactions")
   
  

  return (
     
    <>
    <div className='w-full p-2 m-0 text-center border-blue-500 border-b-2 h-96 sm:h-2/3 bg-[url(/cow.jpg)] bg-cover bg-no-repeat bg-center '>
        <Navbar/>
      <div className=' mt-2 text-xl text-center h-full flex flex-col items-center text-white font-extrabold p-1 lg:pt-8'>
        <h1 className='lg:text-3xl bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-green-500 mb-8'> 
          Simple Food Simple People Simple Price
          </h1>
           <SearchDialog data={data} userId={user?.id}/>
       <button  className='btn bg-black text-white m-10 w-52 sm:w-96 h-14'>Explore our Specials</button>
        </div>
 </div>

   <section className='p-1 bg-black'>
     <Catergorybadge/>
     <Dealscomp/>
     <Cardproduct data={data} userId={user?.id}/>
     <SignedIn>
      <CartIcon data={orders}/>
     </SignedIn>
   </section>

    </>

  )
}

export default Homecover