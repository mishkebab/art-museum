import { useParams } from "react-router-dom";

const GalleryView = ( {galleries} ) => {
    const { galleryId } = useParams();
    let currentGallery;
    for (let i = 0; i < galleries.length; i++) {
        if (galleries[i].gallerynumber === galleryId) {
            currentGallery = galleries[i];
        }
        
    }
    return (
        <h2>{currentGallery.name}</h2>
        // <h1>Hello from Gallery View</h1>
    )
}

export default GalleryView;