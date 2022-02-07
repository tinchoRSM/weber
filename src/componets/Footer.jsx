import React from 'react'
import {ReactComponent as Facbeook} from '../img/svg/social/FIcon_Global_Facebook.svg'
import {ReactComponent as Twitter} from '../img/svg/social/FIcon_Global_Twitter.svg'
import {ReactComponent as Instagram} from '../img/svg/social/FIcon_Global_Instagram.svg'
import {ReactComponent as Pinterest} from '../img/svg/social//FIcon_Global_Pinterest.svg'
import {ReactComponent as YouTube} from '../img/svg/social/FIcon_Global_YouTube.svg'
import {Link,} from 'react-router-dom'

export default function Footer() {
    return (
        <footer class=" bg-black text-white py-8">
            <div className="container px-10 flex flex-row flex-wrap">
                <ul className="w-[250px]">
                    <p className="text-red-700">Помощ</p>
                    <li>
                        <a href="https://bradva.net/poveritelnost">Политика за поверителност</a>
                    </li>
                    <li>
                        <Link to="/clients">Най-често задавани въпроси</Link>
                    </li>
                    <li>
                        <Link to="/location">Магазини</Link>
                    </li>
                    <li><Link to="/tips">Полезни съвети</Link></li>
                    <li></li>
                    
                </ul>
                <ul className="w-[200px]"> 
                    <p className="text-red-700">За нас</p>
                    <li>
                        <Link to="/forus">История</Link>
                    </li>
                    
                </ul>
                <div>
                    <div className="flex-col">
                        <p className="text-red-700" >Последвайте ни</p>
                    </div>
                    <div className="flex-col">
                        <ul className="flex col" >
                            
                            <li><a href="https://www.facebook.com/weberbbqbulgaria"><Facbeook className="social-icon"/></a></li>
                            <li><a href="https://twitter.com/webergrills"><Twitter className="social-icon"/></a></li>
                            <li><a href="https://www.pinterest.com/webergrills/"><Pinterest className="social-icon"/></a></li>
                            <li><a href="https://www.youtube.com/user/GrillwithWeber"><YouTube className="social-icon"/></a></li>  
                            <li><a href="https://www.instagram.com/weber_bbq_bulgaria/"><Instagram className="social-icon"/></a></li>  
                            

                        </ul>
                    </div>
                </div>
            </div>
            <div className="container flex flex-row py-5 px-10" >
                <p>© 2022 Weber. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
