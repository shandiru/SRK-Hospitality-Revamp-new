'use client';

import { useEffect, useState } from 'react';

export default function RestaurantMapSection({ 
  title = "Find Us Here",
  mapEmbedUrl, 
  brandColor = '#E1B43B' 
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains('dark');
    setIsDark(dark);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`transition-colors duration-700 py-16 px-4 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-[#F9F6F2] text-[#1C1C1C]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl font-extrabold mb-6 text-center"
          style={{ color: brandColor }}
        >
          {title}
        </h2>

        {/* Map Container */}
        <div
          className={`w-full h-[450px] overflow-hidden rounded-xl shadow-md border transition-colors duration-500 ${
            isDark
              ? 'bg-[#0D0D0D]'
              : 'bg-white'
          }`}
          style={{
            borderColor: isDark ? `${brandColor}66` : `${brandColor}4D`
          }}
        >
          <iframe
            src={mapEmbedUrl}
            title={title}
            aria-label={title}
            loading="lazy"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
