'use client';

import React from "react";

export default function RestaurantAboutSection({ 
  title, 
  subtitle,
  image, 
  imageCaption,
  content, 
  brandColor = "#DDB64E" 
}) {
  return (
    <section className="bg-linear-to-br from-[#F5F7F8] to-[#E9ECEC] dark:from-[#0C0C0C] dark:to-[#111A1D] pt-24 pb-20 px-4 md:px-12 lg:px-20 transition-colors duration-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-2xl border max-w-[600px] w-full transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-[#0E1517]"
            style={{ borderColor: `${brandColor}40` }}
          >
            <img
              src={image}
              alt={imageCaption}
              className="w-full h-auto object-cover"
            />
            <div
              className="text-center text-lg md:text-xl font-semibold py-3 rounded-b-xl"
              style={{
                backgroundColor: brandColor,
                color: "#111111",
              }}
            >
              {imageCaption}
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8 underline underline-offset-[10px]"
            style={{
              color: brandColor,
              textDecorationColor: brandColor,
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <h3 className="text-2xl font-semibold mb-6 text-[#333333] dark:text-[#E8E8E8]">
              {subtitle}
            </h3>
          )}

          <div className="text-[17px] md:text-[18px] leading-relaxed space-y-5 text-[#333333] dark:text-[#E8E8E8] transition-all duration-300">
            {content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
