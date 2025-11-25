
import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/fu1.jpg',
  '/fu2.jpg',
  '/fu3.jpeg',
  '/fu4.jpeg',
  '/fu5.jpeg',
  '/fu6.jpg',
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="FUSIC Food Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
