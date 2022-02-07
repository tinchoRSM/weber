import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../img/svg/weber-logo.svg'
import {ReactComponent as CartIcon} from '../img/svg/cart-4-svgrepo-com.svg'
import { ReactComponent as MenuIcon } from '../img/svg/menu-svgrepo-com.svg'


const menus = [
    { name: "Начало", location: "/" },
    { name: "За нас", location: "/forus" },
    { name: "Обслужване на клиенти", location: "/clients" },
    { name: "Съвети", location: "/tips"},
    { name: "Магазини", location: "/location" },
    { name: <CartIcon/>, location: "/shop" }

]

function Navigation() {

    const [show, showMenu] = useState(false)



    return (
        <nav className="flex items-center bg-black p-3 flex-wrap fixed w-full lg:justify-center ">
            <Link to="/" className="p-2 mr-4 inline-flex items-center lg:flex-1 lg:justify-end">
                <LogoIcon className="h-[36px] w-[78px]" />
            </Link>
           
            <button onClick={() => showMenu(!show)} className="text-white inline-flex p-3 hover:bg-red-700 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler">
                <MenuIcon className="h-[24px] w-[24px] fill-white" />
            </button>
            <div 
            
            className={
            
                (show ? "hidden" : "" ) + "hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"}
                
                >
                <div className="lg:inline-flex lg:flex-1 lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    
                    {menus.map((menu) => {
                        return <NavItem name={menu.name} location={menu.location} />
                    })}

                    

                </div>
            </div>
        </nav>
    )
}

function NavItem(props) {
    return (
        <Link
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-red-700 hover:text-white"
            to={`${props.location}`}
        >
            <span>{props.name}</span>
        </Link>
    )
}




export default Navigation;