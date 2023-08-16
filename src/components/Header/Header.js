import React, { useEffect, useState } from 'react';
import cl from "./Header.module.scss";

export default function Header() {

    const [progress, setProgress] = useState(0);

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
        <header className={cl.header}>
            <div className={cl.wrapper}>
                <div className={cl.title}>Divinecourse</div>
                <ul className={cl.list}>
                    <li className={cl.item}><a href="#about" className={cl.link}>О курсе</a></li>
                    <li className={cl.item}><a href="#learn" className={cl.link}>Чему научитесь</a></li>
                    <li className={cl.item}><a href="#plan" className={cl.link}>Программа</a></li>
                    <li className={cl.item}><a href="#faq" className={cl.link}>FAQ</a></li>
                    <li className={cl.item}><a href="#price" className={cl.link}>Стоимость</a></li>
                </ul>
            </div>
            <div className={cl.fill} style={{ width: `${progress}%`, }}></div>
        </header>
    )
}
