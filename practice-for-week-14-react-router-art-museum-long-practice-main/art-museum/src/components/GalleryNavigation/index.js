import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"

const GalleryNavigation = ( {galleries} ) => {
    const galleriesArr = galleries.map(gallery => {
            return (
                <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
            )
        })
    
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            {galleriesArr}
            <h1>Galleries</h1>
        </nav>
    )
}

export default GalleryNavigation