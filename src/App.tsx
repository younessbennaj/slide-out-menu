import "./App.css";
import NavBar from "./components/NavBar";
import PicturesFeed from "./components/PicturesFeed";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <PicturesFeed pictures={data} />
      </main>
    </>
  );
}

const data = [
  {
    src: "https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=640&auto=format&fit=crop",
    alt: "Boats on water",
    photographer: "Yu Kato",
    originalSource:
      "https://unsplash.com/fr/photos/bateaux-sur-plan-deau-824OwkP7sgk",
    aspectRatio: "640 / 427",
  },
  {
    src: "https://images.unsplash.com/photo-1559245718-212fba2d22e2?q=80&w=640&auto=format&fit=crop",
    alt: "Earring man next to the street",
    photographer: "Gregoire Jeanneau",
    originalSource:
      "https://unsplash.com/fr/photos/boucle-doreille-homme-a-cote-de-la-rue-7lYNPI6OpcA",
    aspectRatio: "640 / 960",
  },
  {
    src: "https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=80&w=640&auto=format&fit=crop",
    alt: "Empty road",
    photographer: "Andre Benz",
    originalSource: "https://unsplash.com/photos/7Kz6WfD0O84",
    aspectRatio: "640 / 427",
  },
  {
    src: "https://images.unsplash.com/photo-1542955898-fab18e01b3ba?q=80&w=640&auto=format&fit=crop",
    alt: "Red Pagoda Temple Architecture Photography",
    photographer: "Charles Postiaux",
    originalSource:
      "https://unsplash.com/fr/photos/photographie-darchitecture-du-temple-de-la-pagode-rouge-VsGyECexVy4",
    aspectRatio: "640 / 800",
  },
  // {
  //   src: "https://sandpack-bundler.vercel.app/img/pink-architecture.jpg",
  //   alt: "An abstract geometric shape, pink box on blue backdrop",
  //   photographer: "nic chi",
  //   originalSource: "https://unsplash.com/photos/vRwGMHTtbJY",
  //   aspectRatio: "640 / 640",
  // },
];

export default App;
