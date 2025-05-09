

import './header.css'

import '../bottom-navigation-header/bottom-navigation.css'
import { BsMusicNoteList } from "react-icons/bs";

import { TbMenu4 } from "react-icons/tb";

import { useState } from 'react';
import { MenuLateral } from '../menu/Menu';

import { FaCirclePlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { BiHomeAlt2 } from "react-icons/bi";

import { NavLink } from 'react-router';


export const Header = () => {

    const [opened, setOpened] = useState(false)



    const handleOpen = () => {
        setOpened(prevState => !prevState)
    }



    return (

        <>
            <header className="Header">
                <nav className="Header-nav">

                    <ul className="Header-ul">





                        {/* Esto es el Bottom navigation en version mobile */}
                        {/* bottom-li es lo */}

                        <li className="Bottom-li"> <NavLink to='/home'>
                        <BiHomeAlt2 className='Header-link'/></NavLink>

                        </li>



                        <li className="Bottom-li"> <NavLink to='/buscador'>
                        <FiSearch className='Header-link'/></NavLink>


                        </li>

                        <li className="Bottom-li"> <NavLink to='/bibliotecas'>
                           <BsMusicNoteList className='Header-link'/></NavLink>


                        </li>

                        <li className="Header-li" onClick={handleOpen}><TbMenu4 className='Header-icon '  /></li>
                        {/* <li className="Header-li"><NavLink to='/bibliotecas'><BsMusicNoteList */}

                            {/* className='Header-icon' /></NavLink></li> */}
                    </ul>
                    {/* <ul className="HeaderBottom-ul"> */}
                    {/* </ul> */}

                </nav>

            <MenuLateral opened={opened} onClose={() => setOpened(false)} />
            </header>

        </>
    );
}








// export const HeaderSounds = () => {

//     const [opened, setOpened] = useState(false)



//     const handleOpen = () => {
//         setOpened(prevState => !prevState)
//     }



//     return (

//         <>
//             <header className="Header">
//                 <nav className="Header-nav">
                    
//                     <ul className="Header-ul">





//                         {/* Bottom navigation en version mobile */}
                     


//                         <li className="Bottom-li"> <NavLink to='/home'>
//                             <svg className='Footer-icons' viewBox="0 0 24 25"  xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M20 10.5C20 10.2348 19.8946 9.98043 19.7071 9.79289C19.5196 9.60536 19.2652 9.5 19 9.5C18.7348 9.5 18.4804 9.60536 18.2929 9.79289C18.1053 9.98043 18 10.2348 18 10.5H20ZM5.99999 10.5C5.99999 10.2348 5.89463 9.98043 5.7071 9.79289C5.51956 9.60536 5.26521 9.5 4.99999 9.5C4.73477 9.5 4.48042 9.60536 4.29288 9.79289C4.10535 9.98043 3.99999 10.2348 3.99999 10.5H5.99999ZM20.293 13.207C20.4816 13.3892 20.7342 13.49 20.9964 13.4877C21.2586 13.4854 21.5094 13.3802 21.6948 13.1948C21.8802 13.0094 21.9854 12.7586 21.9877 12.4964C21.9899 12.2342 21.8891 11.9816 21.707 11.793L20.293 13.207ZM12 3.5L12.707 2.793C12.5195 2.60553 12.2652 2.50021 12 2.50021C11.7348 2.50021 11.4805 2.60553 11.293 2.793L12 3.5ZM2.29299 11.793C2.19748 11.8852 2.1213 11.9956 2.06889 12.1176C2.01648 12.2396 1.98889 12.3708 1.98774 12.5036C1.98659 12.6364 2.01189 12.7681 2.06217 12.891C2.11245 13.0139 2.1867 13.1255 2.28059 13.2194C2.37449 13.3133 2.48614 13.3875 2.60904 13.4378C2.73193 13.4881 2.86361 13.5134 2.99639 13.5123C3.12917 13.5111 3.26039 13.4835 3.38239 13.4311C3.5044 13.3787 3.61474 13.3025 3.70699 13.207L2.29299 11.793ZM6.99999 22.5H17V20.5H6.99999V22.5ZM20 19.5V10.5H18V19.5H20ZM5.99999 19.5V10.5H3.99999V19.5H5.99999ZM21.707 11.793L12.707 2.793L11.293 4.207L20.293 13.207L21.707 11.793ZM11.293 2.793L2.29299 11.793L3.70699 13.207L12.707 4.207L11.293 2.793ZM17 22.5C17.7956 22.5 18.5587 22.1839 19.1213 21.6213C19.6839 21.0587 20 20.2956 20 19.5H18C18 19.7652 17.8946 20.0196 17.7071 20.2071C17.5196 20.3946 17.2652 20.5 17 20.5V22.5ZM6.99999 20.5C6.73477 20.5 6.48042 20.3946 6.29288 20.2071C6.10535 20.0196 5.99999 19.7652 5.99999 19.5H3.99999C3.99999 20.2956 4.31606 21.0587 4.87867 21.6213C5.44128 22.1839 6.20434 22.5 6.99999 22.5V20.5Z"  />
//                             </svg></NavLink>

//                         </li>


//                         <li className="Footer-li"> <NavLink to='/publicacion'>
//                         <FaCirclePlus className='Btn-publicacion '/>
//                         </NavLink>

//                         </li>


//                         <li className="Bottom-li"> <NavLink to='/buscar'>
//                             <svg className='Footer-icons' viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M21.71 20.79L18 17.11C19.4401 15.3144 20.1375 13.0353 19.9488 10.7413C19.7601 8.4473 18.6997 6.31278 16.9855 4.77664C15.2714 3.2405 13.0338 2.41951 10.7329 2.48247C8.43204 2.54543 6.24273 3.48756 4.61515 5.11514C2.98757 6.74272 2.04543 8.93203 1.98247 11.2329C1.91951 13.5338 2.74051 15.7714 4.27665 17.4855C5.81279 19.1997 7.94731 20.2601 10.2413 20.4488C12.5353 20.6375 14.8144 19.9401 16.61 18.5L20.29 22.18C20.383 22.2737 20.4936 22.3481 20.6154 22.3989C20.7373 22.4497 20.868 22.4758 21 22.4758C21.132 22.4758 21.2627 22.4497 21.3846 22.3989C21.5064 22.3481 21.617 22.2737 21.71 22.18C21.8902 21.9935 21.991 21.7443 21.991 21.485C21.991 21.2257 21.8902 20.9765 21.71 20.79ZM11 18.5C9.61553 18.5 8.26216 18.0895 7.11101 17.3203C5.95987 16.5511 5.06266 15.4579 4.53285 14.1788C4.00303 12.8997 3.86441 11.4922 4.13451 10.1344C4.4046 8.7765 5.07129 7.52922 6.05026 6.55025C7.02922 5.57128 8.2765 4.9046 9.63437 4.6345C10.9922 4.3644 12.3997 4.50303 13.6788 5.03284C14.9579 5.56265 16.0511 6.45986 16.8203 7.611C17.5895 8.76215 18 10.1155 18 11.5C18 13.3565 17.2625 15.137 15.9498 16.4497C14.637 17.7625 12.8565 18.5 11 18.5Z"  />
//                             </svg></NavLink>


//                         </li>

//                         <li className="Header-li" onClick={handleOpen}><TbMenu4 className='Header-icon' /></li>
//                         <li className="Header-li"><NavLink to='/bibliotecas'><BsMusicNoteList

//                             className='Header-icon' /></NavLink></li>
//                     </ul>
//                     {/* <ul className="HeaderBottom-ul"> */}
//                     {/* </ul> */}

//                 </nav>

//             </header>
//             <MenuLateral opened={opened} />

//         </>
//     );
// }