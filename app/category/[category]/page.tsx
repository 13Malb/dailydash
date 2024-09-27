import { fetchData } from "@/app/actions";
import CartIcon from "@/components/CartIcon";
import Category from "@/components/Category";
import { SignedIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


const category = async() => {
  const data = await fetchData('http://localhost:4000/v1/inventory/')
  const user = await currentUser()
  const orders = await fetchData("http://localhost:4000/v1/users/transactions")


    return ( 
      <>
        <Category Data={data} userId={user?.id}/>
        <SignedIn>
          <CartIcon data={orders}/>
        </SignedIn>
        </>
     );
}
 
export default category;