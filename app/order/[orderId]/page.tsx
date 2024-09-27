import OrderId from "@/components/OrderIDcomp";
import { currentUser } from "@clerk/nextjs/server";
import { fetchData } from "@/app/actions";



const Order = async () => {
    const user = await currentUser();
    const address = await fetchData(`http://localhost:4000/v1/users/address/${user?.id}`);
    

    return (  
        <>
          <OrderId address={address} userId={user?.id}/>
        </>
    );
}
 
export default Order;