import './App.css';
import { Background } from './components/background';
import { Player } from './components/player';
import { Header } from './components/header';

//images_background
import { back1 } from './assets/image';
//musics
import { sunflower } from './assets/music/music';

export function App() {
  return (
    <div className="App">
      <Background img={back1} />
      <Header />
      <Player />
    </div>
  );
}
