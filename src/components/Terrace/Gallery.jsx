import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/terarce4.jpg',
  '/terarce5.jpg',
  '/terarce6.jpg',
  '/terarce7.jpg',
  '/terarce8.jpg',
  '/terarce9.jpg',
  '/terarce10.jpg',
  '/terarce11.jpg',
  '/terarce12.jpg'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Terrace Bar Drinks Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
