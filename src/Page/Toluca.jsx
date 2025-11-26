
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/TolucaPage/ContactSection"
// Restaurant Data
import { TolucaData } from "../data/TolucaPage/restaurantData";

export default function Toluca() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...TolucaData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...TolucaData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...TolucaData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...TolucaData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...TolucaData.map} />
      </section>
    </div>
  );
}
