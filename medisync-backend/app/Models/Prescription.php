<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    use HasFactory;

    protected $fillable = [
        'examination_id',
        'doctor_id',
        'status',
        'hold_reason',
        'tracking_code',
    ];

    // Relasi: Prescription milik satu Examination
    public function examination()
    {
        return $this->belongsTo(Examination::class);
    }

    // Relasi: Prescription milik satu Doctor (User)
    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }

    // Relasi: Prescription punya banyak PrescriptionItem
    public function items()
    {
        return $this->hasMany(PrescriptionItem::class);
    }
}
