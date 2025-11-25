'use client';

export default function RestaurantGiftCardSection({ giftCards }) {
  // If no gift cards provided, don't render anything
  if (!giftCards || giftCards.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-white dark:bg-[#0C0C0C] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1C1C1C] dark:text-[#E9ECEC]">
          Gift Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {giftCards.map((card, index) => (
            <div
              key={index}
              className="text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-xl shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold text-[#1C1C1C] dark:text-[#E9ECEC]">
                {card.title}
              </h3>
              <p className="mt-1 text-red-600 font-bold">{card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
