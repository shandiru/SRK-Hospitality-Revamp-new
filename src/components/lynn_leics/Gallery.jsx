import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/lynn1.png',
  '/lynn3.png',
  '/lynn4.png',
  '/lynn5.png',
  '/lynn7.png',
  '/lynn8.png',
  '/lynn2.png'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="The Lynn Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
