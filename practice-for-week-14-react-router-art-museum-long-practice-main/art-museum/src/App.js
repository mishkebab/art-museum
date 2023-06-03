import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";
import GalleryView from "./components/GalleryView";
import { Route, Switch } from "react-router-dom";

function App() {
  console.log(harvardArt.records)
  return (
    <div className="page-wrapper">

      {/* <Route path="/galleries/:galleryId" component={GalleryView}/> */}
      <Switch>
        <Route path="/galleries/:galleryId"> 
          <GalleryView galleries={harvardArt.records}/>
          <GalleryNavigation galleries={harvardArt.records}/> 
        </Route>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>Look but dont touch. please select a gallery in the nav bar.</p>
          <GalleryNavigation galleries={harvardArt.records}/> 
        </Route>  
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
