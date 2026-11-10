import React, { useState, useRef } from 'react';
import {
  CheckCircle2,
  UploadCloud,
  X,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  Plus,
  RefreshCw,
  Sparkles,
  Info,
} from 'lucide-react';
import { Reveal } from '../animations/Reveal';
import { Button } from '../ui/Button';
import {
  uploadVehiclePhoto,
  submitRegistration,
} from '../../lib/api';
import type { PreRegistrationResponse } from '../../lib/api';

const VEHICLE_CATEGORIES = [
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

interface UploadedPhoto {
  id: string;
  url: string;
  previewUrl: string;
  isUploading: boolean;
  progress: number;
  error?: string;
}

export function FoundingFleetSection() {
  // Step / Mode: 'FORM' | 'SUCCESS'
  const [isSuccess, setIsSuccess] = useState(false);
  const [successData, setSuccessData] = useState<PreRegistrationResponse | null>(null);

  // Owner Info
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Vehicle Details
  const [vehicleCategory, setVehicleCategory] = useState<string>('Tempo Traveller');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = useState('');

  // Vehicle Photographs
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Consents
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [marketingConsentAccepted, setMarketingConsentAccepted] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedAppId, setCopiedAppId] = useState(false);

  // Handle File Selection & Upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (photos.length + files.length > 4) {
      setErrorMessage('You can upload a maximum of 4 vehicle photographs.');
      return;
    }

    setErrorMessage(null);

    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
        setErrorMessage('Only JPG, JPEG, PNG and WEBP image formats are supported.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage(`File "${file.name}" exceeds the 5 MB maximum size limit.`);
        return;
      }
      validFiles.push(file);
    }

    // Process each file
    for (const file of validFiles) {
      const photoId = Math.random().toString(36).substring(7);
      const previewUrl = URL.createObjectURL(file);

      // Add to list in uploading state
      setPhotos((prev) => [
        ...prev,
        {
          id: photoId,
          url: '',
          previewUrl,
          isUploading: true,
          progress: 20,
        },
      ]);

      // Convert to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result as string;
        try {
          const uploadedUrl = await uploadVehiclePhoto(base64Data, (progress) => {
            setPhotos((prev) =>
              prev.map((p) => (p.id === photoId ? { ...p, progress } : p))
            );
          });

          setPhotos((prev) =>
            prev.map((p) =>
              p.id === photoId
                ? { ...p, url: uploadedUrl, isUploading: false, progress: 100 }
                : p
            )
          );
        } catch (err: any) {
          setPhotos((prev) =>
            prev.map((p) =>
              p.id === photoId
                ? { ...p, isUploading: false, error: err.message || 'Upload failed' }
                : p
            )
          );
        }
      };
      reader.readAsDataURL(file);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Remove Photo
  const handleRemovePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  // Submit Pre-Registration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanDigits = mobileNumber.replace(/\D/g, '').slice(-10);
    if (cleanDigits.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!vehicleMake.trim() || !vehicleModel.trim()) {
      setErrorMessage('Please specify both the vehicle make and model (e.g. Force Urbania).');
      return;
    }

    const completedPhotos = photos.filter((p) => p.url && !p.isUploading);
    if (completedPhotos.length < 2) {
      setErrorMessage('Please upload at least 2 clear vehicle photographs (maximum 4).');
      return;
    }

    if (!consentAccepted) {
      setErrorMessage(
        'Please confirm that the information provided is accurate and consent to Drisha contacting you.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitRegistration({
        fullName: fullName.trim(),
        mobileNumber: mobileNumber.trim(),
        vehicleCategory,
        vehicleMake: vehicleMake.trim(),
        vehicleModel: vehicleModel.trim(),
        vehicleRegistrationNumber: vehicleRegistrationNumber.trim() || undefined,
        vehiclePhotos: completedPhotos.map((p) => p.url),
        consentAccepted: true,
        marketingConsentAccepted,
      });

      setSuccessData(response);
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Registration failed. Please review your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset for adding another vehicle under the same owner
  const handleRegisterAnotherVehicle = () => {
    setVehicleMake('');
    setVehicleModel('');
    setVehicleRegistrationNumber('');
    setPhotos([]);
    setConsentAccepted(false);
    setIsSuccess(false);
    setSuccessData(null);
    setErrorMessage(null);
  };

  const copyApplicationId = () => {
    if (successData?.applicationId) {
      navigator.clipboard.writeText(successData.applicationId);
      setCopiedAppId(true);
      setTimeout(() => setCopiedAppId(false), 2500);
    }
  };

  return (
    <section id="founding-fleet" className="py-20 lg:py-28 bg-ivory relative overflow-hidden border-b border-warm-sand/30">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne text-burgundy text-xs font-bold uppercase tracking-wider mb-4 border border-warm-sand/30">
              <Sparkles size={14} />
              <span>Drisha Founding Fleet</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-[clamp(2.4rem,5vw,3.8rem)] font-bold tracking-tight text-charcoal leading-[1.08] mb-4"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Be Part of Every Journey.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-taupe leading-relaxed">
              Register your vehicle early and become part of Drisha's growing mobility network. Join us before launch and unlock exclusive partner benefits.
            </p>
          </Reveal>
        </div>

        {/* Main Content Box */}
        <div className="max-w-3xl mx-auto">
          {isSuccess && successData ? (
            /* ════════════ SUCCESS CONFIRMATION ════════════ */
            <Reveal>
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-sand/40 shadow-lg text-center relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                  <CheckCircle2 size={42} />
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
                  Application Confirmed
                </span>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-charcoal mt-4 mb-3"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  Thank you for joining Drisha Founding Fleet!
                </h3>

                <p className="text-taupe text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  Your vehicle has been successfully pre-registered. Our team will contact you when the next onboarding stage begins.
                </p>

                {/* Application ID Card */}
                <div className="bg-ivory rounded-2xl p-6 border border-warm-sand/40 max-w-md mx-auto mb-8 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-bold text-taupe tracking-wider">
                      Unique Application ID
                    </span>
                    <button
                      onClick={copyApplicationId}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundyDark transition-colors cursor-pointer"
                    >
                      {copiedAppId ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy ID</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-burgundy tracking-tight">
                    {successData.applicationId}
                  </div>
                  <div className="mt-4 pt-4 border-t border-warm-sand/30 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-taupe block">Owner</span>
                      <span className="font-semibold text-charcoal">{successData.registration.fullName}</span>
                    </div>
                    <div>
                      <span className="text-taupe block">Vehicle</span>
                      <span className="font-semibold text-charcoal">
                        {successData.registration.vehicleMake} {successData.registration.vehicleModel}
                      </span>
                    </div>
                    <div>
                      <span className="text-taupe block">Category</span>
                      <span className="font-semibold text-charcoal">{successData.registration.vehicleCategory}</span>
                    </div>
                    <div>
                      <span className="text-taupe block">Mobile</span>
                      <span className="font-semibold text-charcoal font-mono">
                        {successData.registration.normalizedMobileNumber}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={handleRegisterAnotherVehicle}
                    size="lg"
                    rounded="full"
                    variant="outline"
                    className="w-full sm:w-auto gap-2"
                  >
                    <Plus size={18} />
                    Register Another Vehicle
                  </Button>

                  <Button
                    href="/partner"
                    size="lg"
                    rounded="full"
                    className="w-full sm:w-auto gap-2"
                  >
                    Partner Ecosystem
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : (
            /* ════════════ PRE-REGISTRATION FORM ════════════ */
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-warm-sand/40 shadow-md space-y-8"
              >
                {/* Error Banner */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-2xl p-4 flex items-start gap-3 text-sm">
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block mb-0.5">Please check the details</span>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                {/* SECTION A: OWNER INFORMATION */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-warm-sand/20">
                    <div className="w-6 h-6 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold flex items-center justify-center">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      Owner Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                        Full Name <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ramesh Chandra Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                        Mobile Number <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="10-digit number (e.g. 9876543210)"
                        className="w-full px-4 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm transition-all"
                      />
                      <span className="text-[11px] text-taupe mt-1 block">
                        Used to recognise and link your vehicles when you join Drisha Partner.
                      </span>
                    </div>
                  </div>
                </div>

                {/* SECTION B: VEHICLE INFORMATION */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-warm-sand/20">
                    <div className="w-6 h-6 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold flex items-center justify-center">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                      Basic Vehicle Information
                    </h3>
                  </div>

                  {/* Vehicle Category */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">
                      Vehicle Category <span className="text-burgundy">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {VEHICLE_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setVehicleCategory(cat)}
                          className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                            vehicleCategory === cat
                              ? 'bg-burgundy text-white border-burgundy shadow-xs'
                              : 'bg-ivory/50 text-charcoal border-warm-sand/40 hover:bg-white hover:border-warm-sand'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Make & Model */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                        Vehicle Make & Model <span className="text-burgundy">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          value={vehicleMake}
                          onChange={(e) => setVehicleMake(e.target.value)}
                          placeholder="Make (e.g. Force)"
                          className="w-full px-3 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm"
                        />
                        <input
                          type="text"
                          required
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          placeholder="Model (e.g. Urbania)"
                          className="w-full px-3 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm"
                        />
                      </div>
                    </div>

                    {/* Registration Plate (Optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-charcoal/80">
                          Registration Number
                        </label>
                        <span className="text-[11px] text-taupe font-medium">Optional at this stage</span>
                      </div>
                      <input
                        type="text"
                        value={vehicleRegistrationNumber}
                        onChange={(e) => setVehicleRegistrationNumber(e.target.value.toUpperCase())}
                        placeholder="e.g. AS 01 AB 1234"
                        className="w-full px-4 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal font-mono text-sm uppercase"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION C: VEHICLE PHOTOGRAPHS */}
                <div>
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-warm-sand/20">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold flex items-center justify-center">
                        3
                      </div>
                      <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'var(--font-family-heading)' }}>
                        Vehicle Photographs
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-burgundy bg-burgundy/10 px-2.5 py-1 rounded-full">
                      2 to 4 Photos Required
                    </span>
                  </div>

                  <p className="text-xs text-taupe mb-4 leading-relaxed">
                    Upload exterior/interior photos of your vehicle (front, side, cabin). Supported formats: JPG, JPEG, PNG, WEBP. Maximum 5 MB per file.
                  </p>

                  {/* Photo Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                    {photos.map((photo, index) => (
                      <div
                        key={photo.id}
                        className="relative aspect-4/3 rounded-2xl overflow-hidden border border-warm-sand/40 bg-charcoal/5 group"
                      >
                        <img
                          src={photo.previewUrl}
                          alt={`Vehicle photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />

                        {photo.isUploading && (
                          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-xs flex flex-col items-center justify-center text-white text-xs p-2 text-center">
                            <RefreshCw size={20} className="animate-spin mb-1 text-champagne" />
                            <span>Uploading {photo.progress}%</span>
                          </div>
                        )}

                        {photo.error && (
                          <div className="absolute inset-0 bg-red-900/80 text-white text-[11px] p-2 flex flex-col items-center justify-center text-center">
                            <span>{photo.error}</span>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(photo.id)}
                          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-charcoal/70 text-white hover:bg-burgundy flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                          title="Remove photo"
                        >
                          <X size={14} />
                        </button>

                        <div className="absolute bottom-2 left-2 bg-charcoal/80 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                          Photo {index + 1}
                        </div>
                      </div>
                    ))}

                    {/* Add Photo Button Slot */}
                    {photos.length < 4 && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="aspect-4/3 rounded-2xl border-2 border-dashed border-warm-sand/60 hover:border-burgundy bg-ivory/40 hover:bg-champagne/20 flex flex-col items-center justify-center gap-1.5 text-taupe hover:text-burgundy transition-all p-3 text-center cursor-pointer"
                      >
                        <UploadCloud size={24} />
                        <span className="text-xs font-bold">Add Photo</span>
                        <span className="text-[10px] text-taupe/80">({photos.length}/4)</span>
                      </button>
                    )}
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <div className="text-[11px] text-taupe flex items-center gap-1.5 mt-2">
                    <Info size={14} className="flex-shrink-0" />
                    <span>No RC, insurance or driving licence documents required at this early stage.</span>
                  </div>
                </div>

                {/* SECTION D: CONSENT */}
                <div className="pt-2 border-t border-warm-sand/20 space-y-3">
                  {/* Mandatory Consent */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={consentAccepted}
                      onChange={(e) => setConsentAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-burgundy focus:ring-burgundy/40 border-warm-sand/60 accent-burgundy cursor-pointer"
                    />
                    <span className="text-xs text-charcoal/90 leading-relaxed font-medium">
                      I confirm that the information provided is accurate and consent to Drisha contacting me regarding pre-registration and future partner onboarding.{' '}
                      <span className="text-burgundy">*</span>{' '}
                      <a href="/privacy" target="_blank" className="text-burgundy underline hover:text-burgundyDark">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms" target="_blank" className="text-burgundy underline hover:text-burgundyDark">
                        Terms of Service
                      </a>.
                    </span>
                  </label>

                  {/* Optional Marketing Consent */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={marketingConsentAccepted}
                      onChange={(e) => setMarketingConsentAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-burgundy focus:ring-burgundy/40 border-warm-sand/60 accent-burgundy cursor-pointer"
                    />
                    <span className="text-xs text-taupe leading-relaxed">
                      (Optional) I would like to receive product announcements and partner benefits updates before Drisha launch.
                    </span>
                  </label>
                </div>

                {/* SECTION E: SUBMIT BUTTON */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !fullName.trim() ||
                      mobileNumber.replace(/\D/g, '').length < 10 ||
                      photos.filter((p) => p.url).length < 2 ||
                      !consentAccepted
                    }
                    size="lg"
                    rounded="full"
                    className="w-full text-base font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <RefreshCw size={18} className="animate-spin" />
                        Submitting Application...
                      </span>
                    ) : (
                      'Complete Pre-Registration'
                    )}
                  </Button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
