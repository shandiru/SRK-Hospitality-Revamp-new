

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
import { AspectsData } from "../data/AspectsPage/restaurantData";

export default function Aspects() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...AspectsData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...AspectsData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...AspectsData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...AspectsData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...AspectsData.map} />
      </section>
    </div>
  );
}
