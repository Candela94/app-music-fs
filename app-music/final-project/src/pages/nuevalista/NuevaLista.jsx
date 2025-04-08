

import { Header } from "../../components/header/Header";
import { BottomNavigation } from "../../components/bottom-navigation-header/BottomNavigation";
import './nuevalista.css'
import { Button } from "../../components/buttons/Button.jsx";
import { useState, useContext} from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext";
import { Notificaciones } from "../../components/notificaciones-success-error/Notificaciones.jsx";


const NuevaLista = () => {


    const VITE_URL = import.meta.env.VITE_URL
   
    const [nombreLista, setNombreLista] = useState('')
    const {mostrarNotificacion} = useContext(NotificacionesContext)


    const handleChange = async (e) => {

        setNombreLista(e.target.value)


    }




    //Crear una lista 
    const handleCrear = async (e) => {


        e.preventDefault();

        if(!nombreLista.trim()) {
            mostrarNotificacion("error", "El nombre de la lista es obligatorio");
            return;
        }
        
        try {
            const response = await fetch(`${VITE_URL}/api/v1/playlists` , {
                method:'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre: nombreLista})
            });

            const data = await response.json();


            if(response.ok){
                mostrarNotificacion("success", "Lista creada con éxito")
               setNombreLista('')

            }  else {

             mostrarNotificacion("error",  "Error al crear la lista");

            }


        } catch(e) {

            mostrarNotificacion("error", "Error al crear la lista");




        }


    }
    


    return ( 
        <>
        <Header />
        <main className="Main-lista">

                <h1>Crea tu nueva lista</h1>
            <form  className="Formulario-lista">
                <input 
                onChange={handleChange}
                value = {nombreLista}
                className="Formulario-input" type="text" placeholder="Nombre de tu lista"/>
                <Button type= 'submit' onClick={handleCrear} variant='solid'>Crear lista</Button>
            </form>

        </main>
        <BottomNavigation />
        </>
     );
}
 
export default NuevaLista;