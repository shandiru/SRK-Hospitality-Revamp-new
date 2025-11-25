import RestaurantGallery from "../common/RestaurantGallery";

const images = [
  "subway5.png",
  "subway4.png",
  "subway6.png",
  "subway3.avif",
  "subway2.avif",
  "subway2.jpg"
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Subway Wigston Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
