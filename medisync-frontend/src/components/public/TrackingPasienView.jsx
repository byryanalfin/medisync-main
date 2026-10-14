import { useState } from "react";

export default function TrackingPasienView({ onBackToLogin }) {
  const [kodeInput, setKodeInput] = useState("");
  const [hasilTracking, setHasilTracking] = useState(null);

  // Simulasi database tracking
  const dummyTracking = {
    "MS-482731": {
      pasien: "Siti Budiarti",
      dokter: "dr. Andi Saputra",
      tanggal: "18 Feb 2025, 09:42 WIB",
      status: "Sedang Diracik",
      langkah: [
        { nama: "Resep Dibuat", waktu: "09:42 WIB", selesai: true },
        { nama: "Diterima Farmasi", waktu: "09:45 WIB", selesai: true },
        {
          nama: "Sedang Diracik",
          waktu: "10:15 WIB",
          selesai: true,
          aktif: true,
        },
        { nama: "Siap Diambil", waktu: "-", selesai: false },
      ],
    },
  };

  const cariTracking = (e) => {
    e.preventDefault();
    const data = dummyTracking[kodeInput.toUpperCase()];
    if (data) {
      setHasilTracking(data);
    } else {
      alert("Kode tracking tidak ditemukan. Coba: MS-482731");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0c2d48] to-[#1a7a7a] rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">MediSync</h1>
              <p className="text-xs text-slate-500">Tracking Pelayanan Obat</p>
            </div>
          </div>
          <button
            onClick={onBackToLogin}
            className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-3">
            Lacak Status Resep Anda
          </h2>
          <p className="text-slate-500 text-lg">
            Masukkan kode tracking yang diberikan oleh dokter untuk melihat
            status pelayanan obat.
          </p>
        </div>

        {/* Form Input */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <form onSubmit={cariTracking} className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Kode Tracking
              </label>
              <input
                type="text"
                value={kodeInput}
                onChange={(e) => setKodeInput(e.target.value)}
                placeholder="Contoh: MS-482731"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
              >
                Lacak
              </button>
            </div>
          </form>
          <p className="text-xs text-slate-400 mt-3">
            💡 Coba kode:{" "}
            <span className="font-mono text-blue-600">MS-482731</span>
          </p>
        </div>

        {/* Hasil Tracking */}
        {hasilTracking && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            {/* Info Pasien */}
            <div className="border-b border-slate-200 pb-6 mb-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                Informasi Resep
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Nama Pasien</p>
                  <p className="font-semibold text-slate-800">
                    {hasilTracking.pasien}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Dokter</p>
                  <p className="font-semibold text-slate-800">
                    {hasilTracking.dokter}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Tanggal Resep</p>
                  <p className="font-semibold text-slate-800">
                    {hasilTracking.tanggal}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Status Saat Ini</p>
                  <p className="font-semibold text-amber-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                    {hasilTracking.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-6">
                Progress Pelayanan
              </h3>
              <div className="relative">
                {hasilTracking.langkah.map((step, idx) => (
                  <div key={idx} className="flex gap-4 mb-6 last:mb-0">
                    {/* Garis & Dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.selesai && step.aktif
                            ? "bg-amber-500 ring-4 ring-amber-100"
                            : step.selesai
                              ? "bg-teal-500"
                              : "bg-slate-200"
                        }`}
                      >
                        {step.selesai && !step.aktif && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                        {step.aktif && (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                      {idx < hasilTracking.langkah.length - 1 && (
                        <div
                          className={`w-0.5 h-full ${step.selesai ? "bg-teal-500" : "bg-slate-200"}`}
                        ></div>
                      )}
                    </div>

                    {/* Konten */}
                    <div className="flex-1 pb-6">
                      <p
                        className={`font-semibold ${
                          step.aktif
                            ? "text-amber-600 text-lg"
                            : step.selesai
                              ? "text-slate-800"
                              : "text-slate-400"
                        }`}
                      >
                        {step.nama}
                      </p>
                      <p
                        className={`text-sm mt-1 ${step.selesai ? "text-slate-500" : "text-slate-400"}`}
                      >
                        {step.waktu !== "-" ? step.waktu : "Menunggu..."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-3">
              <svg
                className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Estimasi waktu:</span> Obat akan
                siap diambil dalam 30-45 menit setelah status "Siap Diambil".
                Tunjukkan kode tracking ini ke petugas farmasi.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12 py-6 text-center text-sm text-slate-500">
        <p>MediSync - RS Medika Utama - Sistem Tracking Pelayanan Obat</p>
      </footer>
    </div>
  );
}
