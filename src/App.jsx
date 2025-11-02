import React from 'react';
import Hero from './components/Hero';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';
import PerformanceWidget from './components/PerformanceWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <header className="w-full">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-400 via-sky-400 to-emerald-400" />
            <span className="font-semibold">PastelPay</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <button className="px-3 py-2 rounded-lg bg-white text-slate-800 ring-1 ring-slate-200 hover:ring-slate-300">Sign In</button>
            <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Get Started</button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Hero />
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br from-white to-indigo-50/60">
              <h3 className="font-semibold text-slate-800">Secure Authentication</h3>
              <p className="mt-2 text-sm text-slate-600">SSO-ready auth with passkeys and magic links for effortless sign‑in.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br from-white to-sky-50/60">
              <h3 className="font-semibold text-slate-800">Real-time Analytics</h3>
              <p className="mt-2 text-sm text-slate-600">Track payments, refunds, and cohorts with gentle, focused visuals.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br from-white to-emerald-50/60">
              <h3 className="font-semibold text-slate-800">Developer Friendly</h3>
              <p className="mt-2 text-sm text-slate-600">Clean APIs, great docs, and SDKs so you ship faster and calmer.</p>
            </div>
          </div>
        </section>
        <div id="blog">
          <BlogPreview />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>

      <footer className="py-10 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </footer>

      <PerformanceWidget />
    </div>
  );
}

export default App;
