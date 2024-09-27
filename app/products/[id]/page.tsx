

import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { HiOutlinePlus } from "react-icons/hi2";
import {
  Card,CardContent,CardDescription,CardFooter,CardHeader, CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { fetchData } from "@/app/actions";
import Demo from "@/components/Demo"
import { currentUser } from "@clerk/nextjs/server";





const item = async() => {
  const products = await fetchData('http://localhost:4000/v1/inventory/')
  const user = await currentUser();  




    return (
       <Demo userId={user?.id} Data={products}/>
      );
}
 
export default item;