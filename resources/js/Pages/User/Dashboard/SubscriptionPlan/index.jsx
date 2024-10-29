import SubscriptionCard from "@/Components/SubscriptionCard"
import Authenticated from "@/Layouts/Authenticated/index"
import { router } from "@inertiajs/react"

export default function SubscriptionPlan ({auth, plans}) {
    console.log(plans)
    const selectSubscription = id => {
        router.post(route('user.dashboard.subscriptionPlan.userSubscribe', {
            subscriptionPlan: id,
        }));
    }

    return (<Authenticated auth={auth}>
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
                        {plans.map((plan) => (
                            
                            <SubscriptionCard 
                            key={plan.id} 
                            isPremium={plan.name === 'Premium'} name={plan.name} 
                            price={plan.p} 
                            duration={plan.active_period_in_months} 
                            features={JSON.parse(plan.features)}
                            onSelect={() => selectSubscription(plan.id)}
                            />
                        ))}
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </div>
        {/* <!-- END: Content --> */}
         </div>
    </Authenticated>)
}