/**
 * Founding Fleet & Admin Client API for Drisha Website
 */

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export interface PreRegistrationResponse {
  success: boolean;
  applicationId: string;
  message: string;
  registration: {
    id: string;
    applicationId: string;
    fullName: string;
    normalizedMobileNumber: string;
    vehicleCategory: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleRegistrationNumber?: string;
    vehiclePhotos: string[];
    registrationStatus: string;
    createdAt: string;
  };
}

export interface FoundingFleetStats {
  totalRegistrations: number;
  uniqueMobileNumbers: number;
  totalVehicles: number;
  categoryStats: Record<string, number>;
  statusStats: Record<string, number>;
  recentRegistrations: Array<{
    id: string;
    applicationId: string;
    fullName: string;
    mobileNumber: string;
    normalizedMobileNumber: string;
    vehicleCategory: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleRegistrationNumber?: string;
    registrationStatus: string;
    createdAt: string;
    photoCount: number;
  }>;
}

export interface RegistrationRecord {
  id: string;
  applicationId: string;
  fullName: string;
  mobileNumber: string;
  normalizedMobileNumber: string;
  vehicleCategory: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleRegistrationNumber?: string;
  vehiclePhotos: string[];
  mobileVerified: boolean;
  registrationStatus: string;
  consentAccepted: boolean;
  marketingConsentAccepted: boolean;
  internalNotes?: string;
  linkedUserId?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Normalizes phone number into E.164 (+91)
 */
export function normalizePhoneNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(-10);
  return digits.length === 10 ? `+91${digits}` : raw.trim();
}

/**
 * Send OTP for Founding Fleet pre-registration
 */
export async function sendOtp(mobileNumber: string) {
  const res = await fetch(`${API_BASE}/api/founding-fleet/send-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobileNumber }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Failed to dispatch OTP. Please check the mobile number.');
  }
  return data;
}

/**
 * Verify OTP for Founding Fleet pre-registration
 */
export async function verifyOtp(mobileNumber: string, otp: string) {
  const res = await fetch(`${API_BASE}/api/founding-fleet/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mobileNumber, otp }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Invalid OTP code.');
  }
  return data;
}

/**
 * Upload vehicle photo via base64 data URL
 */
export async function uploadVehiclePhoto(
  base64Data: string,
  onProgress?: (progress: number) => void
): Promise<string> {
  // Simulate progress steps if callback provided
  if (onProgress) onProgress(30);

  const res = await fetch(`${API_BASE}/api/founding-fleet/upload`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: base64Data }),
  });

  if (onProgress) onProgress(80);

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Failed to upload vehicle photo.');
  }

  if (onProgress) onProgress(100);

  // Return full URL if relative
  const url = data.url;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `${API_BASE}${url}`;
}

/**
 * Submit Founding Fleet Pre-Registration
 */
export async function submitRegistration(payload: {
  fullName: string;
  mobileNumber: string;
  otp?: string;
  skipOtpCheck?: boolean;
  vehicleCategory: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleRegistrationNumber?: string;
  vehiclePhotos: string[];
  consentAccepted: boolean;
  marketingConsentAccepted?: boolean;
}): Promise<PreRegistrationResponse> {
  const res = await fetch(`${API_BASE}/api/founding-fleet/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Registration failed. Please check your form details.');
  }
  return data;
}

// ── ADMIN API HELPERS ────────────────────────────────────────────────────────

function getAdminHeaders(adminKey: string) {
  return {
    'Content-Type': 'application/json',
    'x-admin-key': adminKey,
    Authorization: adminKey.startsWith('eyJ') ? `Bearer ${adminKey}` : undefined as any,
  };
}

export async function fetchAdminStats(adminKey: string): Promise<FoundingFleetStats> {
  const res = await fetch(`${API_BASE}/api/admin/founding-fleet/stats`, {
    headers: getAdminHeaders(adminKey),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Admin unauthorized');
  return data.stats;
}

export async function fetchAdminRegistrations(
  adminKey: string,
  params: { search?: string; category?: string; status?: string; page?: number; limit?: number }
) {
  const qs = new URLSearchParams();
  if (params.search) qs.append('search', params.search);
  if (params.category && params.category !== 'ALL') qs.append('category', params.category);
  if (params.status && params.status !== 'ALL') qs.append('status', params.status);
  if (params.page) qs.append('page', String(params.page));
  if (params.limit) qs.append('limit', String(params.limit));

  const res = await fetch(`${API_BASE}/api/admin/founding-fleet/registrations?${qs.toString()}`, {
    headers: getAdminHeaders(adminKey),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to fetch registrations');
  return data;
}

export async function fetchAdminRegistrationDetail(adminKey: string, id: string) {
  const res = await fetch(`${API_BASE}/api/admin/founding-fleet/registrations/${id}`, {
    headers: getAdminHeaders(adminKey),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Record not found');
  return data;
}

export async function updateAdminRegistration(
  adminKey: string,
  id: string,
  update: { registrationStatus?: string; internalNotes?: string; linkedUserId?: string | null }
) {
  const res = await fetch(`${API_BASE}/api/admin/founding-fleet/registrations/${id}`, {
    method: 'PATCH',
    headers: getAdminHeaders(adminKey),
    body: JSON.stringify(update),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Update failed');
  return data;
}

export async function manualLinkRegistration(
  adminKey: string,
  id: string,
  target: { targetUserId?: string; targetPhone?: string }
) {
  const res = await fetch(`${API_BASE}/api/admin/founding-fleet/registrations/${id}/link`, {
    method: 'POST',
    headers: getAdminHeaders(adminKey),
    body: JSON.stringify(target),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Linking failed');
  return data;
}

export async function exportCsv(adminKey: string) {
  const res = await fetch(`${API_BASE}/api/admin/founding-fleet/export-csv`, {
    headers: getAdminHeaders(adminKey),
  });
  if (!res.ok) throw new Error('Failed to export CSV');
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `drisha_founding_fleet_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}

