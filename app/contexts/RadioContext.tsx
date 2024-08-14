"use client"; // Bunu ekleyin

import { createContext, useContext, useState } from "react";

const RadioContext = createContext<any>(null);

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

  const playStation = (stationUrl: string) => {
    setCurrentStation(stationUrl);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <RadioContext.Provider value={{ currentStation, isPlaying, playStation, togglePlay }}>
      {children}
    </RadioContext.Provider>
  );
};
