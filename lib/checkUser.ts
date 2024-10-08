import { currentUser } from "@clerk/nextjs/server";

import { postData, fetchData } from "@/app/actions";


export const checkUser = async ()=>{
    const user = await currentUser()

    //check for login user
    if(!user){
        return null
    }

    const loggedInUser = await fetchData(`http://localhost:4000/v1/users/${user.id}`)

    if(loggedInUser){
        return loggedInUser
    }
    
    const newUser = await postData('http://localhost:4000/v1/users/',user)

    // const newUser =  await axios.post('http://localhost:4000/v1/users/', {
    //     clerkUserId: user?.id,
     //   email: user?.emailAddresses[0].emailAddress,
    //    name:user?.firstName,
    //    imageUrl:user?.imageUrl
   // })
   return newUser;
};