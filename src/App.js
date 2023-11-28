import './App.css';
import { useState } from 'react';
import { Background } from './components/background';
import { Player } from './components/player';
import { Header } from './components/header';
import { Slider } from './components/slider';

//images_background
import { back1, back2, back3 } from './assets/image';
//musics
import { sunflower } from './assets/music/music';

export function App() {
  const [percentage, setPercentage] = useState(0);

  const onChange = (e) => {
    setPercentage(e.target.value);
  };

  return (
    <div className="App">
      <Background img={back3} />
      <Header />
      {/* <Player sliderFunction={onChange} percentage={percentage} /> */}
      <Player>
        <Slider onChange={onChange} percentage={percentage} />
      </Player>
    </div>
  );
}
