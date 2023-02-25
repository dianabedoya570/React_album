import { CardAlbum } from "./componentes/cardAlbum";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <CardAlbum
        image={
          "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/0f/90/cc/0f90ccce-c3c3-93f8-4776-422566d47557/191018104702.jpg/316x316bb.webp"
        }
        artistname={"Rozes"}
        typeArtist={"Solist"}
        title={"Under the Grave"}
        year={"2016"}
        gender={"dance"}
      ></CardAlbum>
      <CardAlbum
        image={
          "https://ishopmx.vtexassets.com/arquivos/ids/190886-1600-auto?v=637944159822370000&width=1600&height=auto&aspect=true"
        }
        artistname={"Arctic Monkeys"}
        typeArtist={"Band"}
        title={"AM"}
        year={"2013"}
        gender={"indie rock"}
      ></CardAlbum>
    </div>
  );
}

export default App;
