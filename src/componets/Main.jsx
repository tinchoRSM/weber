import React from 'react'
import {Link, useLinkClickHandler} from 'react-router-dom';
import ReactPlayer from 'react-player'
import girll1 from '../img/grills/Performer_MegaMenu_300x300.png'
import girll2 from '../img/grills/Portable_MegaMenu_300x300.png'
import girll3 from '../img/grills/Pulse_MegaMenu_300x300.png'
import girll4 from '../img/grills/Ranch_MegaMenu_300x300.png'
import girll5 from '../img/grills/Smart_MegaMenu_300x300.png'

function Main() {
    return (
        <div className="pt-[70px]">
            <div className="bg-hero h-[540px]   bg-cover flex ">
                <div className=" bg-black/[0.5] w-full h-full justify-center items-center text-white text-center">
                    <div className="flex-col mt-40 lg:m-20 ">
                        <h1 className="header1-text text-[45px] lg:text-[60px] lg:mt-[200px]">Добре дошли в света на WEBER</h1>
                    </div>
                    
                </div>
               
            </div>
            <div className="p-5 flex text-center bg-red-700 text-white">
                <div className="container">
                    <h1 className="header1-text flex-col-reverse ">Weber в България</h1>
                    <p className="pharagaph-text flex-col">Фирма Росима ЕООД  e изключителен вносител на WEBER за България. Предлагаме широка гама барбекюта на въглища, газови барбекюта, електрически барбекюта и много допълнителни аксесоари за готвене и сервиране! Можете да се свържете с нас за всякакви въпроси относно закупуване,  употреба, гаранционно обслужване,  сервиз и резервни части на продукти WEBER. </p>
                </div>
            </div>

            <div>
                <h1 className="header1-text text-center">Избери перфектния грил за теб</h1>
                <div className="p-5 flex flex-wrap justify-center items-center text-center bg-white text-black">
                    <img className="grill-image" src={girll1} alt="" />
                    <img className="grill-image" src={girll2} alt="" />
                    <img className="grill-image" src={girll3} alt="" />
                    <img className="grill-image" src={girll5} alt="" />
                </div>
            </div>
            

            <div className="lg:h-[500px] w-full flex bg-black items-center justify-center">
                <div className="lg: w-[1024px] h-[500px]">
                    <ReactPlayer className="m-0 transform-none"
                     url="https://www.youtube.com/watch?v=CsChHGzGtWQ"
                        width="100%"
                        height="100%"
                        controls={false}/>
                </div>
            </div>

            <div className="bg-hero4 h-[540px]  bg-cover flex "></div>
{/* 

            <div className="bg-hero5 h-[540px]  bg-cover flex "></div>
            <div className="bg-hero3 h-[234px]  bg-cover flex "></div> */}






        </div>

    )
}


export default Main;