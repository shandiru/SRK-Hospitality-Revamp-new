
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/Lindbergh/ContactSection"
// Restaurant Data
import { LindberghData } from "../data/Lindbergh/restaurantData";

export default function Lindbergh() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...LindberghData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...LindberghData.about} />
      </section>

      {/* Menu */}
      <section>
        {/* <RestaurantMenuFlipbook {...LindberghData.menu} /> */}
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...LindberghData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...LindberghData.map} />
      </section>
    </div>
  );
}
