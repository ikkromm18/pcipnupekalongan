<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia('Home');
// });

Route::get('/', [BerandaController::class, 'index'])->name('beranda.index');

Route::get('/news', [NewsController::class, 'index'])->name('news.index');

Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
