import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/f1.jpg',
  '/f2.jpg',
  '/f3.jpg',
  '/f4.jpg',
  '/f5.jpg',
  '/f6.jpg',
  '/f7.jpg',
  '/f8.jpg',
  '/f9.jpg'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Freddies Desserts Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
