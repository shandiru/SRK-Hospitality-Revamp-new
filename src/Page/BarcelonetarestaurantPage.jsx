



import React from "react";

// Common Restaurant Components
import RestaurantWelcomeSection from "../components/common/restaurant/RestaurantWelcomeSection";
import RestaurantAboutSection from "../components/common/restaurant/RestaurantAboutSection";
import RestaurantMenuFlipbook from "../components/common/restaurant/RestaurantMenuFlipbook";
import RestaurantGallerySection from "../components/common/restaurant/RestaurantGallerySection";
import RestaurantContactSection from "../components/common/restaurant/RestaurantContactSection";
import RestaurantMapSection from "../components/common/restaurant/RestaurantMapSection";
import ContactSection from "../components/BarcelonetarestaurantPage/ContactSection"
// Restaurant Data
import { BarcelonetarestaurantData } from "../data/Barcelonetarestaurant/restaurantData";

export default function BARCELONE() {
  return (
    <div>
      {/* Hero */}
      <section>
        <RestaurantWelcomeSection {...BarcelonetarestaurantData.welcome} />
      </section>

      {/* About */}
      <section>
        <RestaurantAboutSection {...BarcelonetarestaurantData.about} />
      </section>

      {/* Menu */}
      <section>
        <RestaurantMenuFlipbook {...BarcelonetarestaurantData.menu} />
      </section>

      {/* Gallery */}
      <section>
        <RestaurantGallerySection {...BarcelonetarestaurantData.gallery} />
      </section>

      {/* Contact */}
      <section>
        <ContactSection />
        {/* <RestaurantContactSection {...alnaseebData.contact} /> */}
      </section>

      {/* Map */}
      <section>
        <RestaurantMapSection {...BarcelonetarestaurantData.map} />
      </section>
    </div>
  );
}
