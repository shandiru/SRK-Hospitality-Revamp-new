import RestaurantGallery from "../RestaurantGallery";

export default function RestaurantGallerySection({ 
  title, 
  images, 
  brandColor 
}) {
  return (
    <RestaurantGallery
      title={title}
      images={images}
      brandColor={brandColor}
    />
  );
}
