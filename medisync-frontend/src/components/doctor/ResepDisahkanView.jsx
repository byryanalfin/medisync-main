export default function ResepDisahkanView({ onBackToDashboard }) {
  const kodeTracking = "MS-482731";

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">
          PORTAL DOKTER / RESEP
        </p>
        <h2 className="text-2xl font-bold text-slate-800">Resep Disahkan</h2>
        <p className="text-slate-500 text-sm mt-1">
          Tahap 3: Pengesahan berhasil pada 18 Feb 2025, 09:42 WIB •
          RSP-250218-042
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
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
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            Resep Berhasil Disahkan
          </h3>
          <p className="text-slate-500 text-sm mb-8">
            Resep telah dikirim ke instalasi farmasi.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Kode Tracking Pasien
            </p>
            <p className="text-4xl font-bold text-slate-900 font-mono">
              {kodeTracking}
            </p>
            <button className="mt-3 text-sm text-blue-600 font-medium hover:underline flex items-center gap-1 mx-auto">
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
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Salin Kode
            </button>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-teal-800 mb-1">
              Berikan kode ini kepada pasien
            </p>
            <p className="text-xs text-teal-600">
              Pasien melacak pelayanan obat di halaman publik tanpa login.
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={onBackToDashboard}
              className="px-6 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Kembali ke Dashboard
            </button>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-sm">
              Lihat Halaman Tracking
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-4">
              Informasi Resep
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-500">Dokter</p>
                <p className="font-semibold text-slate-800">dr. Andi Saputra</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Tanggal</p>
                <p className="font-semibold text-slate-800">
                  18 Feb 2025 • 09:42 WIB
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 tracking-wider uppercase">
                  Kode Tracking
                </p>
                <p className="text-2xl font-bold text-blue-600 font-mono">
                  {kodeTracking}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-4">
              Ringkasan Resep
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Hanya dapat dilihat • Siti Budiarti
            </p>
            <div className="space-y-3">
              <div className="pb-3 border-b border-slate-100">
                <p className="text-xs text-slate-500">Status Resep</p>
                <p className="text-sm font-semibold text-teal-600 flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Terkirim ke Farmasi
                </p>
              </div>
              <div className="pb-3 border-b border-slate-100">
                <p className="text-xs text-slate-500">
                  RM-2024-01892 • Rawat jalan
                </p>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Paracetamol 500 mg • 10 tablet
                  </p>
                  <p className="text-xs text-slate-500">
                    Dosis 500 mg • 3 x 1 sesudah makan
                  </p>
                  <p className="text-xs text-slate-500">
                    Catatan: Jika demam atau nyeri
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Cetirizine 10 mg • 5 tablet
                  </p>
                  <p className="text-xs text-slate-500">
                    Dosis 10 mg • 1 x 1 malam hari
                  </p>
                  <p className="text-xs text-slate-500">
                    Catatan: Dapat menyebabkan kantuk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
