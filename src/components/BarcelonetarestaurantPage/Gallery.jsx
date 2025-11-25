import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/b1.png',
  '/b2.png',
  '/b3.png',
  '/b4.png',
  '/b5.png',
  '/b6.png',
  '/b7.png',
  '/b8.png',
  '/b9.png',
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Barceloneta Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
