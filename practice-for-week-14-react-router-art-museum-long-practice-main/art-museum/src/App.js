import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";

function App() {
  console.log(harvardArt.records)
  return (
    <GalleryNavigation galleries={harvardArt.records}/>
  );
}

export default App;
