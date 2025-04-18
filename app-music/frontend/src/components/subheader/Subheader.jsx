

import './subheader.css'
import { BsMusicNoteList } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router';


const SubHeader = () => {
    return (
        <>

            <header className="SubHeader">
                <nav className="Subheader-nav">
                    <ul className="Subheader-ul">

                        <NavLink to='/bibliotecas'><li className="Subheader-li">
                            <div className="Subheader-content">
                                <BsMusicNoteList />
                                <p className='Subheader-p'>Mis listas</p>
                            </div>
                        </li></NavLink>





                        <NavLink to='/favoritos'><li className="Subheader-li">
                            <div className="Subheader-content">
                                <GoHeart />
                                <p className='Subheader-p'>Mis favoritos</p>
                            </div>
                        </li></NavLink>


                        <NavLink to='soundslike/songs'><li className="Subheader-li">
                            <div className="Subheader-content">
                                <svg className='Subheader-svg' viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.21436 50.6786V78.3214M36.8572 27.6428V101.357M64.5001 4.60712V124.393M92.1429 27.6428V101.357M119.786 50.6786V78.3214" strokeWidth="9.21429" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='Subheader-p'>Mis  SoundsLike</p>
                            </div>
                        </li></NavLink>


                    </ul>
                </nav>
            </header>

        </>
    );
}

export default SubHeader;