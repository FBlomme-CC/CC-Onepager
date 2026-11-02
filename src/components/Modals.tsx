import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ModalsProps {
  demoOpen: boolean;
  onCloseDemo: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  demoOpen,
  onCloseDemo,
}) => {
  const { t, language } = useLanguage();

  // Demo form state
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: t.modals.industries[0],
    preferredTime: t.modals.timeSlots[0],
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Sync default select options when language switches if user hasn't selected a custom one
  useEffect(() => {
    setDemoForm((prev) => ({
      ...prev,
      industry: t.modals.industries[0],
      preferredTime: t.modals.timeSlots[0],
    }));
  }, [language]);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = 'info@costcards.io';
    const subject = t.modals.emailSubject(demoForm.company, demoForm.name);
    const body = t.modals.emailBody(demoForm);

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDemoSubmitted(true);

    // Trigger user's default email client
    window.location.href = mailto;
  };

  return (
    <>
      {/* Book a Demo Modal */}
      {demoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#121218] border border-white/15 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFAA40]/20 flex items-center justify-center text-[#FFAA40]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{t.modals.headerTitle}</h3>
                  <span className="text-xs text-neutral-400">{t.modals.headerSubtitle}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onCloseDemo}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={t.modals.closeButton}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {demoSubmitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{t.modals.thankYouTitle}</h4>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setDemoSubmitted(false);
                        onCloseDemo();
                      }}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer"
                    >
                      {t.modals.closeButton}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t.modals.labelFullName}
                    </label>
                    <input
                      required
                      type="text"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder={t.modals.placeholderFullName}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t.modals.labelEmail}
                    </label>
                    <input
                      required
                      type="email"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      placeholder={t.modals.placeholderEmail}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        {t.modals.labelCompany}
                      </label>
                      <input
                        required
                        type="text"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        placeholder={t.modals.placeholderCompany}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        {t.modals.labelIndustry}
                      </label>
                      <select
                        value={demoForm.industry}
                        onChange={(e) => setDemoForm({ ...demoForm, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                      >
                        {t.modals.industries.map((ind, iIdx) => (
                          <option key={iIdx} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t.modals.labelPreferredTime}
                    </label>
                    <select
                      value={demoForm.preferredTime}
                      onChange={(e) => setDemoForm({ ...demoForm, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    >
                      {t.modals.timeSlots.map((slot, sIdx) => (
                        <option key={sIdx} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.modals.submitButton}</span>
                    </button>
                    <span className="block text-[11px] text-center text-neutral-400 mt-2">
                      {t.modals.submitNote}
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
