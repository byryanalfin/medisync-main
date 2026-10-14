export default function DaftarPasienView({ onDetail }) {
  const patients = [
    {
      no: "01",
      name: "Ahmad Rizki",
      rm: "RM-2023-01451",
      visit: "Laki-laki · 28 tahun",
      time: "09:45 WIB",
      status: "Menunggu Pemeriksaan",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      no: "02",
      name: "Budi Santoso",
      rm: "RM-2023-02114",
      visit: "Laki-laki · 46 tahun",
      time: "09:35 WIB",
      status: "Menunggu Pemeriksaan",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      no: "03",
      name: "Siti Budiarti",
      rm: "RM-2024-01892",
      visit: "Perempuan · 34 tahun",
      time: "09:30 WIB",
      status: "Menunggu Pemeriksaan",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      no: "04",
      name: "Dedi Kurniawan",
      rm: "RM-2024-00215",
      visit: "Laki-laki · 39 tahun",
      time: "08:55 WIB",
      status: "Selesai Pemeriksaan",
      statusColor: "bg-slate-100 text-slate-600",
    },
    {
      no: "05",
      name: "Lina Novitasari",
      rm: "RM-2022-00981",
      visit: "Perempuan · 31 tahun",
      time: "08:40 WIB",
      status: "Selesai Pemeriksaan",
      statusColor: "bg-slate-100 text-slate-600",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">
          PORTAL DOKTER / PASIEN
        </p>
        <h2 className="text-2xl font-bold text-slate-800">Daftar Pasien</h2>
        <p className="text-slate-500 text-sm mt-1">
          Temukan pasien dan lanjutkan pemeriksaan rawat jalan hari ini.
        </p>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">
            Pasien Kunjungan Hari Ini
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Tahap sebelum pemeriksaan • 24 pasien terjadwal • 6 menunggu
            pemeriksaan
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block text-xs font-medium text-slate-500 mb-1.5">
              Pencarian
            </label>
            <div className="relative">
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Cari nama pasien atau nomor rekam medis"
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">
              Status
            </label>
            <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option>Semua pemeriksaan</option>
              <option>Menunggu Pemeriksaan</option>
              <option>Selesai Pemeriksaan</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">
              Tanggal
            </label>
            <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option>18 Feb 2025</option>
              <option>17 Feb 2025</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-medium text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-2">No</th>
                <th className="py-3 px-2">Nama Pasien</th>
                <th className="py-3 px-2">No. Rekam Medis</th>
                <th className="py-3 px-2">Kunjungan</th>
                <th className="py-3 px-2">Waktu</th>
                <th className="py-3 px-2">Pemeriksaan</th>
                <th className="py-3 px-2 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {patients.map((p, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="py-4 px-2 text-slate-500">{p.no}</td>
                  <td className="py-4 px-2 font-semibold text-slate-800">
                    {p.name}
                  </td>
                  <td className="py-4 px-2 text-slate-600 font-mono text-xs">
                    {p.rm}
                  </td>
                  <td className="py-4 px-2 text-slate-600">{p.visit}</td>
                  <td className="py-4 px-2 text-slate-600">{p.time}</td>
                  <td className="py-4 px-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${p.statusColor}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-right">
                    <button
                      onClick={onDetail}
                      className="text-blue-600 font-medium hover:underline text-xs"
                    >
                      Detail Pasien
                    </button>
                    {p.status === "Menunggu Pemeriksaan" && (
                      <span className="text-slate-300 mx-1">·</span>
                    )}
                    {p.status === "Menunggu Pemeriksaan" && (
                      <button className="text-blue-600 font-medium hover:underline text-xs">
                        Periksa
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">Menampilkan 1–5 dari 24 data</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg">
              ‹ Sebelumnya
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white text-xs font-medium rounded-lg">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs font-medium rounded-lg">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs font-medium rounded-lg">
              3
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
              Berikutnya ›
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-3">
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
          Data pasien digunakan untuk pelayanan internal. Pilih{" "}
          <span className="font-semibold text-slate-800">Detail Pasien</span>{" "}
          untuk melihat riwayat ringkas, atau{" "}
          <span className="font-semibold text-slate-800">Periksa</span> untuk
          memulai pemeriksaan.
        </p>
      </div>
    </div>
  );
}
