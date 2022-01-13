import React from 'react';
import { Link }from 'react-router-dom';

import {ReactComponent as LogoIcon} from '../img/svg/weber-logo.svg'
import {ReactComponent as HomeIcon} from '../img/svg/home-svgrepo-com.svg'
import {ReactComponent as CartIcon} from '../img/svg/cart-4-svgrepo-com.svg'
 

function Header() {
    return (
        <Navigation>    
            <NavItem destination="/" icon={<LogoIcon className="h-[36px] w-[78px]"/>} text=""/>
            <NavItem destination="/" icon="" text="Начало"/>
            <NavItem destination="/forus" icon="" text="За нас" />
            <NavItem destination="/clients" icon="" text="Обслужване на клиенти" />
            <NavItem destination="/location" icon="" text="Магазини" />
            <li className="flex center justify-center items-center px-4 h-full hover:bg-red-700">
                <a href="https://bradva.net/weber-barbecue/"><CartIcon/></a>
            </li>
            

            
        </Navigation>
    );
}   


function Navigation(props) {
    return (
        <nav className="bg-black text-white h-[70px] px-4 fixed w-full">
            <ul className="max-w-full h-full flex justify-center items-center">
                { props.children }
            </ul>
        </nav>
    )
}

function NavItem(props) {
    return(
        <li className="flex center justify-center items-center px-4 h-full hover:bg-red-700">
            <Link to={props.destination} className="flex">
                <span className="" >{props.icon}</span>
                <span>{props.text}</span>
                
            </Link>
        </li>
    )
}



export default Header;

