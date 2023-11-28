import './App.css';
import { useState, useRef } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  const onChange = (e) => {
    //porcentagem do slider
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value; //mudar para parte da musica com o slider
    setPercentage(e.target.value);
    console.log(percentage);
  };

  const play = () => {
    // função de play e pause
    const audio = audioRef.current;
    audio.volume = 0.5;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } else if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime; ///60

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="App">
      <Header />
      <Background img={back3} />
      <audio
        ref={audioRef}
        src={sunflower}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        onTimeUpdate={getCurrDuration}
      ></audio>
      <Player isPlaying={isPlaying} pausePlay={play}>
        <Slider
          onChange={onChange}
          percentage={percentage}
          duration={duration}
          currentTime={currentTime}
        />
      </Player>
    </div>
  );
}
