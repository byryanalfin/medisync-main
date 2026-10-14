export default function DetailPasienView({ onStartExam }) {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">
            PORTAL DOKTER / PASIEN
          </p>
          <h2 className="text-2xl font-bold text-slate-800">Detail Pasien</h2>
          <p className="text-slate-500 text-sm mt-1">
            Siti Budiarti • RM-2024-01892 • Kunjungan 18 Feb 2025, 09:30 WIB
          </p>
        </div>
        <button
          onClick={onStartExam}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm"
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          Mulai Pemeriksaan
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Identitas Pasien
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-500 text-xs">Nama Lengkap</p>
                <p className="font-semibold text-slate-800">Siti Budiarti</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs">No. Rekam Medis</p>
                <p className="font-semibold text-slate-800 font-mono">
                  RM-2024-01892
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-500 text-xs">Usia</p>
                  <p className="font-semibold text-slate-800">34 tahun</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Jenis Kelamin</p>
                  <p className="font-semibold text-slate-800">Perempuan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Riwayat Ringkas
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Tidak ada penyakit kronis. Tidak minum obat rutin.
            </p>
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-xs font-bold text-red-700 mb-1">
                Alergi Tercatat
              </p>
              <p className="text-sm font-semibold text-red-800">Amoxicillin</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Kunjungan Saat Ini
            </h3>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 mb-6">
              <svg
                className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
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
              <div>
                <p className="text-sm font-bold text-red-800">
                  Peringatan Alergi: Amoxicillin
                </p>
                <p className="text-xs text-red-600 mt-1">
                  Hindari zat pemicu alergi. Periksa kembali riwayat sebelum
                  meresepkan.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-slate-500 mb-1">
                  Keluhan Utama
                </p>
                <p className="text-sm text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  Demam, batuk kering, nyeri tenggorokan sejak 3 hari.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Kunjungan & Resep Sebelumnya
            </h3>
            <div className="space-y-4">
              {[
                {
                  date: "10 Feb 2025",
                  title: "Kontrol rawat jalan",
                  code: "RSP-250210-019",
                },
                {
                  date: "21 Jan 2025",
                  title: "Konsultasi poli umum",
                  code: "RSP-250121-011",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.date} • {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">
                      {item.code} • Terkirim ke Farmasi
                    </p>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
