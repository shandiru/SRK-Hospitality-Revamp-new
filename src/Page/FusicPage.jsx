
import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/FusicPage/ContactSection"
// Restaurant Data
import { FusicData } from "../data/FusicPage/restaurantData";
import WelcomeSection from "../components/FusicPage/WelcomeSection"
export default function Fusic() {
  return (
    <div>
      {/* Hero */}
      <section>
        {/* <RestaurantWelcomeSection {...FusicData.welcome} /> */}
        <WelcomeSection />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...FusicData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...FusicData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...FusicData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...FusicData.map} />
      </section>
    </div>
  );
}
