import { createContext, useContext, useState, useEffect, useRef } from "react";

interface RadioContextType {
  currentStation: string | null;
  isPlaying: boolean;
  playStation: (stationUrl: string) => void;
  togglePlay: () => void;
}

const defaultContextValue: RadioContextType = {
  currentStation: null,
  isPlaying: false,
  playStation: () => {},
  togglePlay: () => {},
};

const RadioContext = createContext<RadioContextType>(defaultContextValue);

export const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error("useRadioContext must be used within a RadioProvider");
  }
  return context;
};

export const RadioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStation, setCurrentStation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playStation = (stationUrl: string) => {
    const testStationUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Test için yerel bir ses dosyası URL'si

    console.log("Playing station:", stationUrl);
    if (stationUrl !== currentStation) {
      setCurrentStation(testStationUrl); // Test için ses dosyasını kullan
      setIsPlaying(true);
    } else {
      togglePlay();
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => {
      if (prev) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      return !prev;
    });
  };

  useEffect(() => {
    if (audioRef.current && currentStation) {
      audioRef.current.src = currentStation;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentStation, isPlaying]);

  return (
    <RadioContext.Provider
      value={{ currentStation, isPlaying, playStation, togglePlay }}
    >
      {children}
      <audio ref={audioRef} />
    </RadioContext.Provider>
  );
};
