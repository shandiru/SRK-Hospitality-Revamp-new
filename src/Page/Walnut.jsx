

import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/Walnut/ContactSection"
// Restaurant Data
import { WalnutData } from "../data/Walnut/restaurantData";

export default function Walnut() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...WalnutData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...WalnutData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...WalnutData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...WalnutData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...WalnutData.map} />
      </section>
    </div>
  );
}
