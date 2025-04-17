



import './cards.css'
import { Button } from '../buttons/Button';
import { FaPlay } from "react-icons/fa6";
import { useContext } from 'react';
import { ReproductorContext } from '../../context/ReproductorContext';
import { TbPlayerPlayFilled } from "react-icons/tb";
import { HiMiniPause } from "react-icons/hi2";

// Aqui tengo que poner props, esto es una prueba {img,h3,nombre}
export const CardTendencias = () => {

    const { handlePlay, isPlaying, audioRef } = useContext(ReproductorContext)
    console.log("Contexto en CardTendencias:", { isPlaying, audioRef });

    return (
        <>

            <div className="Card">
                <img src="../img/sensenra.jpg" alt="portada" className="Card-img" />
                <audio src="./img/audio.mp3"

                    ref={audioRef}
                >

                </audio>

                <div className="Card-informacion">
                    <h3 className="Card-nombre">Nombre</h3>
                    <p className="Card-grupo">Grupo</p>
                </div>

                <div className="Boton">

                    <Button onClick={() => {
                        console.log("Botón presionado");
                        handlePlay();
                    }} variant='solid'>{isPlaying ? <HiMiniPause /> : <TbPlayerPlayFilled />} </Button>
                </div>
            </div>
        </>

    );
}



export const CardAnimo = ({ variant, children, h3, icon }) => {



    const card = () => {

        switch (variant) {

            case 'relax': return 'relaxMode'



            case 'concentrated': return 'concentratedMode'


            case 'energy': return 'energyMode'


            case 'melancoly': return 'melancolyMode'


            default:


        }

    }

    const cardClass = card();

    return (

        <>
            <div className={`Card-animo ${cardClass}`}>

                <div className="Card-animoIcon">{icon}
                    <h5 className="text">{children}</h5></div>
            </div>



        </>
    );
}





export const CardRecomendaciones = ({ img, mix }) => {
    return (
        <>
            <div className="CardRecomendaciones">

                <img src={img} alt="img" className="CardRecomendaciones-img" />


                <div className="titulo">

                    <h4>{mix}</h4>
                </div>
            </div>
        </>
    );
}






