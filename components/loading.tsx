import { Beef, Carrot } from "lucide-react";

const Loading = () => {
    return ( 
        <section className="bg-black relative flex h-screen w-full items-center justify-center">
            <div className="rounded-full size-40 border-t-green-600 border-4 bg-black animate-spin"></div>
            <span className="absolute bottom-5 w-full text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-violet-800 text-2xl p-1 flex-col flex gap-1 justify-center">
                Daily Dash
                <span className="w-full text-gray-700 text-sm text-center">K2024535232</span>
                </span>
           
        </section>
     );
}
 
export default Loading;