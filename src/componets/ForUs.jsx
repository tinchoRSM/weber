import React from 'react'
import img1 from '../img/GS_1954_400x300.jpg'
import img2 from '../img/OK_1952_400x200.jpg'

export default function ForUs() {
    return (
        <div className="container pt-[70px] lg:px-[10rem] mb-[5rem]">
            <h1 className="header1-text text-[45px] lg:text-[60px] ">Защо произвеждаме барбекюта?</h1>
            <h2 className="header2-text">НАШАТА МОТИВАЦИЯ</h2>
            <div className="container flex flex-col lg:flex-row">
                <img className="flex-row" src={img1} alt="" />
                <p className="pharagaph-text flex-row">Произвеждаме барбекюта, защото обичаме вкусната храна – сочни пържоли, крехки ребърца, шишчета. Защото искаме да се възползваме максимално от хубавото време, от съботите, от нашата тераса. Всичко едновременно. Да бъдем с приятелите си наистина... не само в социалните мрежи. Да споделяме добрата храна със семейството си, на открито. Да си говорим за всичко и нищо. </p>
            </div>
            <h2 className="header2-text">Правим по-добри барбекюта и получаваме по-добър вкус</h2>
            <div className="container flex flex-col lg:flex-row ">
                
                <img className="flex-row" src={img2} alt="" />
                <p className="pharagaph-text">През 1952 година Джордж Стивън измисля как да направи по-добро барбекю. Разрязал една шамандура на две, пробил дупки за въздух и сложил крачета, като по този начин изобретил барбекюто, което направи революция в готвенето на открито. 
Готвенето със затворен капак е крайъгълният камък на барбекю технологията на Weber. То прави възможно приготвянето на почти всичко на барбекю и прави Weber марка номер 1 в света.
Джордж Стивън прави революция в грил индустрията с концепцията си за готвене под капак. Той продължава да подобрява своето изобретение и въвежда и други иновации. </p>



            </div>
                
            
        </div>
    )
}
