// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const BarcelonetarestaurantData = {
  // Welcome Section Data
  welcome: {
    title: "BARCELONETA",
    subtitle: "Authentic Spanish Bar & Restaurant — where every bite tells a story.",
    backgroundImage: "/barcelhero.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to  Barceloneta",
    subtitle: null,
    image: "/barcelonetarestaurant-about.jpg",
    imageCaption: "Barceloneta",
   content: [
  "In the popular suburb of Clarendon Park, just round the corner from the University of Leicester and a short walk into the city’s centre, sits Barceloneta. Established in 1990, the restaurant serves authentic Mediterranean and Spanish tapas specialities, including wines, liqueurs, and aperitifs.",
  "Committed to giving their customers a real flavour of Spanish dining, the restaurant promises a buzzing atmosphere, perfect for big groups and catching up with friends.",
  "The restaurant is full of Spanish charm and packed with life and character. With a bar bursting with Mediterranean drinks and colourful greenery adorning the uniquely decorated windows, Barceloneta is an eclectic taste of Spanish design.",
  "The beautifully patterned tiled bar and intimate dining space make it the perfect environment to spend an evening with friends and family, sampling the food and drink and enjoying the lively ambience."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "Barceloneta",
    tagline: "Authentic  Mediterranean Tapas & Cocktails",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "Barceloneta Gallery",
    images: [
       '/b1.png',
  '/b2.png',
  '/b3.png',
  '/b4.png',
  '/b5.png',
  '/b6.png',
  '/b7.png',
  '/b8.png',
  '/b9.png',
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9602.926093507715!2d-1.112944!3d52.6201967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877613149c74739%3A0x7276091ba8ad492!2sBarceloneta%20Spanish%20and%20Mediterranean%20tapas%20Restaurant%20and%20Bar!5e0!3m2!1sen!2slk!4v1694948037911!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
