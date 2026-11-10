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
  Languages,
} from 'lucide-react';
import { Reveal } from '../animations/Reveal';
import { Button } from '../ui/Button';
import {
  uploadVehiclePhoto,
  submitRegistration,
} from '../../lib/api';
import type { PreRegistrationResponse } from '../../lib/api';

type Language = 'en' | 'as';

interface CategoryOption {
  key: string;
  en: string;
  as: string;
}

const VEHICLE_CATEGORIES: CategoryOption[] = [
  { key: 'Hatchback', en: 'Hatchback', as: 'হেচবেক (Hatchback)' },
  { key: 'Sedan', en: 'Sedan', as: 'চিডান (Sedan)' },
  { key: 'SUV', en: 'SUV', as: 'এছ ইউ ভি (SUV)' },
  { key: 'MUV', en: 'MUV', as: 'এম ইউ ভি (MUV)' },
  { key: 'Premium Vehicle', en: 'Premium Vehicle', as: 'প্ৰিমিয়াম বাহন (Premium)' },
  { key: 'Tempo Traveller', en: 'Tempo Traveller', as: 'টেম্পো ট্ৰেভেলাৰ (Tempo)' },
  { key: 'Mini Bus', en: 'Mini Bus', as: 'মিনি বাছ (Mini Bus)' },
  { key: 'Bus', en: 'Bus', as: 'বাছ (Bus)' },
  { key: 'Other', en: 'Other', as: 'অন্যান্য (Other)' },
];

const I18N = {
  en: {
    badge: 'Drisha Founding Fleet',
    headline: 'Be Part of Every Journey.',
    description: "Register your vehicle early and become part of Drisha's growing mobility network. Join us before launch and unlock exclusive partner benefits.",
    ownerSection: 'Owner Information',
    fullName: 'Full Name',
    fullNamePlaceholder: 'e.g. Ramesh Chandra Sharma',
    mobileNumber: 'Mobile Number',
    mobilePlaceholder: '10-digit number (e.g. 9876543210)',
    mobileHelp: 'Used to recognise and link your vehicles when you join Drisha Partner.',
    vehicleSection: 'Basic Vehicle Information',
    vehicleCategory: 'Vehicle Category',
    makeAndModel: 'Vehicle Make & Model',
    makePlaceholder: 'Make (e.g. Force)',
    modelPlaceholder: 'Model (e.g. Urbania)',
    regNumber: 'Registration Number',
    optionalNote: 'Optional at this stage',
    regPlaceholder: 'e.g. AS 01 AB 1234',
    photosSection: 'Vehicle Photographs',
    photosRequired: '2 to 4 Photos Required',
    photosDescription: 'Upload exterior/interior photos of your vehicle (front, side, cabin). Supported formats: JPG, JPEG, PNG, WEBP. Maximum 5 MB per file.',
    addPhoto: 'Add Photo',
    photoLabel: 'Photo',
    noDocsNotice: 'No RC, insurance or driving licence documents required at this early stage.',
    mandatoryConsent: 'I confirm that the information provided is accurate and consent to Drisha contacting me regarding pre-registration and future partner onboarding.',
    privacyPolicy: 'Privacy Policy',
    andWord: 'and',
    terms: 'Terms of Service',
    marketingConsent: '(Optional) I would like to receive product announcements and partner benefits updates before Drisha launch.',
    submitBtn: 'Complete Pre-Registration',
    submittingBtn: 'Submitting Application...',
    errorTitle: 'Please check the details',
    successBadge: 'Application Confirmed',
    successTitle: 'Thank you for joining Drisha Founding Fleet!',
    successDescription: 'Your vehicle has been successfully pre-registered. Our team will contact you when the next onboarding stage begins.',
    appIdLabel: 'Unique Application ID',
    copyId: 'Copy ID',
    copied: 'Copied!',
    ownerLabel: 'Owner',
    vehicleLabel: 'Vehicle',
    categoryLabel: 'Category',
    mobileLabel: 'Mobile',
    registerAnother: 'Register Another Vehicle',
    partnerEcosystem: 'Partner Ecosystem',
    maxPhotosError: 'You can upload a maximum of 4 vehicle photographs.',
    formatError: 'Only JPG, JPEG, PNG and WEBP image formats are supported.',
    sizeError: (name: string) => `File "${name}" exceeds the 5 MB maximum size limit.`,
    minPhotosError: 'Please upload at least 2 vehicle photographs (Maximum 4).',
    consentError: 'Please confirm that the information provided is accurate and consent to Drisha contacting you.',
  },
  as: {
    badge: 'ড্ৰিশ্বা ফাউণ্ডিং ফ্লিট',
    headline: 'প্ৰতিটো যাত্ৰাৰ অংশীদাৰ হওক।',
    description: 'আপোনাৰ বাহনখন আগতীয়াকৈ পঞ্জীয়ন কৰক আৰু ড্ৰিশ্বাৰ ক্ৰমবৰ্ধমান মবিলিটি নেটৱৰ্কৰ অংশ হওক। আনুষ্ঠানিক মুকলিৰ পূৰ্বেই যোগদান কৰি বিশেষ পাৰ্টনাৰ সুবিধা লাভ কৰক।',
    ownerSection: 'মালিকৰ তথ্য (Owner Information)',
    fullName: 'পূৰ্ণ নাম (Full Name)',
    fullNamePlaceholder: 'যেনে- ৰমেশ চন্দ্ৰ শৰ্মা',
    mobileNumber: 'ম\'বাইল নম্বৰ (Mobile Number)',
    mobilePlaceholder: '১০টা সংখ্যাৰ নম্বৰ (যেনে- ৯৮৭৬৫৪৩২১০)',
    mobileHelp: 'ড্ৰিশ্বা পাৰ্টনাৰত যোগদান কৰাৰ সময়ত আপোনাৰ বাহনসমূহ চিনাক্ত আৰু সংযোগ কৰিবলৈ এই নম্বৰ ব্যৱহাৰ কৰা হ\'ব।',
    vehicleSection: 'বাহনৰ প্ৰাথমিক তথ্য (Vehicle Information)',
    vehicleCategory: 'বাহনৰ শ্ৰেণী (Vehicle Category)',
    makeAndModel: 'বাহনৰ কোম্পানী আৰু মডেল (Make & Model)',
    makePlaceholder: 'কোম্পানী (যেনে- Force, Tata)',
    modelPlaceholder: 'মডেল (যেনে- Urbania, Innova)',
    regNumber: 'বাহনৰ পঞ্জীয়ন নম্বৰ (Reg. Number)',
    optionalNote: 'এই পৰ্যায়ত ঐচ্ছিক (Optional)',
    regPlaceholder: 'যেনে- AS 01 AB 1234',
    photosSection: 'বাহনৰ আলোকচিত্ৰ (Vehicle Photos)',
    photosRequired: '২ ৰ পৰা ৪ খন ফটো প্ৰয়োজন',
    photosDescription: 'আপোনাৰ বাহনৰ ফটো আপলোড কৰক (সন্মুখ, কাষ আৰু ভিতৰৰ চিট)। সমৰ্থিত ফৰ্মেট: JPG, JPEG, PNG, WEBP। প্ৰতিটো ফাইল সৰ্বাধিক ৫ মেগাবাইট।',
    addPhoto: 'ফটো যোগ কৰক',
    photoLabel: 'ফটো',
    noDocsNotice: 'এই প্ৰাৰম্ভিক পৰ্যায়ত কোনো আৰচি (RC), বীমা বা ড্ৰাইভিং লাইচেঞ্চ নথিৰ প্ৰয়োজন নাই।',
    mandatoryConsent: 'মই নিশ্চিত কৰিছো যে প্ৰদান কৰা সকলো তথ্য সঠিক আৰু প্ৰাক-পঞ্জীয়ন তথা ভৱিষ্যতৰ পাৰ্টনাৰ অনবৰ্ডিঙৰ বিষয়ে ড্ৰিশ্বাই মোৰ সৈতে যোগাযোগ কৰাত সন্মতি জনাইছো।',
    privacyPolicy: 'গোপনীয়তা নীতি (Privacy Policy)',
    andWord: 'আৰু',
    terms: 'সেৱাৰ চৰ্তসমূহ (Terms of Service)',
    marketingConsent: '(ঐচ্ছিক) ড্ৰিশ্বা আনুষ্ঠানিকভাৱে মুকলি হোৱাৰ পূৰ্বে মই নতুন ঘোষণা আৰু পাৰ্টনাৰ সুবিধাসমূহৰ তথ্য লাভ কৰিব বিচাৰো।',
    submitBtn: 'প্ৰাক-পঞ্জীয়ন সম্পূৰ্ণ কৰক (Submit)',
    submittingBtn: 'আবেদন জমা হৈ আছে...',
    errorTitle: 'অনুগ্ৰহ কৰি তথ্য পৰীক্ষা কৰক',
    successBadge: 'আবেদন নিশ্চিত হ\'ল (Confirmed)',
    successTitle: 'ড্ৰিশ্বা ফাউণ্ডিং ফ্লিটত যোগদান কৰাৰ বাবে ধন্যবাদ!',
    successDescription: 'আপোনাৰ বাহনখন সফলতাৰে প্ৰাক-পঞ্জীয়ন কৰা হৈছে। পৰৱৰ্তী অনবৰ্ডিং পৰ্যায় আৰম্ভ হোৱাৰ লগে লগে আমাৰ দলে আপোনাৰ সৈতে যোগাযোগ কৰিব।',
    appIdLabel: 'অনন্য আবেদন নম্বৰ (Application ID)',
    copyId: 'আইডি কপি কৰক',
    copied: 'কপি কৰা হ\'ল!',
    ownerLabel: 'মালিকৰ নাম',
    vehicleLabel: 'বাহন',
    categoryLabel: 'শ্ৰেণী',
    mobileLabel: 'ম\'বাইল নম্বৰ',
    registerAnother: 'আন এখন বাহন পঞ্জীয়ন কৰক',
    partnerEcosystem: 'পাৰ্টনাৰ ইক\'চিষ্টেম',
    maxPhotosError: 'আপুনি সৰ্বাধিক ৪ খন বাহনৰ ফটো আপলোড কৰিব পাৰিব।',
    formatError: 'কেৱল JPG, JPEG, PNG আৰু WEBP ফৰ্মেট সমৰ্থিত।',
    sizeError: (name: string) => `ফাইল "${name}" ৫ মেগাবাইটৰ অধিক হ'ব নোৱাৰিব।`,
    minPhotosError: 'অনুগ্ৰহ কৰি কমেও ২ খন বাহনৰ ফটো আপলোড কৰক (সৰ্বাধিক ৪ খন)।',
    consentError: 'অনুগ্ৰহ কৰি নিশ্চিত কৰক যে তথ্যসমূহ সঠিক আৰু যোগাযোগত সন্মতি দিছে।',
  },
};

interface UploadedPhoto {
  id: string;
  url: string;
  previewUrl: string;
  isUploading: boolean;
  progress: number;
  error?: string;
}

export function FoundingFleetSection() {
  // Language State: 'en' | 'as'
  const [lang, setLang] = useState<Language>('en');
  const t = I18N[lang];

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
      setErrorMessage(t.maxPhotosError);
      return;
    }

    setErrorMessage(null);

    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type)) {
        setErrorMessage(t.formatError);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage(t.sizeError(file.name));
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

      (async () => {
        try {
          const uploadedUrl = await uploadVehiclePhoto(file, (progress) => {
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
      })();
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
      setErrorMessage(lang === 'as' ? 'অনুগ্ৰহ কৰি আপোনাৰ সম্পূৰ্ণ নাম লিখক।' : 'Please enter your full name.');
      return;
    }

    const cleanDigits = mobileNumber.replace(/\D/g, '').slice(-10);
    if (cleanDigits.length !== 10) {
      setErrorMessage(lang === 'as' ? 'অনুগ্ৰহ কৰি এটি বৈধ ১০টা সংখ্যাৰ ম\'বাইল নম্বৰ লিখক।' : 'Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!vehicleMake.trim() || !vehicleModel.trim()) {
      setErrorMessage(
        lang === 'as'
          ? 'অনুগ্ৰহ কৰি বাহনৰ নিৰ্মাতা কোম্পানী আৰু মডেল দুয়োটাই উল্লেখ কৰক (যেনে- Force Urbania)।'
          : 'Please specify both the vehicle make and model (e.g. Force Urbania).'
      );
      return;
    }

    const completedPhotos = photos.filter((p) => p.url && !p.isUploading);
    if (completedPhotos.length < 2) {
      setErrorMessage(t.minPhotosError);
      return;
    }

    if (!consentAccepted) {
      setErrorMessage(t.consentError);
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne text-burgundy text-xs font-bold uppercase tracking-wider mb-4 border border-warm-sand/30">
              <Sparkles size={14} />
              <span>{t.badge}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-[clamp(2.4rem,5vw,3.8rem)] font-bold tracking-tight text-charcoal leading-[1.08] mb-4"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              {t.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-taupe leading-relaxed mb-6">
              {t.description}
            </p>
          </Reveal>

          {/* Language Switcher Pill */}
          <Reveal delay={0.25}>
            <div className="inline-flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-xs rounded-full border border-warm-sand/40 shadow-xs">
              <Languages size={15} className="text-burgundy ml-2 mr-0.5" />
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-burgundy text-white shadow-xs'
                    : 'text-charcoal/70 hover:text-burgundy hover:bg-ivory'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('as')}
                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'as'
                    ? 'bg-burgundy text-white shadow-xs'
                    : 'text-charcoal/70 hover:text-burgundy hover:bg-ivory'
                }`}
              >
                অসমীয়া (Assamese)
              </button>
            </div>
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
                  {t.successBadge}
                </span>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-charcoal mt-4 mb-3"
                  style={{ fontFamily: 'var(--font-family-heading)' }}
                >
                  {t.successTitle}
                </h3>

                <p className="text-taupe text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  {t.successDescription}
                </p>

                {/* Application ID Card */}
                <div className="bg-ivory rounded-2xl p-6 border border-warm-sand/40 max-w-md mx-auto mb-8 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-bold text-taupe tracking-wider">
                      {t.appIdLabel}
                    </span>
                    <button
                      onClick={copyApplicationId}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundyDark transition-colors cursor-pointer"
                    >
                      {copiedAppId ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600">{t.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>{t.copyId}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-burgundy tracking-tight">
                    {successData.applicationId}
                  </div>
                  <div className="mt-4 pt-4 border-t border-warm-sand/30 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-taupe block">{t.ownerLabel}</span>
                      <span className="font-semibold text-charcoal">{successData.registration.fullName}</span>
                    </div>
                    <div>
                      <span className="text-taupe block">{t.vehicleLabel}</span>
                      <span className="font-semibold text-charcoal">
                        {successData.registration.vehicleMake} {successData.registration.vehicleModel}
                      </span>
                    </div>
                    <div>
                      <span className="text-taupe block">{t.categoryLabel}</span>
                      <span className="font-semibold text-charcoal">{successData.registration.vehicleCategory}</span>
                    </div>
                    <div>
                      <span className="text-taupe block">{t.mobileLabel}</span>
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
                    {t.registerAnother}
                  </Button>

                  <Button
                    href="/partner"
                    size="lg"
                    rounded="full"
                    className="w-full sm:w-auto gap-2"
                  >
                    {t.partnerEcosystem}
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
                {/* Form Header with Language Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-warm-sand/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-taupe">
                    {lang === 'as' ? 'অনলাইন প্ৰাক-পঞ্জীয়ন প্ৰপত্ৰ' : 'Online Pre-Registration Form'}
                  </span>
                  <div className="inline-flex items-center gap-1 p-1 bg-ivory rounded-full border border-warm-sand/40">
                    <button
                      type="button"
                      onClick={() => setLang('en')}
                      className={`px-3 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                        lang === 'en'
                          ? 'bg-burgundy text-white shadow-2xs'
                          : 'text-charcoal/70 hover:text-burgundy'
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang('as')}
                      className={`px-3 py-0.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                        lang === 'as'
                          ? 'bg-burgundy text-white shadow-2xs'
                          : 'text-charcoal/70 hover:text-burgundy'
                      }`}
                    >
                      অসমীয়া
                    </button>
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-2xl p-4 flex items-start gap-3 text-sm">
                    <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block mb-0.5">{t.errorTitle}</span>
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
                      {t.ownerSection}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                        {t.fullName} <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={t.fullNamePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                        {t.mobileNumber} <span className="text-burgundy">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder={t.mobilePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm transition-all"
                      />
                      <span className="text-[11px] text-taupe mt-1 block">
                        {t.mobileHelp}
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
                      {t.vehicleSection}
                    </h3>
                  </div>

                  {/* Vehicle Category */}
                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">
                      {t.vehicleCategory} <span className="text-burgundy">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {VEHICLE_CATEGORIES.map((cat) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setVehicleCategory(cat.key)}
                          className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                            vehicleCategory === cat.key
                              ? 'bg-burgundy text-white border-burgundy shadow-xs'
                              : 'bg-ivory/50 text-charcoal border-warm-sand/40 hover:bg-white hover:border-warm-sand'
                          }`}
                        >
                          {lang === 'as' ? cat.as : cat.en}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Make & Model */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-1.5">
                        {t.makeAndModel} <span className="text-burgundy">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          value={vehicleMake}
                          onChange={(e) => setVehicleMake(e.target.value)}
                          placeholder={t.makePlaceholder}
                          className="w-full px-3 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm"
                        />
                        <input
                          type="text"
                          required
                          value={vehicleModel}
                          onChange={(e) => setVehicleModel(e.target.value)}
                          placeholder={t.modelPlaceholder}
                          className="w-full px-3 py-3 rounded-xl border border-warm-sand/50 bg-ivory/40 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy text-charcoal text-sm"
                        />
                      </div>
                    </div>

                    {/* Registration Plate (Optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-charcoal/80">
                          {t.regNumber}
                        </label>
                        <span className="text-[11px] text-taupe font-medium">{t.optionalNote}</span>
                      </div>
                      <input
                        type="text"
                        value={vehicleRegistrationNumber}
                        onChange={(e) => setVehicleRegistrationNumber(e.target.value.toUpperCase())}
                        placeholder={t.regPlaceholder}
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
                        {t.photosSection}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-burgundy bg-burgundy/10 px-2.5 py-1 rounded-full">
                      {t.photosRequired}
                    </span>
                  </div>

                  <p className="text-xs text-taupe mb-4 leading-relaxed">
                    {t.photosDescription}
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
                            <span>{lang === 'as' ? `আপলোড হৈ আছে ${photo.progress}%` : `Uploading ${photo.progress}%`}</span>
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
                          {t.photoLabel} {index + 1}
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
                        <span className="text-xs font-bold">{t.addPhoto}</span>
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
                    <span>{t.noDocsNotice}</span>
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
                      {t.mandatoryConsent}{' '}
                      <span className="text-burgundy">*</span>{' '}
                      <a href="/privacy" target="_blank" className="text-burgundy underline hover:text-burgundyDark">
                        {t.privacyPolicy}
                      </a>{' '}
                      {t.andWord}{' '}
                      <a href="/terms" target="_blank" className="text-burgundy underline hover:text-burgundyDark">
                        {t.terms}
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
                      {t.marketingConsent}
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
                        {t.submittingBtn}
                      </span>
                    ) : (
                      t.submitBtn
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
