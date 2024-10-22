
import Cartmodel from "@/components/Cartmodel";
import { Button } from "@/components/ui/button";
import { fetchData } from "../actions";
import { currentUser } from "@clerk/nextjs/server";


const Order = async () => {
  const user = await currentUser()
  const data = await fetchData(`http://localhost:4000/v1/users/transactions/${user?.id}`);
  const inventory = await fetchData('http://localhost:4000/v1/inventory/')
  const address = await fetchData(`http://localhost:4000/v1/users/address/${user?.id}`);

    return ( 
        <>
          <main className="bg-white h-full p-1 w-full">
            <Cartmodel address={address} userId={user?.id} invent={inventory} Data={data} userName={user?.firstName} /> 

              
        </main>
        </>
       
     );
}
 
export default Order;