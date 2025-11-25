import RestaurantGallery from "../../components/common/RestaurantGallery";

const images = [
  '/a1.jpg', '/a2.png', '/a3.jpg', '/a4.jpg', '/a5.jpg',
  '/a6.jpg', '/a7.jpg', '/a8.jpg', '/a9.jpg'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Aspects Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
