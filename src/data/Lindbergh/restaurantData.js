// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const LindberghData = {
  // Welcome Section Data
  welcome: {
    title: "Welcome To The Lindbergh's Sports bar",
    subtitle: "An elevated sports bar experience pairing lively atmosphere with classic pub favourites. Enjoy great flavour, modern comfort, and warm hospitality in every visit.",
    backgroundImage: "/Linberghs.webp",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Lindbergh",
    subtitle: null,
    image: "/lind4.png",
    imageCaption: "Lindbergh's Sports bar",
   content: [
  "Lindbergh's Sports Bar is a popular hangout spot for sports enthusiasts staying at the Grand Excelsior Hotel in Dubai's Deira district. The bar features multiple high-definition TVs showing sports events from around the world, including football, rugby, tennis, and more. Guests can enjoy a wide selection of bar food and beverages while cheering on their favourite teams.",
  "The atmosphere is lively and casual, making it a great place to gather with friends or meet new people. The bar also hosts weekly live music performances and quiz nights, adding to its appeal. Overall, Lindbergh's Sports Bar is an excellent choice for anyone looking to watch sports, enjoy good food and drinks, and have a great time in Dubai."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "ASPECTS",
    tagline: "Modern Dining . Cocktails .Atmosphere",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "The Lindbergh's Sports bar Gallery",
    images: [
    '/lynnn1.png',
  '/lynnn2.png',
  '/lynnn3.png',
  '/lynnn4.png'
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5947.376441063624!2d55.317717438825525!3d25.27438206248501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cb6fde4ac03%3A0x714a2256a45f676e!2sAl%20Muteena%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2slk!4v1761578963006!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
