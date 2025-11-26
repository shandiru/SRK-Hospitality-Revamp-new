// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const TerraceData = {
  // Welcome Section Data
  welcome: {
    title: "Welcome To The Terrace",
    subtitle: "An international restaurant serving breakfast, lunch, and dinner, set within a 4-star hotel in Dubai. Enjoy global flavours, inviting service, and a dining experience made for every moment of the day.",
    backgroundImage: "/terrace.webp",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Terrace",
    subtitle: null,
    image: "/terrace1.webp",
    imageCaption: "The Terrace",
content: [
  "The Terrace Restaurant is a popular multi-cuisine restaurant chain operated by the Hospitality Division of Thumbay Group. The first restaurant was opened on 12th March 2010, and it has earned the internationally acclaimed HACCP certification accredited by the Dubai Accreditation Center (DAC).",
  "The Terrace products and menus are prepared by skillful, specialized, and experienced chefs and nutritionists to offer healthy, delicious food. What truly sets Terrace apart is its attention to detail and commitment to quality. From maintaining stringent food preparation standards to creating the perfect ambience, the team is dedicated to delivering excellence in every aspect."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "The Terrac",
    tagline: "Modern Comfort Food &  Coastal Cocktails",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "Terrace Gallery",
    images: [
    '/terarce4.jpg',
  '/terarce5.jpg',
  '/terarce6.jpg',
  '/terarce7.jpg',
  '/terarce8.jpg',
  '/terarce9.jpg',
  '/terarce10.jpg',
  '/terarce11.jpg',
  '/terarce12.jpg'
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.977949999439!2d55.327656000000005!3d25.274893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cb850fff549%3A0xcef35e1f213dc49b!2sThe%20Terrace!5e1!3m2!1sen!2slk!4v1761328433867!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
