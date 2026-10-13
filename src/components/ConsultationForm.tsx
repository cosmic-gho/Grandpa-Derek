"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/config";
import { MessageCircle, Mail, Send, CheckCircle2, Shield } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Bring Back Lost Lover Spell",
    situation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Grandpa Derek,\n\nName: ${formData.name}\nContact: ${formData.contact}\nService Needed: ${formData.service}\nSituation: ${formData.situation}\n\nI need your spiritual help.`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0b0f1a] border border-amber-900/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
        <Shield className="w-4 h-4 text-emerald-400" />
        <span>100% Private & Confidential Spiritual Request</span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">
        Consult with Grandpa Derek Today
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        Fill out this sacred request. Grandpa Derek reviews cases personally to formulate the most powerful ritual.
      </p>

      {submitted ? (
        <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white">Request Dispatched!</h4>
          <p className="text-sm text-gray-300">
            Grandpa Derek has been notified via WhatsApp. You can also email directly at{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-amber-400 underline font-semibold"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-amber-400/80 hover:text-amber-300 underline pt-2 block mx-auto"
          >
            Submit another consultation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Your Name / Alias *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah J."
              className="w-full bg-[#121826] border border-gray-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Your Phone Number or WhatsApp *
            </label>
            <input
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="e.g. +1 555 123 4567"
              className="w-full bg-[#121826] border border-gray-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Spiritual Service Needed *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[#121826] border border-gray-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
            >
              <option value="Bring Back Lost Lover Spell">
                Bring Back Lost Lover Spell
              </option>
              <option value="Win or Dismiss Court Case">
                Win or Dismiss Court Case
              </option>
              <option value="Stop Divorce / Marriage Repair">
                Stop Divorce / Marriage Repair
              </option>
              <option value="Commitment & Stop Cheating Spell">
                Commitment & Stop Cheating Spell
              </option>
              <option value="Breakup / Separation Spell">
                Breakup / Separation Spell
              </option>
              <option value="Spiritual Cleansing & Curse Removal">
                Spiritual Cleansing & Curse Removal
              </option>
              <option value="Wealth, Lottery & Gambling Spells">
                Wealth, Lottery & Gambling Spells
              </option>
              <option value="Other Spiritual Assistance">
                Other Spiritual Assistance
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Brief Description of Your Situation
            </label>
            <textarea
              rows={3}
              value={formData.situation}
              onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
              placeholder="Tell Grandpa Derek about your situation, names of people involved, how long you have been separated or the court case details..."
              className="w-full bg-[#121826] border border-gray-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Submit & Open WhatsApp Directly</span>
            </button>
          </div>
        </form>
      )}

      <div className="mt-4 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
        You can also send an email anytime to{" "}
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="text-amber-400 hover:underline"
        >
          {SITE_CONFIG.email}
        </a>
      </div>
    </div>
  );
}
