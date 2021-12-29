import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="w-full px-5 py-2 flex items-center bg-black text-white">
            <div className="container">
                <div className="hidden md:flex flex-1 gap-4 justify-end items-center uppercase text-xs">
                    <div className="py1"><img src="https://dw-images.weber.com/base/weber-logo.svg" alt="logo" /></div>
                        <Link to="/"><span className="menu-item">Начало</span></Link>
                        <Link to="/forus"><span className="menu-item">За нас</span></Link>
                        <Link to="/#"><span className="menu-item">Обслужване на клиенти</span></Link>
                        <Link to="/#"><span className="menu-item">Най-често задавани въпроси</span></Link>
                    </div>
                    <div className="flex md:hidden flex-1 justify-end">
                    <MenuiIcon/>
                </div>
            </div>

        </div>
    );
}   


const MenuiIcon = () =>(
    <div className="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </div>
);


export default Header;

