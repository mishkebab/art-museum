import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ( {galleries} ) => {
    const { galleryId } = useParams();
    let currentGallery;
    for (let i = 0; i < galleries.length; i++) {
        if (galleries[i].gallerynumber === galleryId) {
            currentGallery = galleries[i];
        }
        
    }

    let artArray = [];
    const imgSource = currentGallery.objects[0].images
    for (let i = 0; i < imgSource.length; i++) {
        artArray.push(imgSource[i].baseimageurl)
    }

    return (
        <div>
            <h2>{currentGallery.name}</h2>
            <div>
                <ArtImageTile art=/>
                {artArray.map(function(art, i){
                    return <img src={art} key={i} width="200px" height="auto"/>
                })}
            </div>
        </div>
    )
}

export default GalleryView;