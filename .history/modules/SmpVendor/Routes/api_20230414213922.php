<?php

use App\Http\Controllers\Dashboard\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/vendors', [ VendorsController::class, 'getUsers' ]);
Route::put('/users/roles', [ UsersController::class, 'updateRole' ]);
Route::get('/users/roles/{role}/clone', [ UsersController::class, 'cloneRole' ]);
Route::get('/users/permissions', [ UsersController::class, 'getPermissions' ]);
