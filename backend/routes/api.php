<?php

use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('/auth')->group(
    function()
    {

        Route::controller(userController::class)->group(
            function(){
                Route::post('/register','register');
                Route::post('/login','login');
                Route::post('/logout','logout');
            }
        );

        Route::middleware(['auth:sanctum'])->group(
            function () {
                Route::controller(userController::class)->group(
                    function () {
                        Route::get('/users', 'getUsers');
                    }
                );
            }
        );
    }
);

