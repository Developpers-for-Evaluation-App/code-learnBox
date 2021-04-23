<?php

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::post('/register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){

    Route::get('/user', [\App\Http\Controllers\AuthController::class, 'user']);

});

Route::post('/createSalle', [\App\Http\Controllers\SalleController::class, 'store']);
Route::get('salle/{id}', [\App\Http\Controllers\SalleController::class, 'getSalleById']);
Route::delete('deleteSalle/{id}', [\App\Http\Controllers\SalleController::class, 'deleteSalle']);
Route::get('/allSalles', [\App\Http\Controllers\SalleController::class, 'index']);
Route::put('setSalle/{id}', [\App\Http\Controllers\SalleController::class, 'updateSalle']);

Route::post('/createStudent', [\App\Http\Controllers\StudentController::class, 'store']);
Route::delete('deleteStudent/{id}', [\App\Http\Controllers\StudentController::class, 'destroy']);
Route::get('allStudents/{id}', [\App\Http\Controllers\StudentController::class, 'index']);


