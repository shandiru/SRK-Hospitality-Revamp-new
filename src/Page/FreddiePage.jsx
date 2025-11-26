import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/FreddiePage/ContactSection"
// Restaurant Data
import { FreddieData } from "../data/FreddiePage/restaurantData";

export default function Freddie() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...FreddieData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...FreddieData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...FreddieData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...FreddieData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...FreddieData.map} />
      </section>
    </div>
  );
}
