import { useState } from "react";

export default function ResepElektronikView({ onSahkan }) {
  const [obatList, setObatList] = useState([
    {
      nama: "Paracetamol 500 mg",
      jumlah: "10 tablet",
      dosis: "500 mg",
      aturan: "3 x 1 sesudah makan",
      catatan: "Jika demam atau nyeri",
    },
    {
      nama: "Cetirizine 10 mg",
      jumlah: "5 tablet",
      dosis: "10 mg",
      aturan: "1 x 1 malam hari",
      catatan: "Dapat menyebabkan kantuk",
    },
  ]);

  const tambahObat = () => {
    setObatList([
      ...obatList,
      { nama: "", jumlah: "", dosis: "", aturan: "", catatan: "" },
    ]);
  };

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">
          PORTAL DOKTER / RESEP
        </p>
        <h2 className="text-2xl font-bold text-slate-800">Resep Elektronik</h2>
        <p className="text-slate-500 text-sm mt-1">
          Tahap 2: Draft resep rawat jalan • Pemeriksaan telah disimpan •
          Diagnosis ISPA
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Form Resep</h3>
          <p className="text-xs text-slate-500 mb-6">
            Lengkapi jumlah, dosis, aturan pakai, dan catatan obat.
          </p>
          <div className="space-y-6">
            {obatList.map((obat, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-4"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Nama Obat
                    </label>
                    <input
                      type="text"
                      defaultValue={obat.nama}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Contoh: Paracetamol 500 mg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Jumlah
                    </label>
                    <input
                      type="text"
                      defaultValue={obat.jumlah}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="10 tablet"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">
                      Dosis
                    </label>
                    <input
                      type="text"
                      defaultValue={obat.dosis}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="500 mg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">
                    Aturan Pakai
                  </label>
                  <input
                    type="text"
                    defaultValue={obat.aturan}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="3 x 1 sesudah makan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">
                    Catatan
                  </label>
                  <input
                    type="text"
                    defaultValue={obat.catatan}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Catatan tambahan (opsional)"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={tambahObat}
              className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center gap-2"
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
              Tambah Obat Lain
            </button>
          </div>
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
            <button className="px-6 py-2.5 border border-slate-300 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50">
              Simpan Draft
            </button>
            <button
              onClick={onSahkan}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-sm"
            >
              Ajukan / Sahkan Resep
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-4">
              Informasi Pasien
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-500">Nama Pasien</p>
                <p className="font-semibold text-slate-800">Siti Budiarti</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">No. Rekam Medis</p>
                <p className="font-semibold text-slate-800 font-mono">
                  RM-2024-01892
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-2">
              <svg
                className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5"
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
                Alergi: Amoxicillin — hindari zat pemicu alergi.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-3">
              Konfirmasi Pengesahan Resep
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Resep yang telah disahkan akan dikirim ke instalasi farmasi dan
              tidak dapat dihapus.
            </p>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-xs text-blue-700">
                <span className="font-semibold">Kode tracking unik</span> dibuat
                otomatis setelah pengesahan.
              </p>
            </div>
            <button
              onClick={onSahkan}
              className="w-full mt-4 bg-teal-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-teal-700 transition shadow-sm"
            >
              SAHKAN RESEP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
