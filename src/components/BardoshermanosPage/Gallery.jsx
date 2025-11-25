import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/d1.png',
  '/d2.png',
  '/d3.png',
  '/d4.png',
  '/d5.png',
  '/d6.png',
  '/d7.png',
  '/d8.png',
  '/d9.png',
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="FUSIC Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
