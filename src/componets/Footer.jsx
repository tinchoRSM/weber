import React from 'react'

export default function Footer() {
    return (
        <footer class=" bg-black text-white py-8">
            <div className="container flex flex-row">
                <ul className="">
                    <p className="text-red-700">Помощ</p>
                    <li>Политика за поверителност</li>
                    <li>Най-често задавани въпроси</li>
                    <li>Локатор на магазини</li>
                    <li>Каталози</li>
                    <li>Гаранция на продуктите</li>
                    <li>Обслужване на клиенти</li>
                </ul>
                <ul className="px-10"> 
                    <p className="text-red-700">За нас</p>
                    
                </ul>
            </div>
            <div className="container flex flex-row py-5" >
                <p>© 2021 Weber. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
