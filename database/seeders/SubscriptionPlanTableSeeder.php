<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'p' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature1', 'feature2']),
            ],
            [
                'name' => 'Premium',
                'p' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode(['feature1', 'feature2', 'feature3', 'feature4']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
};

