# Restaurant Data Structure

This directory contains data files for each restaurant, organized by restaurant name.

## Structure

```
src/data/
├── alnaseeb/
│   ├── restaurantData.js  # Main data export
│   └── menu.json          # Menu sections and items
└── [other-restaurants]/
```

## Usage

Import the restaurant data in your page component:

```javascript
import { alnaseebData } from "../data/alnaseeb/restaurantData";
```

Then spread the data into the common restaurant components:

```javascript
<RestaurantWelcomeSection {...alnaseebData.welcome} />
<RestaurantAboutSection {...alnaseebData.about} />
<RestaurantMenuFlipbook {...alnaseebData.menu} />
<RestaurantGallerySection {...alnaseebData.gallery} />
<RestaurantContactSection {...alnaseebData.contact} />
<RestaurantMapSection {...alnaseebData.map} />
```

## Data Schema

### Welcome Section
```javascript
{
  title: string,
  subtitle: string,
  backgroundImage: string,
  brandColor: string (hex)
}
```

### About Section
```javascript
{
  title: string,
  subtitle: string | null,
  image: string,
  imageCaption: string,
  content: string[], // Array of HTML strings
  brandColor: string (hex)
}
```

### Menu Section
```javascript
{
  restaurantName: string,
  tagline: string,
  menuSections: array, // Imported from menu.json
  accentColor: string (hex)
}
```

### Gallery Section
```javascript
{
  title: string,
  images: string[], // Array of image paths
  brandColor: string (hex)
}
```

### Contact Section
```javascript
{
  brandColor: string (hex),
  openingHours: [
    {
      label: string, // Optional label like "Pickup & Delivery"
      time: string   // Hours like "Monday to Sunday: 5:00 PM – 10:45 PM"
    }
  ],
  address: string, // HTML string with <br /> for line breaks
  addressLink: string (Google Maps URL),
  phone: string,
  email: string,
  website: {
    url: string,
    display: string
  },
  socialMedia: {
    instagram: string,
    facebook: string
  }
}
```

### Map Section
```javascript
{
  title: string,
  mapEmbedUrl: string (Google Maps embed URL),
  brandColor: string (hex)
}
```

## Adding a New Restaurant

1. Create a new folder: `src/data/[restaurant-name]/`
2. Create `restaurantData.js` with the data structure above
3. Create `menu.json` with menu sections
4. Import and use in your page component
