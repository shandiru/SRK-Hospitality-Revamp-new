
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/SubwayWiston/ContactSection"
// Restaurant Data
import { Subwaywigston } from "../data/Subwaywigston/restaurantData";

export default function SubwaywigstonPage() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...Subwaywigston.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...Subwaywigston.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...Subwaywigston.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...Subwaywigston.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...Subwaywigston.map} />
      </section>
    </div>
  );
}
