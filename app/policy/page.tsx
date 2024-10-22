'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa6";
const Policy = () => {
    const route = useRouter()
    return ( 
        <main className="bg-black flex gap-2 items-center flex-col overflow-y-auto text-white font-semibold w-full h-auto">
             <div  className="h-16 w-full sm:text-2xl gap-1 cursor-pointer bg-gray-900 flex items-center justify-center relative">
                <span onClick={()=>(route.back())} className="absolute hover:opacity-90 size-10 flex items-center justify-center cursor-pointer bg-green-600 rounded-full right-1 top-2">
                    <FaBackward color="black" />
                </span>
                <Image onClick={()=>(route.push('/'))}
                className="rounded-full sm:size-14"
                src={'/DdLogo.png'}
                width={24}
                height={24}
                priority={true}
                alt="logo"
                />
                 Daily Dash</div>
            <span className="text-xl font-bold w-[80%] border-b-2 border-green-700 pb-2 text-center">Terms of Service and Privacy Policy</span>
            <p className="p-2 items-start flex flex-col">

            <strong>
            *Last updated: October 16, 2024*
                </strong>

<strong className="text-xl">1. **Account Creation:**</strong> To use DailyDash services, you must create an account with a valid email address and password. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.

 <strong className="text-xl">2.**Organic Meat and Vegetables:**</strong> DailyDash sells organic meat and vegetables. We strive to ensure that all products are accurately represented on our website. However, we do not guarantee the absolute accuracy or completeness of our product descriptions.

 <strong className="text-xl">3.**Payment:**</strong> All payments must be made through the DailyDash website. We accept various payment methods, including credit cards and digital wallets. By providing your payment information, you authorize us to charge the amount due to the payment method you have selected.

 <strong className="text-xl">4.**Shipping and Delivery:**</strong> We ship all products via reliable courier services. Shipping costs are calculated at checkout. Delivery times may vary depending on your location. We are not responsible for delays due to unforeseen circumstances, such as weather conditions or courier service issues.

 <strong className="text-xl">5.**Returns and Refunds:**</strong> If you are not satisfied with your purchase, you may return it within 14 days of receipt for a refund. The product must be in its original condition, with all packaging and tags intact. Refunds will be issued to the original payment method.

 <strong className="text-xl">6.**User Conduct:**</strong> You agree not to use DailyDash for any illegal or unauthorized purpose. You are solely responsible for your conduct and any data, text, information, screennames, videos, or other content that you submit, post, or display on or via DailyDash.

 <strong className="text-xl">7.**Termination:*</strong> We reserve the right to suspend or terminate your account and refuse any and all current or future use of DailyDash services for any reason at any time.

 <strong className="text-xl">8.**Changes to Terms of Use:**</strong> We reserve the right to update and change these Terms of Use from time to time without notice. Any new features that augment or enhance the current DailyDash service, including the release of new tools and resources, shall be subject to these Terms of Use.

 <strong className="text-xl">9.**Governing Law:**</strong> These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which the company is registered.

Please review these Terms of Use carefully. If you have any questions, please contact us at [support@dailydash.com](mailto:support@dailydash.com). By using DailyDash, you signify your assent to these Terms of Use.


            </p>
        </main>
     );
}
 
export default Policy;