// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const alnaseebData = {
  // Welcome Section Data
  welcome: {
    title: "AL NASEEB",
    subtitle: "Discover the authentic taste of India — where traditional spices meet modern culinary artistry in a warm, elegant setting.",
    backgroundImage: "/al-naseeb-heo.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Al Naseeb",
    subtitle: null,
    image: "/AL-nasee-about.png",
    imageCaption: "Al Naseeb",
    content: [
      "At <strong>Al Naseeb</strong>, we believe that every meal should be more than just dining — it should be an experience filled with warmth, flavour, and connection.",
      "Our talented chefs craft each dish using only the finest ingredients, blending traditional recipes with modern flair to bring out the best of Indian cuisine. Every bite is a celebration of taste and tradition.",
      "Whether you're enjoying a family dinner, a friendly catch-up, or a special occasion, our welcoming atmosphere and dedicated team ensure that every visit feels memorable.",
      "Prefer to dine at home? We also deliver, bringing the rich flavours of Al Naseeb straight to your doorstep — fresh, fast, and full of love."
    ],
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "Al Naseeb",
    tagline: "Authentic Indian Cuisine with a Modern Touch",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "Al Naseeb Gallery",
    images: [
      '/n1.jpg', '/n2.jpg', '/n3.jpg', '/n4.jpg', '/n5.jpg',
      '/n6.jpg', '/n7.jpg', '/n8.jpg', '/n9.jpg'
    ],
    brandColor: "#E1B43B"
  },

  // Contact Section Data
  contact: {
    brandColor: '#E1B43B',
    openingHours: [
      {
        label: "Pickup & Delivery",
        time: "Monday to Sunday: 5:00 PM – 10:45 PM"
      }
    ],
    address: "45 Market Place, Long Eaton,<br />Nottinghamshire, NG10 1JL",
    addressLink: "https://maps.app.goo.gl/B5VWg6z4geNSdNnY6",
    phone: "0115 946 8222",
    email: "info@walnut-tree.co.uk",
    website: {
      url: "https://alnaseebrestaurant.co.uk/",
      display: "alnaseebrestaurant.co.uk"
    },
    socialMedia: {
      instagram: "https://www.instagram.com/alnaseebresataurant/",
      facebook: "https://web.facebook.com/AlNaseeb.LongEation/?_rdc=1&_rdr#"
    }
  },

  // Map Section Data
  map: {
    title: "Find Us Here",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.892120596287!2d-1.2713499!3d52.8983326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e8e8699b90dd%3A0x134390e8c257bdbf!2s45%20Market%20Place%2C%20Long%20Eaton%2C%20Nottingham%20NG10%201JL%2C%20UK!5e0!3m2!1sen!2suk!4v1694952000000!5m2!1sen!2suk",
    brandColor: '#E1B43B'
  }
};
