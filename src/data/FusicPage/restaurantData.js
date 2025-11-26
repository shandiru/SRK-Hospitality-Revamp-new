// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const FusicData = {
  // Welcome Section Data
  welcome: {
    title: "ASPECTS",
    subtitle: "Experience the essence of fine Indian dining — where bold spices,  authentic recipes, and elegant ambiance come together beautifully.",
    backgroundImage: "/Aspects-hero.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Fusic",
    subtitle: null,
    image: "/fusic-about.webp",
    imageCaption: "FUSIC – Leicester",
  content: [
  "FUSIC Restaurant welcomes you to a unique dining experience that blends delicious cuisine with a lively atmosphere. Our mission is simple — to bring people together over food that makes them happy.",
  "Whether you’re joining us for dinner, pre-ordering for convenience, or hosting a special event, our team is dedicated to making your visit memorable.",
  "Private Events",
  "Looking for the perfect venue for your next celebration? Our event space can host up to 70 guests — ideal for birthdays, anniversaries, or any special gathering. Enjoy modern décor, great music, and food that sets the mood for a truly unforgettable evening.",
  "Catering Services",
  "Hosting an event elsewhere? Let us bring the flavour to you. From traditional Indian classics to contemporary creations, our catering menu offers something for every palate. We’ll handle the food — you enjoy the occasion.",
  "FUSIC – where flavour, fun, and friendship come together."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "FUSIC",
    tagline: "",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "FUSIC Food Gallery",
    images: [
     '/fu1.jpg',
  '/fu2.jpg',
  '/fu3.jpeg',
  '/fu4.jpeg',
  '/fu5.jpeg',
  '/fu6.jpg',
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4204931188595!2d-1.1099439236144702!3d52.64423387206779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761727665afe3%3A0x69fcfe7bba101034!2sFUSIC%20-%20Restaurant%2C%20Takeaway%20%26%20Deliveries!5e0!3m2!1sen!2suk!4v1726480000000!5m2!1sen!2suk",
    brandColor: '#E1B43B'
  }
};
