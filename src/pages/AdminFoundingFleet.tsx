import React, { useState, useEffect } from 'react';
import {
  Search,
  Download,
  Eye,
  RefreshCw,
  LogOut,
  Car,
  Phone,
  CheckCircle2,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  Lock,
  Link as LinkIcon,
  Save,
} from 'lucide-react';
import {
  fetchAdminStats,
  fetchAdminRegistrations,
  fetchAdminRegistrationDetail,
  updateAdminRegistration,
  manualLinkRegistration,
  exportCsv,
} from '../lib/api';
import type { FoundingFleetStats, RegistrationRecord } from '../lib/api';

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PRE_REGISTERED: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  CONTACTED: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  ONBOARDING_PENDING: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  ONBOARDED: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  WITHDRAWN: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' },
};

const CATEGORIES = [
  'ALL',
  'Hatchback',
  'Sedan',
  'SUV',
  'MUV',
  'Premium Vehicle',
  'Tempo Traveller',
  'Mini Bus',
  'Bus',
  'Other',
];

const STATUSES = ['ALL', 'PRE_REGISTERED', 'CONTACTED', 'ONBOARDING_PENDING', 'ONBOARDED', 'WITHDRAWN'];

export default function AdminFoundingFleet() {
  // Admin Auth Key State
  const [adminKey, setAdminKey] = useState<string>(() => {
    return localStorage.getItem('drisha_admin_key') || '';
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [inputPasscode, setInputPasscode] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Dashboard Data State
  const [stats, setStats] = useState<FoundingFleetStats | null>(null);
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  // Selected Detail Modal
  const [activeRecord, setActiveRecord] = useState<RegistrationRecord | null>(null);
  const [activeLinkedUser, setActiveLinkedUser] = useState<any>(null);
  const [editStatus, setEditStatus] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const [manualLinkInput, setManualLinkInput] = useState('');
  const [isSavingRecord, setIsSavingRecord] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [fullImageView, setFullImageView] = useState<string | null>(null);

  // Check auth and load initial stats
  useEffect(() => {
    if (adminKey) {
      loadStatsAndData(adminKey);
    }
  }, [adminKey, currentPage, selectedCategory, selectedStatus]);

  const loadStatsAndData = async (key: string) => {
    setIsLoading(true);
    try {
      const statsData = await fetchAdminStats(key);
      setStats(statsData);

      const listData = await fetchAdminRegistrations(key, {
        search: searchQuery,
        category: selectedCategory,
        status: selectedStatus,
        page: currentPage,
        limit: 15,
      });

      setRegistrations(listData.items || []);
      setTotalCount(listData.pagination?.total || 0);
      setTotalPages(listData.pagination?.totalPages || 1);
      setIsAuthenticated(true);
      setAuthError(null);
    } catch (err: any) {
      setIsAuthenticated(false);
      setAuthError(err.message || 'Invalid administrator authorization key.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const key = inputPasscode.trim();
    if (!key) return;

    try {
      await loadStatsAndData(key);
      setAdminKey(key);
      localStorage.setItem('drisha_admin_key', key);
    } catch (err: any) {
      setAuthError('Authentication failed. Please verify your admin credentials.');
    }
  };

  const handleLogout = () => {
    setAdminKey('');
    setIsAuthenticated(false);
    localStorage.removeItem('drisha_admin_key');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    if (adminKey) {
      loadStatsAndData(adminKey);
    }
  };

  const handleExportCsv = async () => {
    if (!adminKey) return;
    setIsExporting(true);
    try {
      await exportCsv(adminKey);
    } catch (err: any) {
      alert(err.message || 'Failed to export CSV');
    } finally {
      setIsExporting(false);
    }
  };

  const handleOpenDetail = async (id: string) => {
    setSaveMessage(null);
    try {
      const res = await fetchAdminRegistrationDetail(adminKey, id);
      setActiveRecord(res.registration);
      setActiveLinkedUser(res.linkedUser);
      setEditStatus(res.registration.registrationStatus);
      setEditNotes(res.registration.internalNotes || '');
    } catch (err: any) {
      alert('Could not fetch registration details');
    }
  };

  const handleSaveDetails = async () => {
    if (!activeRecord) return;
    setIsSavingRecord(true);
    setSaveMessage(null);
    try {
      const res = await updateAdminRegistration(adminKey, activeRecord.id, {
        registrationStatus: editStatus,
        internalNotes: editNotes,
      });
      setActiveRecord(res.registration);
      setSaveMessage('Record updated successfully.');
      // Refresh list in background
      loadStatsAndData(adminKey);
    } catch (err: any) {
      setSaveMessage(`Error: ${err.message}`);
    } finally {
      setIsSavingRecord(false);
    }
  };

  const handleManualLink = async () => {
    if (!activeRecord || !manualLinkInput.trim()) return;
    setIsSavingRecord(true);
    try {
      const res = await manualLinkRegistration(adminKey, activeRecord.id, {
        targetPhone: manualLinkInput.trim(),
      });
      setActiveRecord(res.registration);
      setActiveLinkedUser(res.linkedUser);
      setSaveMessage(`Successfully linked to ${res.linkedUser.name}`);
      setManualLinkInput('');
      loadStatsAndData(adminKey);
    } catch (err: any) {
      setSaveMessage(`Linking error: ${err.message}`);
    } finally {
      setIsSavingRecord(false);
    }
  };

  // ══════════════ 1. ADMIN AUTHENTICATION WALL ══════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-ivory px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-warm-sand/40 shadow-xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-5">
            <Lock size={32} />
          </div>

          <h1
            className="text-2xl font-bold text-charcoal mb-2"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Founding Fleet Admin
          </h1>
          <p className="text-xs text-taupe mb-6">
            Authorized administrator access required to view and manage founding fleet vehicle registrations.
          </p>

          {authError && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-left">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                value={inputPasscode}
                onChange={(e) => setInputPasscode(e.target.value)}
                placeholder="Enter Admin API Secret Key"
                className="w-full px-4 py-3 rounded-xl border border-warm-sand/50 bg-ivory/50 focus:bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy font-mono text-center"
              />
              <span className="text-[11px] text-taupe mt-1 block">
                Default key: <code className="bg-ivory px-1.5 py-0.5 rounded font-mono text-charcoal">drisha_admin_secret_2026</code>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-full bg-burgundy text-white font-bold text-sm hover:bg-burgundyDark transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Access Admin Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ══════════════ 2. AUTHENTICATED DASHBOARD ══════════════
  return (
    <div className="min-h-screen pt-32 pb-20 bg-ivory text-charcoal">
      <div className="container-editorial">
        {/* Top Admin Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-warm-sand/30">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-burgundy text-white text-[10px] font-bold uppercase tracking-wider">
                Admin Console
              </span>
              <span className="text-xs text-taupe">Drisha Founding Fleet Early Interest</span>
            </div>
            <h1
              className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Founding Fleet Registrations
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => loadStatsAndData(adminKey)}
              disabled={isLoading}
              className="px-3.5 py-2 rounded-xl bg-white border border-warm-sand/50 hover:bg-champagne/20 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              title="Refresh Data"
            >
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportCsv}
              disabled={isExporting}
              className="px-4 py-2 rounded-xl bg-white border border-warm-sand/50 hover:bg-champagne/20 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Download size={14} />
              <span>{isExporting ? 'Exporting...' : 'Export CSV'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <LogOut size={14} />
              <span>Exit</span>
            </button>
          </div>
        </div>

        {/* Overview Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-warm-sand/40 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-taupe">Total Pre-Registrations</span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText size={18} />
                </div>
              </div>
              <div className="text-3xl font-black text-charcoal">{stats.totalRegistrations}</div>
              <span className="text-[11px] text-taupe mt-1 block">Cumulative interest submissions</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-warm-sand/40 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-taupe">Unique Mobile Numbers</span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Phone size={18} />
                </div>
              </div>
              <div className="text-3xl font-black text-charcoal">{stats.uniqueMobileNumbers}</div>
              <span className="text-[11px] text-taupe mt-1 block">Verified partner leads</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-warm-sand/40 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-taupe">Total Registered Vehicles</span>
                <div className="w-8 h-8 rounded-lg bg-burgundy/10 text-burgundy flex items-center justify-center">
                  <Car size={18} />
                </div>
              </div>
              <div className="text-3xl font-black text-charcoal">{stats.totalVehicles}</div>
              <span className="text-[11px] text-taupe mt-1 block">Fleet assets declared</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-warm-sand/40 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-taupe">Top Vehicle Category</span>
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
              </div>
              <div className="text-xl font-bold text-charcoal truncate">
                {Object.entries(stats.categoryStats).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Tempo Traveller'}
              </div>
              <span className="text-[11px] text-taupe mt-1 block">
                {Object.entries(stats.categoryStats).sort((a, b) => b[1] - a[1])[0]?.[1] || 0} vehicles
              </span>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-warm-sand/40 shadow-xs mb-6">
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-grow">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-taupe" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Mobile, Owner Name, Plate Number, or App ID..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-sand/40 bg-ivory/30 focus:bg-white text-xs text-charcoal focus:outline-hidden focus:ring-2 focus:ring-burgundy/30"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-2.5 rounded-xl border border-warm-sand/40 bg-ivory/30 text-xs font-semibold text-charcoal focus:bg-white focus:outline-hidden"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    Category: {cat}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-2.5 rounded-xl border border-warm-sand/40 bg-ivory/30 text-xs font-semibold text-charcoal focus:bg-white focus:outline-hidden"
              >
                {STATUSES.map((st) => (
                  <option key={st} value={st}>
                    Status: {st}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-burgundy text-white text-xs font-bold hover:bg-burgundyDark transition-colors cursor-pointer"
              >
                Filter
              </button>
            </div>
          </form>
        </div>

        {/* Registrations Table */}
        <div className="bg-white rounded-3xl border border-warm-sand/40 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-ivory/70 border-b border-warm-sand/30 text-charcoal/70 uppercase tracking-wider font-bold text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Application ID</th>
                  <th className="py-3.5 px-4">Owner Name</th>
                  <th className="py-3.5 px-4">Mobile Number</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Vehicle Model</th>
                  <th className="py-3.5 px-4">Plate Number</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-sand/20">
                {registrations.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-taupe">
                      {isLoading ? 'Loading pre-registrations...' : 'No pre-registration records found matching your filters.'}
                    </td>
                  </tr>
                ) : (
                  registrations.map((reg) => {
                    const statusStyle = STATUS_COLORS[reg.registrationStatus] || STATUS_COLORS.PRE_REGISTERED;
                    return (
                      <tr key={reg.id} className="hover:bg-ivory/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-burgundy">
                          {reg.applicationId}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-charcoal">
                          {reg.fullName}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-charcoal/80">
                          {reg.normalizedMobileNumber}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-champagne text-charcoal font-medium text-[11px]">
                            {reg.vehicleCategory}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-charcoal">
                          {reg.vehicleMake} {reg.vehicleModel}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-charcoal/80 uppercase">
                          {reg.vehicleRegistrationNumber || <span className="text-taupe text-[10px]">Pending</span>}
                        </td>
                        <td className="py-3.5 px-4 text-taupe">
                          {reg.createdAt ? new Date(reg.createdAt).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                          >
                            {reg.registrationStatus}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => handleOpenDetail(reg.id)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-burgundy/10 hover:bg-burgundy text-burgundy hover:text-white font-bold text-xs transition-colors cursor-pointer"
                          >
                            <Eye size={12} />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="p-4 border-t border-warm-sand/30 bg-ivory/30 flex items-center justify-between text-xs text-taupe">
            <div>
              Showing {registrations.length} of {totalCount} records (Page {currentPage} of {totalPages})
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-lg border border-warm-sand/40 bg-white hover:bg-ivory disabled:opacity-40 cursor-pointer flex items-center gap-1 font-semibold"
              >
                <ChevronLeft size={14} />
                <span>Prev</span>
              </button>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded-lg border border-warm-sand/40 bg-white hover:bg-ivory disabled:opacity-40 cursor-pointer flex items-center gap-1 font-semibold"
              >
                <span>Next</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ 3. DETAIL & EDIT MODAL ══════════════ */}
      {activeRecord && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-warm-sand/50 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveRecord(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-ivory text-charcoal hover:bg-burgundy hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-burgundy/10 text-burgundy text-[11px] font-bold font-mono">
                {activeRecord.applicationId}
              </span>
              <span className="text-xs text-taupe">Registered on {new Date(activeRecord.createdAt).toLocaleString()}</span>
            </div>

            <h2
              className="text-2xl font-bold text-charcoal mb-4"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              {activeRecord.vehicleMake} {activeRecord.vehicleModel}
            </h2>

            {saveMessage && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                {saveMessage}
              </div>
            )}

            {/* Owner & Vehicle Summary Box */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-ivory/60 border border-warm-sand/30 text-xs mb-6">
              <div>
                <span className="text-taupe block font-medium">Owner Full Name</span>
                <span className="text-charcoal font-bold">{activeRecord.fullName}</span>
              </div>
              <div>
                <span className="text-taupe block font-medium">Verified Mobile Number</span>
                <span className="text-charcoal font-mono font-bold">{activeRecord.normalizedMobileNumber}</span>
              </div>
              <div>
                <span className="text-taupe block font-medium">Vehicle Category</span>
                <span className="text-charcoal font-semibold">{activeRecord.vehicleCategory}</span>
              </div>
              <div>
                <span className="text-taupe block font-medium">Registration Number (Plate)</span>
                <span className="text-charcoal font-mono font-semibold uppercase">
                  {activeRecord.vehicleRegistrationNumber || 'Pending Verification'}
                </span>
              </div>
            </div>

            {/* Uploaded Vehicle Photos Gallery */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                Vehicle Photographs ({Array.isArray(activeRecord.vehiclePhotos) ? activeRecord.vehiclePhotos.length : 0})
              </label>

              {Array.isArray(activeRecord.vehiclePhotos) && activeRecord.vehiclePhotos.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeRecord.vehiclePhotos.map((photoUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setFullImageView(photoUrl)}
                      className="aspect-4/3 rounded-xl overflow-hidden border border-warm-sand/40 bg-charcoal/5 relative group cursor-pointer"
                    >
                      <img src={photoUrl} alt={`Vehicle ${idx + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                        Zoom Photo
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-taupe italic">No photographs uploaded.</p>
              )}
            </div>

            {/* Status Update & Internal Notes */}
            <div className="space-y-4 pt-4 border-t border-warm-sand/30">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Update Registration Status
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-warm-sand/50 bg-ivory/50 text-xs font-bold text-charcoal focus:bg-white focus:outline-hidden"
                >
                  <option value="PRE_REGISTERED">PRE_REGISTERED (Initial Interest)</option>
                  <option value="CONTACTED">CONTACTED (Follow-up Made)</option>
                  <option value="ONBOARDING_PENDING">ONBOARDING_PENDING (Partner Downloaded)</option>
                  <option value="ONBOARDED">ONBOARDED (Verified & Active)</option>
                  <option value="WITHDRAWN">WITHDRAWN (Cancelled / Ineligible)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                  Internal Notes (Admin Only)
                </label>
                <textarea
                  rows={3}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="Add depot verification notes, call outcomes, or vehicle condition details..."
                  className="w-full px-3 py-2.5 rounded-xl border border-warm-sand/50 bg-ivory/50 text-xs text-charcoal focus:bg-white focus:outline-hidden"
                />
              </div>

              {/* Partner Linking Status */}
              <div className="p-4 rounded-2xl bg-ivory/60 border border-warm-sand/30 space-y-2">
                <div className="flex items-center gap-2">
                  <LinkIcon size={14} className="text-burgundy" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    Drisha Partner Account Link
                  </span>
                </div>

                {activeRecord.linkedUserId ? (
                  <div className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                    <span className="font-bold block">Linked to Authenticated Partner Account</span>
                    <span>User ID: {activeRecord.linkedUserId}</span>
                    {activeLinkedUser && (
                      <span className="block mt-0.5 text-emerald-900 font-semibold">
                        {activeLinkedUser.name} ({activeLinkedUser.phone})
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <span className="text-xs text-taupe block">
                      Not yet linked. Automatic linking occurs when this mobile number registers in Drisha Partner.
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={manualLinkInput}
                        onChange={(e) => setManualLinkInput(e.target.value)}
                        placeholder="Admin Assisted: Enter partner phone"
                        className="flex-grow px-3 py-2 rounded-xl border border-warm-sand/40 bg-white text-xs"
                      />
                      <button
                        type="button"
                        onClick={handleManualLink}
                        disabled={isSavingRecord || !manualLinkInput}
                        className="px-3 py-2 rounded-xl bg-champagne text-charcoal font-bold text-xs hover:bg-champagneLight transition-colors cursor-pointer"
                      >
                        Link Account
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveRecord(null)}
                  className="px-4 py-2.5 rounded-xl border border-warm-sand/40 text-xs font-semibold hover:bg-ivory transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handleSaveDetails}
                  disabled={isSavingRecord}
                  className="px-5 py-2.5 rounded-xl bg-burgundy text-white text-xs font-bold hover:bg-burgundyDark transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Save size={14} />
                  <span>{isSavingRecord ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════ 4. FULL IMAGE LIGHTBOX ══════════════ */}
      {fullImageView && (
        <div
          onClick={() => setFullImageView(null)}
          className="fixed inset-0 z-60 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={fullImageView}
            alt="Full size vehicle photograph"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
