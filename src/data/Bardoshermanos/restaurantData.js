// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const BardoshermanosData = {
  // Welcome Section Data
  welcome: {
    title: "BAR DOS HERMANOS",
    subtitle: "A vibrant Cuban-inspired bar where rhythm, flavour, and passion come together in every cocktail and every beat.",
    backgroundImage: "/Bardos.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Bar dos",
    subtitle: null,
    image: "/Bardosabout.png",
    imageCaption: "Bar Dos Hermanos",
   content: [
  "Bar Dos Hermanos brings the vibrant spirit of 1940’s Cuba to Leicester. Established in 2002, it features an extensive selection of Cuban cocktails, world-class rums, premium draught beers, and hand-picked wines — all served in a timeless art-deco setting.",
  "Open seven days a week, the lively bar offers daily happy hours for those looking to relax in style without compromise.",
  "Feeling hungry? Enjoy a mouth-watering selection of authentic Spanish and Cuban tapas paired perfectly with your favourite drink.",
  "Join us for homemade breakfast and brunch every weekend, or hire the venue for private parties and exclusive events — complete with signature cocktails and music that keep the Cuban energy alive all night."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "Bar Dos Hermanos",
    tagline: "Cuban-American Taps ,Cockatils & Good Times",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "Bar Dos Hermanos Gallery",
    images: [
     '/d1.png',
  '/d2.png',
  '/d3.png',
  '/d4.png',
  '/d5.png',
  '/d6.png',
  '/d7.png',
  '/d8.png',
  '/d9.png',
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124.78105906742842!2d-1.117410865207633!3d52.61860092397085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877613149c74739%3A0xeb4ea6032cc8239d!2sBar%20Dos%20Hermanos!5e1!3m2!1sen!2slk!4v1761752614750!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
