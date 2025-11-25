import RestaurantGallery from "../common/RestaurantGallery";

const images = [
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
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="The Walnut Tree Inn Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
