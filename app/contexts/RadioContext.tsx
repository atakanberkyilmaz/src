"use client";
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

export const useRadioContext = () => useContext(RadioContext);

export const RadioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStation, setCurrentStation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play fonksiyonu
  const playStation = (stationUrl: string) => {
    if (audioRef.current) {
      if (currentStation !== stationUrl) {
        setCurrentStation(stationUrl);
        audioRef.current.src = stationUrl;
      }

      
      audioRef.current.volume = 1.0;
      audioRef.current.muted = false;

      console.log("Radyo başlatılıyor: ", stationUrl); 

      audioRef.current.play()
        .then(() => {
          console.log("Radyo çalmaya başladı:", stationUrl);
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Oynatma hatası:", error);
          alert("Radyo çalınamıyor. Tarayıcı izinleri veya bağlantı ile ilgili bir sorun olabilir.");
        });
    }
  };


  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Oynatma hatası:", error);
          });
      }
    }
  };


  useEffect(() => {
    const audioElement = audioRef.current;
    
    const handleCanPlay = () => {
      console.log("Audio hazır, oynatılabilir.");
    };
    
    const handlePlay = () => {
      console.log("Oynatma başladı.");
    };
    
    const handleError = (error: any) => {
      console.error("Audio hatası:", error);
    };

    if (audioElement) {
      audioElement.addEventListener("canplay", handleCanPlay);
      audioElement.addEventListener("play", handlePlay);
      audioElement.addEventListener("error", handleError);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("canplay", handleCanPlay);
        audioElement.removeEventListener("play", handlePlay);
        audioElement.removeEventListener("error", handleError);
      }
    };
  }, [currentStation]);

  return (
    <RadioContext.Provider
      value={{ currentStation, isPlaying, playStation, togglePlay }}
    >
      {children}
      <audio ref={audioRef} controls /> 
    </RadioContext.Provider>
  );
};
