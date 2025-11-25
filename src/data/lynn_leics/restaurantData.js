// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const lynnleics = {
  // Welcome Section Data
  welcome: {
    title: "Welcome To The Lynn",
    subtitle: "Deli by day, casual dining and cocktail lounge by night. Fresh bites, great drinks, and an atmosphere that shifts seamlessly from relaxed to refined.",
    backgroundImage: "/lynn.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Lynn",
    subtitle: null,
    image: "/lynn6.png",
    imageCaption: "The lynn",
    content: [
  "Where sophistication meets unforgettable flavour.",
  "Welcome to LYNN, Leicester’s premier destination for elevated dining and exquisite cocktails. Located in the heart of the city, we bring together impeccable culinary artistry, refined mixology, and a vibrant atmosphere that celebrates style and culture.",
  "Our chefs craft every dish with precision and passion, showcasing the finest seasonal ingredients and global influences. Our bar team curates a cocktail list that blends innovation with elegance, ensuring each sip delivers a memorable experience.",
  "Whether you join us for an intimate evening, a celebration with friends, or after-hours drinks, LYNN offers an experience defined by luxury, warmth, and attention to every detail.",
  "Indulge in the extraordinary. This is LYNN."
]
,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "Lynn",
    tagline: "Modern Comfort Food & Coastal Cocktails",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "The lynn Gallery",
    images: [
       '/lynn1.png',
  '/lynn3.png',
  '/lynn4.png',
  '/lynn5.png',
  '/lynn7.png',
  '/lynn8.png',
  '/lynn2.png'
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.1487828453687!2d-1.1364254727959842!3d52.63502159227512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877618bc924dae1%3A0x5a36277eec01ca02!2sLYNN!5e1!3m2!1sen!2slk!4v1761327248417!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
