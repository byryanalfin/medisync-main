<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\ExaminationController;
use App\Http\Controllers\Api\PrescriptionController;
use Illuminate\Support\Facades\Route;

// Public: Login
Route::post('/login', [AuthController::class, 'login']);

// Public: tracking tanpa login
Route::get('/tracking/{code}', [PrescriptionController::class, 'track']);

// Protected: Semua endpoint membutuhkan token
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Pasien - CRUD lengkap
    Route::get('/patients', [PatientController::class, 'index']);
    Route::get('/patients/{id}', [PatientController::class, 'show']);
    Route::post('/patients', [PatientController::class, 'store']);
    Route::put('/patients/{id}', [PatientController::class, 'update']);
    Route::delete('/patients/{id}', [PatientController::class, 'destroy']);

    // Pemeriksaan
    Route::get('/examinations/patient/{patientId}', [ExaminationController::class, 'byPatient']);
    Route::get('/examinations/{id}', [ExaminationController::class, 'show']);
    Route::post('/examinations', [ExaminationController::class, 'store']);

    // Resep
    Route::get('/prescriptions', [PrescriptionController::class, 'index']);
    Route::get('/prescriptions/{id}', [PrescriptionController::class, 'show']);
    Route::post('/prescriptions', [PrescriptionController::class, 'store']);
    Route::put('/prescriptions/{id}', [PrescriptionController::class, 'update']);
});
