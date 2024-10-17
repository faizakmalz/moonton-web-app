import SubscriptionCard from "@/Components/SubscriptionCard"
import Authenticated from "@/Layouts/Authenticated/index"

export default function SubscriptionPlan () {
    return (<Authenticated>
         <div className="mx-auto max-w-screen hidden lg:block">
    
            {/* <!-- START: Content --> */}
            <div className="px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    {/* <!-- Pricing Card --> */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {/* <!-- Basic --> */}
                        <SubscriptionCard name={'Basic'} price={290000} duration={3} features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}/>

                        {/* <!-- For Greatest --> */}
                        <SubscriptionCard name={'Premium'} price={800000} duration={3} features={['Premium Feature 1', 'Premium Feature 2', 'Premium Feature 3', 'Premium Feature 4']} isPremium/>
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </div>
        {/* <!-- END: Content --> */}
         </div>
    </Authenticated>)
}