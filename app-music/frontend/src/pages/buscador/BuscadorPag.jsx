
import './buscadorpag.css'
import { Buscador } from '../../components/buscador/Buscador.jsx';
import { Header } from '../../components/header/Header.jsx';
import { BottomNavigation } from '../../components/bottom-navigation-header/BottomNavigation.jsx';
import { useFetchSongs } from '../../../hooks/usefetchSongs.jsx';
import { Cancion } from '../../components/cancion/Cancion.jsx';

const BuscadorPag = () => {



    const { canciones, loading, error } = useFetchSongs()



    return (
        <>
            <div className="Header-main">
                <Header />
                <main className="Main-buscador">
                    <h2 className='Main-titulo'>Busca tu canción</h2>

                    <Buscador />



                    <div className="Galeria-canciones">
                        {
                            loading? (
                                <p>Cargando canciones</p>
                            ) : error ? (
                                <p>Error al cargar {error}</p>
                            ) : canciones.length > 0 ? (

                                <ul className="Galeria-ul">
                                    {
                                        canciones.map((cancion) => {

                                            return (
                                            <li className="Galeria-li" key={cancion._id}><Cancion nombre={cancion.nombre} artista={cancion.artista} imagen={cancion.imagen} /></li>

                                        )})
                                    }
                                </ul>
                            ) : <p>No hay canciones disponibles</p>

                            
                        }

                    </div>




                </main>
            </div>
            <BottomNavigation />
        </>
    );
}

export default BuscadorPag;