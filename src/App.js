import './App.css';
import { useState, useRef, useEffect } from 'react';
import { musicList } from './util/music-list';

import { Background } from './components/background';
import { Player } from './components/player';
import { Header } from './components/header';
import { Slider } from './components/slider';
import { WarningMessage } from './components/warningMessage';

//images_background
import { back1, back2, back3 } from './assets/image';
//musics
import { sunflower, whatsupdanger } from './assets/music/music';

export function App() {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [randomActive, setRandomActive] = useState(false);
  const [onRepeat, setOnRepeat] = useState(false);

  const [messageOpen, setMessageOpen] = useState(false);
  const [message, setMessage] = useState('message here');

  const audioRef = useRef();

  const audio = audioRef.current;

  let index = 0;

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    }
  }, [currentSong]);

  const HandleRandomActive = () => {
    if (!randomActive) {
      setRandomActive(true);
    } else if (randomActive) {
      setRandomActive(false);
    }
  };

  const HandleOnRepeat = () => {
    if (!onRepeat) {
      setOnRepeat(true);
    } else if (onRepeat) {
      setOnRepeat(false);
    }
  };

  const HandleMessage = (msg) => {
    if (!messageOpen) {
      setMessage(msg);
      setMessageOpen(true);
    } else {
      setMessageOpen(false);
    }
  };

  const onChange = (e) => {
    //porcentagem do slider
    audio.currentTime = (audio.duration / 100) * e.target.value; //mudar para parte da musica com o slider
    setPercentage(e.target.value);
    //console.log(percentage);
  };

  const reset = () => {
    setPercentage(0);
  };

  const play = () => {
    //console.log('função de play e pause');
    // função de play e pause
    audio.volume = 0.2;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } else if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const randomNumber = () => {
    //gerar um numero aleatorio  entre 1(incluso) e 3(incluso)
    let randomNumber = Number.parseInt(Math.random() * musicList.length);

    while (randomNumber == currentSong) {
      //se cai a mesma musica ele vai repetir
      randomNumber = Number.parseInt(Math.random() * musicList.length);
    }

    return randomNumber;
  };

  const handleChangeSong = (direction) => {
    //função de avançar ou retroceder para outra musica
    index = currentSong;
    switch (direction) {
      case 'next':
        if (randomActive) {
          index = randomNumber();
        } else if (index == musicList.length - 1) {
          index = 0;
        } else {
          index = index + 1;
        }
        break;

      case 'previous':
        if (index == 0) {
          index = musicList.length - 1;
        } else {
          index = index - 1;
        }
        break;

      default:
        console.log('Aconteceu um erro no handleChangeSong');
    }
    reset();
    setCurrentSong(index);
    console.log('Musica ' + (index + 1));
  };

  const OnEndedSong = () => {
    if (!onRepeat) {
      handleChangeSong('next');
    } else {
      reset();
      audio.play();
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
      <WarningMessage
        isOpen={messageOpen}
        message={message}
        onClick={HandleMessage}
      />
      <Header />
      <div
        className="important"
        onClick={() =>
          HandleMessage(
            'Project made for fun and learning, all rights belong to Sony and images and music to its artists'
          )
        }
      ></div>
      <Background
        img={musicList[currentSong].image}
        custom={musicList[currentSong].custom}
      />
      <audio
        onEnded={OnEndedSong}
        ref={audioRef}
        src={musicList[currentSong].music}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        onTimeUpdate={getCurrDuration}
      ></audio>
      <Player
        isPlaying={isPlaying}
        randomActive={randomActive}
        onRepeat={onRepeat}
        pausePlay={play}
        nextSong={() => handleChangeSong('next')}
        prevSong={() => handleChangeSong('previous')}
        HandleRandom={HandleRandomActive}
        HandleOnRepeat={HandleOnRepeat}
        artistName={musicList[currentSong].artist}
        musicName={musicList[currentSong].name}
      >
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
