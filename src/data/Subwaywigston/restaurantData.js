// Al Naseeb Restaurant Data
import menuSections from './menu.json';

export const Subwaywigston = {
    // Welcome Section Data
    welcome: {
        title: "Welcome To Subway Wigston",
        subtitle: "Multinational fast food restaurant located in the heart of Wigston, Leicester.",
        backgroundImage: "/subway.webp",
        brandColor: "#DDB64E"
    },

    // About Section Data
    about: {
        title: "Welcome to Subway Wigston",
        subtitle: null,
        image: "/subway2.avif",
        imageCaption: "The Subway Wigston",
        content: [
            "At your local Subway®, Wigston, when we say you can Make It What You Want®, we really mean it. Create your own sub, salad, or wrap and fill it with everything you love. Craving something meaty but want to skip the olives? Go ahead. Want to turn up the heat with extra hot sauce? Absolutely. Extra cheese on top of extra cheese? If that’s your thing, we’ve got you covered. Choose from our delicious range of meats or plant-based alternatives, add your favourite cheeses, pile on freshly cut veggies, and finish with one of our signature sauces.",
            "All Subway® stores are independently owned, with talented Sandwich Artists™ ready to take your order in-store, for collection via our Subcard® app, or delivered straight to your door through Just Eat, Uber Eats, or Deliveroo. So go meaty, go plant-based, go spicy, go saucy — or just go ALL OUT.",
        ]
        ,
        brandColor: "#DDB64E"
    },

    // Menu Flipbook Data
    menu: {
        restaurantName: "Subway Wigston",
        tagline: "Multinational fast food restaurant",
        menuSections: menuSections,
        accentColor: "#DDB64E"
    },

    // Gallery Data
    gallery: {
        title: "The lynn Gallery",
        images: [
            "subway5.png",
            "subway4.png",
            "subway6.png",
            "subway3.avif",
            "subway2.avif",
            "subway2.jpg"
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
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1210.8007386040015!2d-1.14688036386743!3d52.631045506438774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760dda82313d5%3A0xe2241de5d6fc08db!2sSubway!5e0!3m2!1sen!2slk!4v1761743567424!5m2!1sen!2slk",
        brandColor: '#E1B43B'
    }
};
