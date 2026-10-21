import React from 'react';

// Affiche un texte où les passages entre **doubles astérisques** sont en gras
const RichText = ({ text }) => (
  <>
    {text.split('**').map((part, i) =>
      i % 2 === 1
        ? <strong key={i} className="font-semibold text-slate-900 dark:text-white">{part}</strong>
        : <React.Fragment key={i}>{part}</React.Fragment>
    )}
  </>
);

export default RichText;
