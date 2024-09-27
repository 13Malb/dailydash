'use server'
import axios from 'axios';
import { currentUser } from '@clerk/nextjs/server';







type Item = {
    id:String,
    name:String,
    imageUrl:String,
    description?:String,
    price: Number | any,
    category:String,
    qty:String,
    available?:boolean,
    rating?: String,
    createdAt?:Date,
    updatedAt?:Date 
}



export const  fetchData = async (url:string ) => {
    try {
        const response = await axios(url);
         const data = await response.data
         return data
         
        
      } catch (error) {
        //console.error(error);
      }
}

export const postData = async (url:string,data:any)=>{
  try {
    const response = await axios.post(url,{
          clerkUserId: data?.id,
          email: data?.emailAddresses[0].emailAddress,
          name:data?.firstName,
          imageUrl:data?.imageUrl
      })
    console.log(response)
  } catch (error) {
   // return error
    
  }
}
 
export const postTransaction = async (url:string,data:any)=>{
  const user = await currentUser()
  try {
    const res = await axios.post(url,{
      name:data.name,
      productId:data.id,
      amount:data.price,
      category:data.category,
      status:'Processing',
      userId:user?.id

    })
  } catch (error) {
    //return error
  }
}

export const postAddress = async (url:string,data:any)=>{
  const user = await currentUser()
  try {
    const res = await axios.post(url,{
      city:data.city,
      suburb:data.suburb,
      street:data.street,
      userId:user?.id

    })
  } catch (error) {
   // return error
  }
}