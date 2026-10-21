import React from 'react';

const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={`max-w-2xl mb-12 md:mb-16 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400 mb-3">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
