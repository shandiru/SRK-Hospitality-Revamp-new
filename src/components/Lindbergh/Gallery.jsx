
import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  '/lynnn1.png',
  '/lynnn2.png',
  '/lynnn3.png',
  '/lynnn4.png'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="The Lindbergh's Sports Bar"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
