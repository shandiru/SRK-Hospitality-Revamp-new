

import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/BardoshermanosPage/ContactSection"
// Restaurant Data
import { BardoshermanosData } from "../data/Bardoshermanos/restaurantData";

export default function BARDOS() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...BardoshermanosData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...BardoshermanosData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...BardoshermanosData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...BardoshermanosData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...BardoshermanosData.map} />
      </section>
    </div>
  );
}
