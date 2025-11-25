

import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/AspectsPage/ContactSection"
// Restaurant Data
import { alnaseebData } from "../data/AspectsPage/restaurantData";

export default function Aspects() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...alnaseebData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...alnaseebData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...alnaseebData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...alnaseebData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...alnaseebData.map} />
      </section>
    </div>
  );
}
