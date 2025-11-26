
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/Terrace/ContactSection"
// Restaurant Data
import { TerraceData } from "../data/Terrace/restaurantData";

export default function Terrace() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...TerraceData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...TerraceData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...TerraceData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...TerraceData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...TerraceData.map} />
      </section>
    </div>
  );
}
