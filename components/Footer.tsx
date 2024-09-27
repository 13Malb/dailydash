import { HandCoins, Phone } from "lucide-react";
import { WalletCards } from "lucide-react";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";


const Footer = () => {
    
    return ( 
        <>
        <div className="p-1 bg-white sm:text-xl gap-2 select-none border-t-1 text-black flex flex-col justify-center items-center border-white w-full h-auto">
            <span className="flex items-center gap-1">
                <HandCoins size={28} color="gold"/>
                <WalletCards color="black"/>
                <span className="text-sm text-yellow-600">Cash on delivery</span>
            </span>
            <span className="font-semibold">©2024 DAILY DASH (Pty) Ltd</span>
            <div className="w-full p-1 flex gap-1 flex-wrap overflow-hidden justify-center items-center">
                <MdOutlineEmail color="black"/>
                <span className="mr-2">sales@dailydash.co.za</span>
                <MdOutlineEmail color="black"/>
            <span className="mr-2">executive@dailydash.co.za</span>
            <Phone color="black"/>
            <MdWhatsapp color="green"/>
               <span>+27789819384</span>
            </div>
        <div className="flex h-14 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 64 64">
<path d="M 7 12 C 4.791 12 3 13.791 3 16 L 3 48 C 3 50.209 4.791 52 7 52 L 57 52 C 59.209 52 61 50.209 61 48 L 61 16 C 61 13.791 59.209 12 57 12 L 7 12 z M 38.886719 24.75 C 40.281719 24.75 41.403391 25.053094 42.275391 25.371094 L 41.638672 28.339844 C 40.017672 27.592844 38.586359 27.644891 38.068359 27.712891 C 37.021359 27.848891 36.54425 28.383766 36.53125 28.884766 C 36.49625 30.535766 41.620469 30.739594 41.605469 34.433594 C 41.591469 37.343594 39.104734 39.220703 35.302734 39.220703 C 33.682734 39.205703 32.119391 38.865563 31.275391 38.476562 L 31.931641 35.410156 C 32.772641 35.803156 33.828438 36.322922 35.648438 36.294922 C 36.691437 36.278922 37.805406 35.864781 37.816406 34.925781 C 37.821406 34.311781 37.349453 33.871547 35.939453 33.185547 C 34.567453 32.516547 32.744531 31.391953 32.769531 29.376953 C 32.789531 26.653953 35.307719 24.75 38.886719 24.75 z M 9.6835938 25.005859 L 15.84375 25.005859 C 16.62775 25.005859 17.334672 25.527641 17.513672 26.431641 L 19.037109 34.53125 L 22.806641 25.005859 L 26.609375 25.005859 L 20.742188 39.001953 L 16.916016 39.001953 L 14.029297 27.832031 C 13.854297 27.144031 13.702922 26.893516 13.169922 26.603516 C 12.298922 26.129516 10.861656 25.687109 9.5976562 25.412109 L 9.6835938 25.005859 z M 28.162109 25.005859 L 31.78125 25.005859 L 28.787109 39.001953 L 25.167969 39.001953 L 28.162109 25.005859 z M 48.390625 25.005859 L 51.482422 25.005859 L 54.404297 39.001953 L 51.054688 39.001953 L 50.615234 36.912109 L 45.972656 36.912109 L 45.216797 39.001953 L 41.417969 39.001953 L 46.849609 26.033203 C 47.110609 25.411203 47.695625 25.005859 48.390625 25.005859 z M 48.921875 28.785156 L 47.013672 34.042969 L 50.017578 34.042969 L 48.921875 28.785156 z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
<path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
</svg>
        </div>
        </div>
        </>
     );
}
 
export default Footer;