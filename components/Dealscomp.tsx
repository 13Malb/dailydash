import Fetchdata from "@/app/actions/Fetchdata";
import SpecialDiv from "./SpecialDiv";

import { currentUser } from "@clerk/nextjs/server";
 


const Dealscomp = async() => {
    const data = await Fetchdata('http://localhost:4000/v1/inventory/')
    const specials = data.filter((item:any)=>(item.category == 'Beef' ))
    const user = await currentUser()

    return ( 
        <>
        <section className="bg-white p-2 overflow-hidden lg:text-4xl font-semibold white m-0 text-center text-black text-xl"><h1>Limited Deals</h1></section>
        
           <SpecialDiv Data={specials} userId={user?.id}/>
        
        </>
     );
}
 
export default Dealscomp;