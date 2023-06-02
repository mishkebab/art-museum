import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";

function App() {
  console.log(harvardArt.records)
  return (
    <div className="page-wrapper">
      {/* <Route path="/galleries/:galleryId" component={GalleryView}/> */}
      <Route path="/galleries/:galleryId"> 
        <GalleryView galleries={harvardArt.records}/>
      </Route>

      <GalleryNavigation galleries={harvardArt.records}/> 
    </div>
  );
}

export default App;
