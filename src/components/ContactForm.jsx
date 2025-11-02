import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend call yet — just simulate a quick success for the landing page
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 700);
  };

  const disabled = status === 'submitting';

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-50/60 via-sky-50/60 to-indigo-50/60">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Contact us</h2>
          <p className="text-slate-600 mt-1">Have a question or want a demo? Send us a message.</p>
        </div>

        {status === 'success' ? (
          <div className="rounded-2xl bg-white ring-1 ring-emerald-200 p-6 text-center">
            <p className="text-emerald-700 font-medium">Thanks! We received your message and will get back soon.</p>
            <button
              onClick={() => {
                setStatus('idle');
                setForm({ name: '', email: '', message: '' });
              }}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200/50"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200/50"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200/50"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-slate-500">We typically respond within 1 business day.</p>
              <button
                type="submit"
                disabled={disabled}
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-white shadow-sm transition ${
                  disabled ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {disabled ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
