<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Prescription;
use App\Models\PrescriptionItem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PrescriptionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'examination_id' => 'required|exists:examinations,id',
            'doctor_id' => 'required|exists:users,id',
            'status' => 'required|in:draft,on_hold,approved',
            'hold_reason' => 'nullable|string',
            'items' => 'required|array|min:1',
            'items.*.drug_name' => 'required|string',
            'items.*.quantity' => 'required|string',
            'items.*.dosage' => 'required|string',
            'items.*.instructions' => 'required|string',
            'items.*.notes' => 'nullable|string',
        ]);

        // Generate kode tracking jika status approved
        $trackingCode = null;
        if ($validated['status'] === 'approved') {
            $trackingCode = 'MS-' . strtoupper(Str::random(6));
        }

        // Simpan resep utama
        $prescription = Prescription::create([
            'examination_id' => $validated['examination_id'],
            'doctor_id' => $validated['doctor_id'],
            'status' => $validated['status'],
            'hold_reason' => $validated['hold_reason'] ?? null,
            'tracking_code' => $trackingCode,
        ]);

        // Simpan item obat
        foreach ($validated['items'] as $item) {
            PrescriptionItem::create([
                'prescription_id' => $prescription->id,
                'drug_name' => $item['drug_name'],
                'quantity' => $item['quantity'],
                'dosage' => $item['dosage'],
                'instructions' => $item['instructions'],
                'notes' => $item['notes'] ?? null,
            ]);
        }

        // Load items untuk response
        $prescription->load('items');

        return response()->json([
            'success' => true,
            'message' => 'Resep berhasil disimpan',
            'data' => [
                'prescription' => $prescription,
                'tracking_code' => $trackingCode
            ]
        ], 201);
    }

    public function index()
    {
        $prescriptions = Prescription::with(['doctor', 'examination.patient', 'items'])
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $prescriptions
        ]);
    }

    public function show($id)
    {
        $prescription = Prescription::with(['doctor', 'examination.patient', 'items'])->find($id);

        if (!$prescription) {
            return response()->json([
                'success' => false,
                'message' => 'Resep tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $prescription
        ]);
    }

    public function update(Request $request, $id)
    {
        $prescription = Prescription::find($id);

        if (!$prescription) {
            return response()->json([
                'success' => false,
                'message' => 'Resep tidak ditemukan'
            ], 404);
        }

        $validated = $request->validate([
            'status' => 'required|in:draft,on_hold,approved',
            'hold_reason' => 'nullable|string',
        ]);

        // Generate tracking code jika status berubah jadi approved
        if ($validated['status'] === 'approved' && !$prescription->tracking_code) {
            $validated['tracking_code'] = 'MS-' . strtoupper(Str::random(6));
        }

        $prescription->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Resep berhasil diupdate',
            'data' => $prescription
        ]);
    }

    public function track($code)
    {
        $prescription = Prescription::with(['items', 'examination.patient', 'doctor'])
            ->where('tracking_code', $code)
            ->first();

        if (!$prescription) {
            return response()->json([
                'success' => false,
                'message' => 'Kode tracking tidak ditemukan',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'tracking_code' => $prescription->tracking_code,
                'status' => $prescription->status,
                'patient_name' => $prescription->examination?->patient?->name,
                'rm_number' => $prescription->examination?->patient?->rm_number,
                'doctor_name' => $prescription->doctor?->name,
                'items' => $prescription->items,
            ],
        ]);
    }
}
