import React from 'react';

const posts = [
  {
    title: 'Designing calm fintech interfaces',
    excerpt:
      'How pastel palettes and generous spacing lower cognitive load in payment flows and dashboards.',
    tag: 'Design',
  },
  {
    title: 'Practical performance for SaaS apps',
    excerpt:
      'Understand what matters: bundle splitting, caching, and measuring real user timing effectively.',
    tag: 'Performance',
  },
  {
    title: 'Auth that feels effortless',
    excerpt:
      'From passkeys to magic links — strategies to keep accounts secure without friction.',
    tag: 'Security',
  },
];

export default function BlogPreview() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">From the blog</h2>
            <p className="text-slate-500 mt-1">Insights on design, performance, and security.</p>
          </div>
          <a href="#" className="hidden sm:inline text-indigo-600 hover:text-indigo-700 text-sm font-medium">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50/60 via-sky-50/60 to-emerald-50/60 p-5 hover:shadow-sm transition">
              <span className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-white text-slate-700 ring-1 ring-slate-200 mb-3">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold text-slate-800">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-700 text-sm font-medium">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
