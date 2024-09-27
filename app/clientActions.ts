"use client"
import axios from "axios";
import { toast } from "sonner";


export  const postFun = (info:any,userId:String)=>{
    if(!userId){
       toast.error("Please Sign in First",{
        description: "Eish Sign in we will waiting for you",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
       })
    }
      
   return axios.post('http://localhost:4000/v1/users/transactions', {
     "name":`${info.name}`,
     "productId":`${info.id}`,
     "amount":`${info.price}`,
     "category":`${info.category}`,
    "status":"Processing",
     "userId":`${userId}`
    })
    .then(function (response) {
     // console.log(response);
      toast.success('Item Added',{
        classNames:{
            toast: 'bg-green-600'
        }
    })
    })
    .catch(function (error) {
      console.log(error);
    })
  
};



export const postAddress =(data:any,userId:string)=>{
   
   return axios.post("http://localhost:4000/v1/users/address",{
          "city":`${data.city}`,
          "suburb":`${data.suburb}`,
          "street":`${data.street}`,
          "phoneNumber":data.phone,
          "userId":userId})
          .then(function (response) {
           
            toast.success('Address Added wait for our message shortly',{
              classNames:{
                  toast: 'bg-green-600'
              }
          })
          })
          .catch(function (error) {
            console.log(error);
          })
       }

       export const updateAddress =(id:string,data:any)=>{
         return axios.patch(`http://localhost:4000/v1/users/address/${id}`,{
          "city":data?.city,
          "suburb":data?.suburb,
          "street":data?.street,
          "phoneNumber":data?.phone
         })
         .then(function(response){
          toast.success('Address updated',{
            classNames:{
              toast: 'bg-blue-600'
            }
          })
         })
         .catch(function(error){
          toast.error('Something went wrong try again later')
         })
       }

       export const updateTranactions = (id:string)=>{
        return axios.patch(`http://localhost:4000/v1/users/transactions/update/${id}`,{
          "status": "Confirmed"
        })
        .then((res)=>{
          console.log(res);
          
         
        })
       }

export const deletePost = (Id:string)=>(
  axios.delete(`http://localhost:4000/v1/users/transactions/${Id}`)
  .then(function (response) {
    console.log(response);
    toast.success('Item Removed',{
      classNames:{
          toast: 'bg-red-600'
      }
  })
    
  })
  .catch((error)=>{
    console.log(error);
    
  })
)