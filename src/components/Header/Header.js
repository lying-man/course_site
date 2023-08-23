import React, { useEffect, useState, useRef } from 'react';
import cl from "./Header.module.scss";
import Logo from "../../assets/img/logo.svg";
import Burger from "../../assets/img/burger.svg";
import Close from "../../assets/img/plus.svg";

export default function Header() {

    const [progress, setProgress] = useState(0);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const scrollPageWidth = useRef({ data: window.innerWidth - document.documentElement.offsetWidth });

    //show & hide scroll panel
    useEffect(() => {
        if (isOpenMenu) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = scrollPageWidth + "px";
        } else {
            setTimeout(() => {
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }, 300);
        }
    }, [ isOpenMenu ]);

    //progress scroll page
    useEffect(() => {

        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    
        let screenHeight = window.innerHeight;
        scrollHeight -= screenHeight;
    
        window.addEventListener("scroll", scrollHandler);
    
        function scrollHandler() {
            let offset = window.pageYOffset;
            let percent = offset / scrollHeight * 100;
            setProgress(percent);    
        }
    
        return () => window.removeEventListener("scroll", scrollHandler);
    
    }, []);

    return (
        <React.Fragment>
            <header className={cl.header}>
                <div className={cl.wrapper}>
                    <div className={cl.title}>Divinecourse</div>
                    <ul className={ isOpenMenu ? `${cl.list} ${cl.active}` : cl.list }>
                        <li 
                            onClick={() => setIsOpenMenu(false)} 
                            className={cl.item}
                        ><a href="#about" className={cl.link}>О курсе</a></li>
                        <li 
                            onClick={() => setIsOpenMenu(false)} 
                            className={cl.item}
                        ><a href="#learn" className={cl.link}>Чему научитесь</a></li>
                        <li 
                            onClick={() => setIsOpenMenu(false)} 
                            className={cl.item}
                        ><a href="#plan" className={cl.link}>Программа</a></li>
                        <li 
                            onClick={() => setIsOpenMenu(false)} 
                            className={cl.item}
                        ><a href="#faq" className={cl.link}>FAQ</a></li>
                        <li 
                            onClick={() => setIsOpenMenu(false)} 
                            className={cl.item}
                        ><a href="#price" className={cl.link}>Стоимость</a></li>
                    </ul>

                    <div className={cl.logo}>
                        <img src={Logo} alt="Логотип" />
                    </div>
                    <button 
                        className={cl.menu}
                        onClick={() => setIsOpenMenu(state => !state)}
                    >
                        {
                            isOpenMenu ? 
                                <img src={Close} style={
                                    { width: "100%", height: "100%", transform: "rotate(-45deg)" }
                                } alt="Крестик" /> : 
                                <img src={Burger} style={
                                    { width: 20, height: 15 }
                                } alt="Иконка меню" className={cl.burger} />
                        }
                    </button>
                </div>
                <div className={cl.fill} style={{ width: `${progress}%`, }}></div>
            </header>
            <div className={ isOpenMenu ? `${cl.overlay} ${cl.active}` : `${cl.overlay}` }></div>
        </React.Fragment>
    )
}
