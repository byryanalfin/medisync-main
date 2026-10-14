export default function DashboardView() {
  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-xs font-bold text-teal-600 tracking-wider uppercase mb-1">
            Selasa, 18 Februari 2025
          </p>
          <h2 className="text-2xl font-bold text-slate-800">
            Selamat datang, dr. Andi Saputra
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Berikut ringkasan pelayanan pasien Anda hari ini.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
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
      <div className="grid grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Pasien Hari Ini",
            value: "24",
            sub: "+3 dari kemarin",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            title: "Menunggu Pemeriksaan",
            value: "6",
            sub: "Perlu ditangani",
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            color: "text-amber-600",
            bg: "bg-amber-50",
          },
          {
            title: "Resep Hari Ini",
            value: "18",
            sub: "Hari ini",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            color: "text-purple-600",
            bg: "bg-purple-50",
          },
          {
            title: "Resep Terkirim ke Farmasi",
            value: "15",
            sub: "83% dari resep",
            icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
            color: "text-teal-600",
            bg: "bg-teal-50",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}
              >
                <svg
                  className={`w-5 h-5 ${stat.color}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.icon}
                  />
                </svg>
              </div>
              <p className="text-xs font-medium text-slate-500">{stat.title}</p>
            </div>
            <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Antrean Pemeriksaan
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                6 pasien menunggu • Urutan berdasarkan waktu kunjungan
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                name: "Dewi Anggraini",
                rm: "RM-2025-00217",
                time: "10:20 WIB",
                action: "Mulai Pemeriksaan",
                primary: true,
              },
              {
                name: "Hendra Prakoso",
                rm: "RM-2024-00642",
                time: "10:30 WIB",
                action: "Periksa",
                primary: false,
              },
              {
                name: "Putri Ramadhani",
                rm: "RM-2025-00128",
                time: "10:45 WIB",
                action: "Periksa",
                primary: false,
              },
            ].map((patient, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 transition"
              >
                <div>
                  <p className="font-semibold text-slate-800">{patient.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {patient.rm} • {patient.time}
                  </p>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${patient.primary ? "bg-blue-600 text-white hover:bg-blue-700" : "text-blue-600 hover:bg-blue-50"}`}
                >
                  {patient.action}
                </button>
              </div>
            ))}
          </div>
          <button className="text-sm text-blue-600 font-medium mt-4 hover:underline flex items-center gap-1">
            Lihat semua pasien menunggu{" "}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800">
              Resep Disahkan Terbaru
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Resep otomatis terkirim ke instalasi farmasi
            </p>
          </div>
          <div className="space-y-4 flex-1">
            {[
              {
                name: "Siti Budiarti",
                rsp: "RSP-250218-042",
                time: "09:42 WIB",
              },
              {
                name: "Lina Novitasari",
                rsp: "RSP-250218-031",
                time: "09:10 WIB",
              },
              {
                name: "Rina Wulandari",
                rsp: "RSP-250218-028",
                time: "08:58 WIB",
              },
            ].map((resep, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-slate-100 last:border-0 last:pb-0"
              >
                <p className="font-semibold text-slate-800 text-sm">
                  {resep.name}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {resep.rsp} • {resep.time}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <svg
                    className="w-3.5 h-3.5 text-teal-500"
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
                  <span className="text-xs text-teal-600 font-medium">
                    Terkirim ke Farmasi
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition mt-6">
            Buat Resep
          </button>
        </div>
      </div>
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
          <span className="font-semibold text-slate-800">Alur pelayanan:</span>{" "}
          pemeriksaan → resep rawat jalan → pengesahan dokter → antrean farmasi.
          Kode tracking dibuat otomatis setelah resep disahkan.
        </p>
      </div>
    </div>
  );
}
