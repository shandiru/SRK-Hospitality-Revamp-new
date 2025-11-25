// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const AspectsData = {
  // Welcome Section Data
  welcome: {
    title: "ASPECTS",
    subtitle: "Experience the essence of fine Indian dining — where bold spices,  authentic recipes, and elegant ambiance come together beautifully.",
    backgroundImage: "/Aspects-hero.png",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Aspects",
    subtitle: null,
    image: "/aspects.png",
    imageCaption: "Aspects Enderby",
   content: [
  "Aspects is a modern Indian restaurant and bar located in Enderby, Leicestershire — offering a refined blend of authentic Indian flavours and classic English favourites.",
  "Our acclaimed chefs create dishes using traditional homemade spices and sauces, ensuring every plate delivers an unforgettable experience. Whether you’re dining in or ordering takeaway, every meal is cooked with heart and heritage.",
  "The open, contemporary restaurant design makes it ideal for family gatherings, celebrations, or relaxed evenings with friends. We believe dining is more than food — it’s a way to connect, laugh, and create lasting memories.",
  "“A great chef knows the spices; an excellent chef knows how to use them.”",
  "Welcome to Aspects — where the true taste of India comes alive."
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
    title: "Aspects Gallery",
    images: [
      '/a1.jpg', '/a2.png', '/a3.jpg', '/a4.jpg', '/a5.jpg',
  '/a6.jpg', '/a7.jpg', '/a8.jpg', '/a9.jpg'
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.428246942207!2d-1.2144060236171327!3d52.59273597208446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775dc1002096e5%3A0xb1372fa4ff209cff!2s7%20Mill%20Hill%2C%20Enderby%2C%20Leicester%20LE19%204AL%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1726313610000!5m2!1sen!2suk",
    brandColor: '#E1B43B'
  }
};
