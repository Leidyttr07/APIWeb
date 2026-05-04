<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('user.login');
});
Route::post('/users/login', [UserController::class, 'login'])->name('login');
Route::resource('/users', UserController::class);
Route::resource('/prod', ProductController::class);
