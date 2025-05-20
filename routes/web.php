<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia('Home');
});

Route::get('/news', function () {
    return Inertia('News');
});

Route::get('/profile', function () {
    return Inertia('Profile');
});

Route::get('/contact', function () {
    return Inertia('Contact');
});

// Route::get('/', [BerandaController::class, 'index'])->name('beranda.index');
