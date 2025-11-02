import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-gradient-to-b from-indigo-50 via-sky-50 to-emerald-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-16 flex flex-col items-center text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-white/70 text-slate-700 ring-1 ring-slate-200 shadow-sm">
          Fintech-ready • Minimal • Pastel
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-slate-800">
          Build a calmer way to manage payments
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl text-slate-600 text-base md:text-lg">
          A modern SaaS platform for digital banking and e‑commerce. Secure authentication, blazing performance, and a delightful pastel experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition">
            Get Started
          </button>
          <button className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white text-slate-800 ring-1 ring-slate-200 hover:ring-slate-300 shadow-sm transition">
            Sign In
          </button>
        </div>
        <p className="mt-3 text-xs text-slate-500">No credit card required • 14‑day free trial</p>
      </div>
    </section>
  );
}
