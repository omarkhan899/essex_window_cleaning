'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ComparisonPair } from '@/lib/photos';

export function Comparison({ pair }: { pair: ComparisonPair }) {
  const [before, setBefore] = useState(50);
  const [sideBySide, setSideBySide] = useState(false);
  return <figure className="comparison">
    <div className={'compare-pictures' + (pair.alignment === 'fascia' ? ' fascia-alignment' : '') + (sideBySide ? ' side-by-side' : '')} style={{ '--split': before + '%' } as React.CSSProperties}>
      <div className="compare-picture before"><div className="compare-image"><Image src={pair.before.src} alt={pair.before.alt} fill sizes="(max-width: 520px) 90vw, 44vw" /></div><span>Before</span></div>
      <div className="compare-picture after"><div className="compare-image"><Image src={pair.after.src} alt={pair.after.alt} fill sizes="(max-width: 520px) 90vw, 44vw" /></div><span>After</span></div>
      {!sideBySide && <div className="compare-control">
        <span className="compare-handle" aria-hidden="true">↔</span>
        <input type="range" min={0} max={100} value={before} aria-label={'Reveal before photo for ' + pair.title} aria-valuetext={before + '% before photo visible'} onChange={event => setBefore(Number(event.target.value))} />
      </div>}
    </div>
    <figcaption className="compare-caption"><div><h3>{pair.title}</h3><p>{pair.caption}</p></div><button type="button" className="compare-view" onClick={() => setSideBySide(!sideBySide)}>{sideBySide ? 'Use slider' : 'Side by side'}</button></figcaption>
  </figure>;
}
