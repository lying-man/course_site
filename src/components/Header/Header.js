import React from 'react'
import cl from "./Header.module.scss";

export default function Header() {
    return (
        <header className={cl.header}>
            <div className={cl.wrapper}>
                <div className={cl.title}>Divinecourse</div>
                <ul className={cl.list}>
                    <li className={cl.item}><a href="#" className={cl.link}>О курсе</a></li>
                    <li className={cl.item}><a href="#" className={cl.link}>Чему научитесь</a></li>
                    <li className={cl.item}><a href="#" className={cl.link}>Программа</a></li>
                    <li className={cl.item}><a href="#" className={cl.link}>FAQ</a></li>
                    <li className={cl.item}><a href="#" className={cl.link}>Стоимость</a></li>
                </ul>
            </div>
        </header>
    )
}
