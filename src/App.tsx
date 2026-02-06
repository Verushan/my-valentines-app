import { useRef, useState } from 'react';
import './App.css'
import HeartRain from './components/heart-rain/heart-rain'
import Question from './components/question/question';

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = (songPath: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current = new Audio(songPath);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    audioRef.current.play().catch(_ => console.log("User interaction required"));
  }

  const success = () => {
    setHasAccepted(true);
    playAudio("music/pardesiya.mp3");
  }

  const failure = () => {
    setHasAccepted(false);
    playAudio("music/chand-kagaz-ka.mp3");
  }

  if (hasAccepted) {
    return (
      <div className="initialBackground content">
        <HeartRain></HeartRain>
      </div>
    )
  } else {
    return (
      <div className="initialBackground content">
        <Question
          onYesClicked={() => success()}
          noAttempted={() => failure()}
        ></Question>
      </div>
    )
  }
}

export default App
