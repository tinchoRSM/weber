import React from 'react'
import {ReactComponent as Facbeook} from '../img/svg/social/FIcon_Global_Facebook.svg'
import {ReactComponent as Twitter} from '../img/svg/social/FIcon_Global_Twitter.svg'
import {ReactComponent as Instagram} from '../img/svg/social/FIcon_Global_Instagram.svg'
import {ReactComponent as Pinterest} from '../img/svg/social//FIcon_Global_Pinterest.svg'
import {ReactComponent as YouTube} from '../img/svg/social/FIcon_Global_YouTube.svg'
import {ReactComponent as LinkedIn} from '../img/svg/social/FIcon_Global_LinkedIn.svg'


export default function Footer() {
    return (
        <footer class=" bg-black text-white py-8">
            <div className="container px-10 flex flex-row">
                <ul className="">
                    <p className="text-red-700">Помощ</p>
                    <li>Политика за поверителност</li>
                    <li>Най-често задавани въпроси</li>
                    <li>Локатор на магазини</li>
                    <li>Гаранция на продуктите</li>
                    <li>Обслужване на клиенти</li>
                </ul>
                <ul className="px-10 w-[200px]"> 
                    <p className="text-red-700">За нас</p>
                    <li>История</li>
                    <li>Наследство</li>
                </ul>
                <ul className="" >
                    <p className="text-red-700" >Последвайте ни</p>
                    <li><a href="https://www.facebook.com/weberbbqbulgaria"><Facbeook className="social-icon"/></a></li>
                    <li><a href="https://twitter.com/webergrills"><Twitter className="social-icon"/></a></li>
                    <li><a href="https://www.pinterest.com/webergrills/"><Pinterest className="social-icon"/></a></li>
                    <li><a href="https://www.youtube.com/user/GrillwithWeber"><YouTube className="social-icon"/></a></li>  
                    <li><a href="https://www.instagram.com/webergrills/"><Instagram className="social-icon"/></a></li>  
                    

                </ul>
            </div>
            <div className="container flex flex-row py-5 px-10" >
                <p>© 2021 Weber. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
