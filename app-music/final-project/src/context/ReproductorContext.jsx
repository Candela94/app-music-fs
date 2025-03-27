

import { createContext, useState, useRef } from "react";
import { BarraReproduccion } from "../components/barra-reproduccion/BarraReproduccion.jsx";





//'https://medium.com/@studioroma/audioplayer-usecontext-3373a713228f'
//1. Creamos contexto
export const ReproductorContext = createContext();



//2.Componente que envuelve el contexto


export const ReproductorContextProvider = ({children}) => {


    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0); // Progreso de la barra
    const [duration, setDuration] = useState(0); // Duración total del audio

    //uso de useRef: "https://react.dev/reference/react/useRef"
    const audioRef = useRef(null); // Referencia al elemento de audio




    //Play-pause
    const handlePlay = () => {

        if(isPlaying) {

            audioRef.current.pause()

        }  else {

            audioRef.current.play()
        }

        setIsPlaying(!isPlaying)



    }



    //Progreso de la barra
    const handleProgress = () => {
        if (audioRef.current && audioRef.current.duration) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
      };

    const handleDuration = () => {
        if (audioRef.current && audioRef.current.duration) {
          console.log('Audio duration:', audioRef.current.duration);
          setDuration(audioRef.current.duration);
        }
      };


    return(
        <ReproductorContext.Provider value={{isPlaying,progress,audioRef, duration, handlePlay, handleProgress, handleDuration}}>{children}</ReproductorContext.Provider>
    )



}