// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const FreddieData = {
  // Welcome Section Data
  welcome: {
    title: "FREDDIE’S",
    subtitle: " Indulge in a world of irresistible desserts and handcrafted milkshakes — where every treat is made with passion and a touch of luxury.",
    backgroundImage: "/freddies-hero.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Cooked With Love",
    subtitle: null,
    image: "/freddies.png",
    imageCaption: "Freddies Desserts",
   content: [
  "Welcome to Freddies Desserts — where every bite is made with love and happiness. We’re passionate about crafting desserts that not only taste amazing but also bring a smile with every spoonful.",
  "From indulgent waffles and creamy milkshakes to signature sundaes and homemade cakes, we make every treat fresh to order using the finest ingredients.",
  "Order online and enjoy your favourite desserts delivered straight to your door — fast, fresh, and full of sweetness. At Freddies, dessert isn’t just food, it’s a moment of joy."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "Freddies Dessert Lounge",
    tagline: "Sweet Treats,Coffee & Happiness",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "Freddies Desserts Gallery",
    images: [
      '/f1.jpg',
  '/f2.jpg',
  '/f3.jpg',
  '/f4.jpg',
  '/f5.jpg',
  '/f6.jpg',
  '/f7.jpg',
  '/f8.jpg',
  '/f9.jpg'
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.892120596287!2d-1.2713499!3d52.8983326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e8e8699b90dd%3A0x134390e8c257bdbf!2s45%20Market%20Place%2C%20Long%20Eaton%2C%20Nottingham%20NG10%201JL%2C%20UK!5e0!3m2!1sen!2suk!4v1694952000000!5m2!1sen!2suk",
    brandColor: '#E1B43B'
  }
};
