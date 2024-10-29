<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SubscriptionPlan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'p', 'active_period_in_months', 'features'];
}
