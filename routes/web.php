<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('admin', function() {
//     return 'Hi Admin';
// })->middleware('role:admin');
// Route::get('user', function() {
//     return 'Hi User';
// })->middleware('role:user');

Route::redirect('/', '/login');

// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard/Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    Route::get('/',[DashboardController::class,'index'])->name('index');

    Route::get('movie/{movie:slug}',[MovieController::class,'show'])->name('movie.show')->middleware('checkUserSubscription:true');

    Route::get('subscription-plan',[SubscriptionPlanController::class,'index'])->name('subscriptionPlan.index')->middleware('checkUserSubscription:false');

    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe',[SubscriptionPlanController::class,'userSubscribe'])->name('subscriptionPlan.userSubscribe')->middleware('checkUserSubscription:false');

    Route::get('profile', function () {
        return Inertia::render(component: 'User/Dashboard/Profile');
    })->name('profile');
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/login', function () {
        return Inertia::render(component: 'Prototype/Login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscription-plan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscription-plan');

    route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});



require __DIR__.'/auth.php';
