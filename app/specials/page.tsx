import { currentUser } from "@clerk/nextjs/server";
import { fetchData } from "../actions";
import Discountmain from "@/components/Discountmain";


const page = async () => {

  const data = await fetchData('http://localhost:4000/v1/inventory/')
  const user = await currentUser()

  return (
    <>
      <main className="bg-black h-screen">
        <Discountmain userId={user?.id} Data={data}/>

      </main>
    </>
  )
}

export default page