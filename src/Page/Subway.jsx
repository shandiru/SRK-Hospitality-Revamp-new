
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/Subway/ContactSection"
// Restaurant Data
import { SubwayBraunstone } from "../data/SubwayBraunstone/restaurantData";

export default function Subway() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...SubwayBraunstone.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...SubwayBraunstone.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...SubwayBraunstone.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...SubwayBraunstone.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...SubwayBraunstone.map} />
      </section>
    </div>
  );
}
