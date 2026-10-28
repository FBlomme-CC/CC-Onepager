import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Loader2,
} from 'lucide-react';

interface ModalsProps {
  demoOpen: boolean;
  onCloseDemo: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  demoOpen,
  onCloseDemo,
}) => {
  // Demo form state
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Verpakking & Drukwerk',
    preferredTime: 'Ochtend (09:00 - 12:00 CET)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoForm.email || !demoForm.email.includes('@')) {
      setErrorMsg('Vul een geldig e-mailadres in.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demoForm),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Er is een fout opgetreden.');
      }

      setDemoSubmitted(true);
    } catch (err: any) {
      console.error('Fout bij versturen demo aanvraag:', err);
      setErrorMsg(err.message || 'Er is een fout opgetreden bij het verzenden van de aanvraag.');
    } finally {
      setIsSubmitting(false);
    }
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
                  <h3 className="font-bold text-white text-base">Boek een 1-op-1 Demo</h3>
                  <span className="text-xs text-neutral-400">Afgestemd op jouw sector</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onCloseDemo}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {demoSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Aanvraag Verzonden!</h4>
                  <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                    Je demo-aanvraag is verstuurd naar <strong>info@costcards.io</strong>. Wij nemen snel contact op via <strong>{demoForm.email}</strong> om de afspraak definitief in te plannen.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setDemoSubmitted(false);
                      onCloseDemo();
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer"
                  >
                    Venster Sluiten
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Je Volledige Naam
                    </label>
                    <input
                      required
                      type="text"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder="bijv. Marcus Vandenberg"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Zakelijk E-mailadres
                    </label>
                    <input
                      required
                      type="email"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      placeholder="marcus@packtech.be"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Bedrijfsnaam
                      </label>
                      <input
                        required
                        type="text"
                        value={demoForm.company}
                        onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                        placeholder="PackTech BV"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Industriesegment
                      </label>
                      <select
                        value={demoForm.industry}
                        onChange={(e) => setDemoForm({ ...demoForm, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                      >
                        <option>Verpakking &amp; Drukwerk</option>
                        <option>Brouwerij &amp; Voeding</option>
                        <option>Assemblage &amp; Metaalbewerking</option>
                        <option>Kunststof &amp; Spuitgieten</option>
                        <option>Andere Productie</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      Voorkeurstijdslot
                    </label>
                    <select
                      value={demoForm.preferredTime}
                      onChange={(e) => setDemoForm({ ...demoForm, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#191924] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]"
                    >
                      <option>Ochtend (09:00 - 12:00 CET)</option>
                      <option>Namiddag (13:00 - 17:00 CET)</option>
                    </select>
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-400 font-medium">{errorMsg}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#FF5A5F] to-[#FFAA40] rounded-xl shadow-lg hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Aanvraag versturen naar info@costcards.io...</span>
                        </>
                      ) : (
                        <>
                          <span>Bevestig 30-Minuten Demo</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <span className="block text-[11px] text-center text-neutral-400 mt-2">
                      De aanvraag wordt rechtstreeks verstuurd naar info@costcards.io. Geen opdringerige verkopers.
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
