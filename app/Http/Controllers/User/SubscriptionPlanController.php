<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Illuminate\Http\Request;
use Carbon\Carbon;

class SubscriptionPlanController extends Controller
{
    public function index() {
        return inertia('User/Dashboard/SubscriptionPlan/index',['plans' => SubscriptionPlan::all()]);
    }   

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan) {
        $data = [
            'user_id'=> Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'p' => $subscriptionPlan->p,
            'expired_date'=> Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status'=> 'paid',
        ];

        $userSubscription = UserSubscription::create($data);
        echo'subs'. $userSubscription .'subs';

        return redirect(route('user.dashboard.index'));
        // return $userSubscription;
    }
}
