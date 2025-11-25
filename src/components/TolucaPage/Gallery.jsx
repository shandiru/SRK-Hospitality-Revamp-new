import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/Toluca-1.webp',
  '/Toluca-2.webp',
  '/Toluca-3.webp',
  '/Toluca-4.webp',
  '/Toluca-5.webp'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Toluca Mexican Bar & Grill Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
