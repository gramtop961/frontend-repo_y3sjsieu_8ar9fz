import React, { useEffect, useState } from 'react';

function formatMs(ms) {
  return `${Math.max(0, Math.round(ms))} ms`;
}

export default function PerformanceWidget() {
  const [metrics, setMetrics] = useState({ ttfb: 0, dom: 0, fcp: 0 });

  useEffect(() => {
    // Prefer Navigation Timing Level 2
    const nav = performance.getEntriesByType('navigation')[0];
    const ttfb = nav ? nav.responseStart : 0; // time to first byte
    const dom = nav ? nav.domContentLoadedEventEnd : 0; // DOM ready

    let fcp = 0;
    const paintEntry = performance.getEntriesByType('paint').find((e) => e.name === 'first-contentful-paint');
    if (paintEntry) fcp = paintEntry.startTime;

    setMetrics({ ttfb, dom, fcp });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 rounded-xl ring-1 ring-slate-200 shadow-sm p-3">
        <div className="text-[10px] uppercase tracking-wide text-slate-500 mb-1">Performance</div>
        <dl className="grid grid-cols-3 gap-3 text-xs">
          <div>
            <dt className="text-slate-500">TTFB</dt>
            <dd className="font-medium text-slate-800">{formatMs(metrics.ttfb)}</dd>
          </div>
          <div>
            <dt className="text-slate-500">DOM Ready</dt>
            <dd className="font-medium text-slate-800">{formatMs(metrics.dom)}</dd>
          </div>
          <div>
            <dt className="text-slate-500">FCP</dt>
            <dd className="font-medium text-slate-800">{formatMs(metrics.fcp)}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
