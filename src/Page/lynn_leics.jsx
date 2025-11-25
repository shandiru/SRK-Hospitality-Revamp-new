
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/lynn_leics/ContactSection"
// Restaurant Data
import { lynnleics } from "../data/lynn_leics/restaurantData";

export default function Lynnleics() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...lynnleics.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...lynnleics.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...lynnleics.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...lynnleics.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...lynnleics.map} />
      </section>
    </div>
  );
}
