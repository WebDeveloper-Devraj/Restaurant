import { useSelector } from "react-redux";
import styles from "./Gallery.module.css";
import GalleryPhotos from "./GalleryPhotos";
import GalleryVideos from "./GalleryVideos";

const GalleryItems = () => {
  const {
    galleryImages: images,
    galleryVideos: videos,
    activeCategory,
    activeSubCategory,
  } = useSelector((store) => store.galleryCategories);

  const filterImages = images.filter((img) => img.category === activeCategory);
  const filterVideos = videos.filter(
    (video) => video.category === activeCategory
  );

  return (
    <div className={styles.galleryItems}>
      {activeSubCategory === "Photos" ? (
        <GalleryPhotos images={filterImages} />
      ) : (
        <GalleryVideos videos={filterVideos} />
      )}
    </div>
  );
};

export default GalleryItems;
