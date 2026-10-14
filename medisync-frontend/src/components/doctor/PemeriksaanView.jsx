export default function PemeriksaanView({ onNext }) {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">
          PORTAL DOKTER / PEMERIKSAAN
        </p>
        <h2 className="text-2xl font-bold text-slate-800">
          Pemeriksaan Pasien
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Tahap 1: Pemeriksaan rawat jalan sebelum pembuatan resep
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">
            Form Pemeriksaan
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                Nama Pasien
              </label>
              <input
                type="text"
                value="Siti Budiarti"
                readOnly
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 text-slate-600"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                No. Rekam Medis
              </label>
              <input
                type="text"
                value="RM-2024-01892"
                readOnly
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 text-slate-600 font-mono"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                Keluhan
              </label>
              <textarea
                rows="2"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                defaultValue="Demam, batuk kering, nyeri tenggorokan sejak 3 hari."
              ></textarea>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                Riwayat Penyakit
              </label>
              <textarea
                rows="2"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                defaultValue="Tidak ada penyakit kronis."
              ></textarea>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">
                Diagnosis
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Contoh: Infeksi Saluran Pernapasan Akut (ISPA)"
              />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-700 mb-3">
                Keputusan Perawatan
              </p>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center gap-3 p-4 border-2 border-teal-500 bg-teal-50 rounded-lg cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-4 border-teal-500 bg-white"></div>
                  <span className="font-semibold text-teal-700">
                    Rawat Jalan
                  </span>
                </label>
                <label className="flex-1 flex items-center gap-3 p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                  <span className="font-medium text-slate-600">Rawat Inap</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
            <button className="px-6 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50">
              Simpan Pemeriksaan
            </button>
            <button
              onClick={onNext}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-sm"
            >
              Lanjut ke Resep ›
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-3">
              Pengingat Keselamatan
            </h3>
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-2">
              <svg
                className="w-5 h-5 text-red-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-xs text-red-700 font-medium">
                Alergi: Amoxicillin. Hindari zat pemicu.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-3">
              Alur Rawat Jalan
            </h3>
            <ol className="relative border-l border-slate-200 ml-2 space-y-4">
              <li className="mb-2 ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <p className="text-sm font-semibold text-slate-800">
                  1. Pemeriksaan pasien
                </p>
                <p className="text-xs text-slate-500">Sedang berlangsung</p>
              </li>
              <li className="mb-2 ml-4">
                <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <p className="text-sm font-medium text-slate-500">
                  2. Buat resep elektronik
                </p>
              </li>
              <li className="mb-2 ml-4">
                <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <p className="text-sm font-medium text-slate-500">
                  3. Sahkan resep
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <p className="text-sm font-medium text-slate-500">
                  4. Sistem kirim ke farmasi
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
