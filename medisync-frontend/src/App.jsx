import { useState } from "react";
import DashboardView from "./components/doctor/DashboardView";
import DaftarPasienView from "./components/doctor/DaftarPasienView";
import DetailPasienView from "./components/doctor/DetailPasienView";
import PemeriksaanView from "./components/doctor/PemeriksaanView";
import ResepElektronikView from "./components/doctor/ResepElektronikView";
import ResepDisahkanView from "./components/doctor/ResepDisahkanView";
import AdminDashboardView from "./components/admin/AdminDashboardView";
import TrackingPasienView from "./components/public/TrackingPasienView";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [currentView, setCurrentView] = useState("dashboard");
  const [role, setRole] = useState("dokter");

  const handleLogin = (e) => {
    e.preventDefault();
    // Jika role admin, masuk ke dashboard admin. Jika dokter, masuk dashboard dokter.
    if (role === "admin") {
      setCurrentPage("admin-portal");
    } else {
      setCurrentPage("dashboard");
    }
  };

  // --- HALAMAN LOGIN ---
  if (currentPage === "login") {
    return (
      <div className="flex min-h-screen w-full">
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0c2d48] via-[#145374] to-[#1a7a7a] text-white flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
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
            <span className="text-xl font-semibold tracking-wide font-sans">
              MediSync
            </span>
          </div>
          <div className="relative z-10 max-w-lg">
            <p className="text-teal-300 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              Sistem Pelayanan Terintegrasi
            </p>
            <h1 className="text-[56px] font-extralight leading-[1.1] mb-8 tracking-tight">
              Pelayanan resep lebih cepat, aman, dan transparan.
            </h1>
            <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-md">
              Menghubungkan dokter dan instalasi farmasi secara real-time untuk
              mengurangi waktu tunggu pasien.
            </p>
            <ul className="space-y-4">
              {[
                "Resep elektronik terintegrasi",
                "Status pelayanan real-time",
                "Tracking publik tanpa akun",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-100 text-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-teal-300"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-10 text-slate-400 text-sm">
            © 2025 RS Medika Utama - MediSync v1.0
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-blue-600 text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
                Akses Internal Rumah Sakit
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Masuk ke MediSync
              </h2>
              <p className="text-slate-500 text-sm">
                Silakan masuk menggunakan akun internal Anda.
              </p>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-xl mb-6 border border-slate-200">
              <button
                onClick={() => setRole("dokter")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${role === "dokter" ? "bg-white text-blue-600 shadow-sm border border-slate-200" : "text-slate-500"}`}
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Dokter
              </button>
              <button
                onClick={() => setRole("admin")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${role === "admin" ? "bg-white text-blue-600 shadow-sm border border-slate-200" : "text-slate-500"}`}
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Admin Apoteker
              </button>
            </div>
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 text-sm"
                  placeholder="dr.andisaputra"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 text-sm"
                  placeholder="Masukkan kata sandi"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm flex items-center justify-center gap-2 mt-2 text-sm"
              >
                Masuk{" "}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
            <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Butuh bantuan untuk masuk?
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Hubungi Administrator SIMRS di ext. 120.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500 mb-1">Anda pasien?</p>
              <a
                onClick={() => setCurrentPage("tracking")}
                className="text-blue-600 font-medium text-sm hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                Lacak pelayanan obat tanpa login
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
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- HALAMAN ADMIN APOTEKER ---
  if (currentPage === "admin-portal") {
    return (
      <div className="flex min-h-screen bg-slate-50 font-sans">
        {/* Sidebar Admin (Warna bisa kita buat agak beda, misal Teal Gelap) */}
        <aside className="w-64 bg-[#0f3d3e] text-white flex flex-col fixed h-full">
          <div className="p-6 flex items-center gap-3 border-b border-white/10">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold">MediSync Farmasi</span>
          </div>
          <div className="p-4 mx-4 mt-6 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center font-bold text-sm">
              AP
            </div>
            <div>
              <p className="text-sm font-semibold">Apoteker Jaga</p>
              <p className="text-xs text-slate-400">Instalasi Farmasi</p>
            </div>
          </div>
          <nav className="flex-1 mt-8 px-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-teal-600 text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Dashboard Resep
            </button>
          </nav>
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => setCurrentPage("login")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content Admin */}
        <div className="flex-1 ml-64 flex flex-col">
          <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
            <div>
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                Rumah Sakit Medika Utama
              </p>
              <h1 className="text-lg font-semibold text-slate-800 -mt-1">
                Portal Apoteker
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                AP
              </div>
            </div>
          </header>
          <main className="p-8 flex-1 overflow-y-auto">
            <AdminDashboardView />
          </main>
        </div>
      </div>
    );
  }

  // --- HALAMAN TRACKING PASIEN PUBLIK ---
  if (currentPage === "tracking") {
    return <TrackingPasienView onBackToLogin={() => setCurrentPage("login")} />;
  }

  // --- LAYOUT DASHBOARD ---
  const menuItems = [
    {
      name: "Dashboard",
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      view: "dashboard",
    },
    {
      name: "Pasien",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      view: "pasien",
    },
    {
      name: "Pemeriksaan",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      view: "pemeriksaan",
    },
    {
      name: "Resep",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      view: "resep",
    },
    {
      name: "Riwayat",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      view: "riwayat",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <aside className="w-64 bg-[#0f2b46] text-white flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
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
          <span className="text-lg font-semibold">MediSync</span>
        </div>
        <div className="p-4 mx-4 mt-6 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
            AS
          </div>
          <div>
            <p className="text-sm font-semibold">dr. Andi Saputra</p>
            <p className="text-xs text-slate-400">Dokter Umum</p>
          </div>
        </div>
        <nav className="flex-1 mt-8 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentView(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentView === item.view
                  ? "bg-blue-700 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
              {item.name}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setCurrentPage("login")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 ml-64 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div>
            <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
              Rumah Sakit Medika Utama
            </p>
            <h1 className="text-lg font-semibold text-slate-800 -mt-1">
              Portal Dokter
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Tracking Publik
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              AS
            </div>
          </div>
        </header>

        <main className="p-8 flex-1 overflow-y-auto">
          {currentView === "dashboard" && <DashboardView />}
          {currentView === "pasien" && (
            <DaftarPasienView
              onDetail={() => setCurrentView("detail-pasien")}
            />
          )}
          {currentView === "detail-pasien" && (
            <DetailPasienView
              onStartExam={() => setCurrentView("pemeriksaan")}
            />
          )}
          {currentView === "pemeriksaan" && (
            <PemeriksaanView onNext={() => setCurrentView("resep")} />
          )}
          {currentView === "resep" && (
            <ResepElektronikView
              onSahkan={() => setCurrentView("resep-disahkan")}
            />
          )}
          {currentView === "resep-disahkan" && (
            <ResepDisahkanView
              onBackToDashboard={() => setCurrentView("dashboard")}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
