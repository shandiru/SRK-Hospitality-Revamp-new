// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const WalnutData = {
  // Welcome Section Data
  welcome: {
    title: "Welcome To The Walnut Tree Inn",
    subtitle: "A boutique stay that blends modern comfort with classic warmth. Discover The Walnut Tree, a charming 3-star hotel where relaxed hospitality and thoughtful details create the perfect place to unwind.",
    backgroundImage: "/walnut-hero.jpg",
    brandColor: "#DDB64E"
  },

  // About Section Data
  about: {
    title: "Welcome to Walnut Tree ",
    subtitle: null,
    image: "/walnut-about.jpg",
    imageCaption: "The Walnut Tree Inn",
   content: [
  "Nestled in the heart of Blisworth, The Walnut Tree Inn blends rustic charm with contemporary comfort — offering a perfect spot to dine, relax, and stay.",
  "Our recently refurbished inn features 11 beautifully appointed rooms, a modern British restaurant, and a warm bar atmosphere where every guest feels at home.",
  "Whether you're joining us for a family celebration, a business event, or a quiet weekend escape, we promise a welcoming environment and exceptional hospitality.",
  "Award-Winning Hospitality",
  "We’re proud recipients of TripAdvisor’s Certificate of Excellence for seven consecutive years — a reflection of our dedication to quality, comfort, and genuine care for our guests."
]

,
    brandColor: "#DDB64E"
  },

  // Menu Flipbook Data
  menu: {
    restaurantName: "The Walnut Tree  Inn",
    tagline: "Modern Comfort Food & Coastal Cocktails",
    menuSections: menuSections,
    accentColor: "#DDB64E"
  },

  // Gallery Data
  gallery: {
    title: "The Walnut Tree Inn Gallery",
    images: [
       '/walnut-1.jpg',
  '/walnut-2.jpg',
  '/walnut-3.jpg',
  '/walnut-4.jpg',
  '/walnut-5.jpg',
  '/walnut-6.jpg',
  '/walnut-7.jpg',
  '/walnut-8.jpg',
  '/walnut-9.jpg',
  '/walnut-10.jpg',
  '/walnut-11.jpg',
  '/walnut-12.jpg'
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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.267567419277!2d-0.9489956233391866!3d52.18400897197503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877055e27ab800d%3A0xd6b9e41a1a4ef766!2sWalnut%20Tree%20Inn%2C%2021%20Station%20Rd%2C%20Blisworth%2C%20Northampton%20NN7%203DS%2C%20UK!5e0!3m2!1sen!2slk!4v1758088049180!5m2!1sen!2slk",
    brandColor: '#E1B43B'
  }
};
