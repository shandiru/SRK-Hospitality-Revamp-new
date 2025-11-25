'use client';

import { useEffect, useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiMapPin, FiPhone, FiSend, FiClock, FiFacebook, FiInstagram } from 'react-icons/fi';

export default function RestaurantContactSection({ 
  brandColor = '#E1B43B',
  openingHours,
  address,
  addressLink,
  phone,
  email,
  website,
  socialMedia
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`transition-colors duration-700 py-20 px-4 ${
        isDark ? 'bg-black text-[#E9ECEC]' : 'bg-white text-[#1C1C1C]'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: brandColor }}>
            Contact Us
          </h2>

          <div className="space-y-6">

            {/* Opening Hours */}
            {openingHours && (
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{
                    backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                    color: brandColor
                  }}
                >
                  <FiClock size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {openingHours.map((hours, index) => (
                      <p key={index}>
                        {hours.label && (
                          <span className="font-semibold" style={{ color: brandColor }}>
                            {hours.label}
                            <br />
                          </span>
                        )}
                        {hours.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Address */}
            {address && (
              <a
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div
                  className="p-3 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                    color: brandColor
                  }}
                >
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p 
                    className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#d1d5db' : '#4b5563'}
                    dangerouslySetInnerHTML={{ __html: address }}
                  />
                </div>
              </a>
            )}

            {/* Phone */}
            {phone && (
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{
                    backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                    color: brandColor
                  }}
                >
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      style={{ transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = brandColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      {phone}
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* Email */}
            {email && (
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{
                    backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                    color: brandColor
                  }}
                >
                  <FiSend size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Mail Us</h4>
                  <a
                    href={`mailto:${email}`}
                    className="font-medium"
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}

            {/* Website */}
            {website && (
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div
                  className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                    color: brandColor
                  }}
                >
                  <AiOutlineGlobal size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Website</h4>
                  <p 
                    className="font-medium transition-colors"
                    style={{ transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = brandColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                  >
                    {website.display}
                  </p>
                </div>
              </a>
            )}

            {/* Social Media */}
            {socialMedia && (
              <div className="flex gap-4 pt-4">
                {socialMedia.instagram && (
                  <a
                    href={socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-105"
                    style={{
                      backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                      color: brandColor
                    }}
                  >
                    <FiInstagram size={20} />
                  </a>
                )}
                {socialMedia.facebook && (
                  <a
                    href={socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full transition hover:scale-105"
                    style={{
                      backgroundColor: isDark ? '#1E1E1E' : '#FFF5E0',
                      color: brandColor
                    }}
                  >
                    <FiFacebook size={20} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: brandColor }}>
            Send Your Message Here
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${
                  isDark
                    ? 'bg-[#111] text-gray-100'
                    : 'border-gray-300 text-gray-800'
                }`}
                style={{
                  borderColor: isDark ? `${brandColor}66` : undefined,
                  ...(isDark ? {} : { '--tw-ring-color': `${brandColor}99` })
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = `0 0 0 2px ${brandColor}99`;
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="text"
                placeholder="+44 123 456 7890"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${
                  isDark
                    ? 'bg-[#111] text-gray-100'
                    : 'border-gray-300 text-gray-800'
                }`}
                style={{
                  borderColor: isDark ? `${brandColor}66` : undefined
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = `0 0 0 2px ${brandColor}99`;
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className={`w-full rounded-full border px-4 py-3 outline-none transition ${
                  isDark
                    ? 'bg-[#111] text-gray-100'
                    : 'border-gray-300 text-gray-800'
                }`}
                style={{
                  borderColor: isDark ? `${brandColor}66` : undefined
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = `0 0 0 2px ${brandColor}99`;
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your Message (optional)</label>
              <textarea
                rows="4"
                placeholder="Write something..."
                className={`w-full rounded-2xl border px-4 py-3 outline-none resize-none transition ${
                  isDark
                    ? 'bg-[#111] text-gray-100'
                    : 'border-gray-300 text-gray-800'
                }`}
                style={{
                  borderColor: isDark ? `${brandColor}66` : undefined
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = `0 0 0 2px ${brandColor}99`;
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="font-semibold px-6 py-2 rounded-full transition duration-300 hover:scale-105"
                style={{ backgroundColor: brandColor, color: isDark ? '#000' : '#fff' }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
