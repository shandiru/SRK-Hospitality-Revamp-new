// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const TolucaData = {
  // Welcome Section Data
  welcome: {
    title: "TOLUCA",
    subtitle: "Discover vibrant flavours and fiesta vibes — Toluca brings authentic Mexican cuisine and cocktails to life with passion and style.",
    backgroundImage: "/toluca-hero.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Toluca",
    subtitle: null,
    image: "/toluca-about.webp",
    imageCaption: "Toluca Mexican Bar & Grill",
   content: [
  "A Local Favourite with a Global Welcome",
  "Nestled in the heart of Lichfield, Toluca Mexican Bar & Grill brings a vibrant slice of Mexico to your table. It’s the go-to spot for locals craving bold flavours, colourful vibes, and good times.",
  "Our menu celebrates authentic Mexican cuisine — from sizzling fajitas and tacos to signature loaded fries and freshly mixed margaritas. Every dish is crafted with care, combining rich tradition with modern twists.",
  "The atmosphere is pure fiesta. With live music every weekend, Toluca transforms from a restaurant into a celebration — where laughter, rhythm, and flavour come together.",
  "Whether you’re joining us for a laid-back meal, a quick takeaway, or a lively night out with friends, Toluca is where warmth, spice, and soul meet.",
  "¡Bienvenidos a Toluca! — Experience Mexico in the heart of England."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "Toluca Mexican Bar & Grill",
    tagline: "Modern Comfort Food & Coastal Cocktails",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "Toluca Mexican Bar & Grill Gallery",
    images: [
      '/Toluca-1.webp',
  '/Toluca-2.webp',
  '/Toluca-3.webp',
  '/Toluca-4.webp',
  '/Toluca-5.webp'
    ],
    brandColor: "#E1B43B"
  },

  // Contact Section Data
  contact: {
    brandColor: '#E1B43B',
    openingHours: [
      {
        label: "Lunch",
        time: "Monday to Friday: 11:30am – 2:30pm"
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.5764981780067!2d-1.8287532!3d52.682609199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a73260faf92d%3A0xf08185db1b194ff8!2sToluca%20Mexican%20Bar%20%26%20Grill!5e1!3m2!1sen!2slk!4v1761583370985!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
