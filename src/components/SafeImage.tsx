import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  badge?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'MaintenanceUK',
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  badge,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white flex flex-col justify-end p-6 border border-slate-700 ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:12px_12px]" />
        {badge && (
          <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded bg-amber-500 text-slate-950 shadow-sm">
            {badge}
          </span>
        )}
        <div className="relative z-10">
          <h4 className="text-base font-bold text-white mb-1">
            {fallbackTitle || alt}
          </h4>
          {fallbackSubtitle && (
            <p className="text-xs text-slate-300">{fallbackSubtitle}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded bg-slate-900/90 text-amber-400 border border-amber-400/30 backdrop-blur-sm shadow-sm">
          {badge}
        </span>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-80'
        }`}
        {...props}
      />
    </div>
  );
};
