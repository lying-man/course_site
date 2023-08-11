import React from 'react';
import cl from "./Main.module.scss";
import FirstPc from "../../assets/img/pcFirst.png";

export default function Main() {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.title}>Backend на практике От кода до прода</div>
                <div className={cl.text}>
                    Придумаете и реализуете проект с нуля и доведете до продакшена под руководством опытного лида.
                </div>
                <a href="#" className={cl.link}>Записаться на курс</a>
            </div>
            <div className={cl.line}>
                <span className={cl.outline}>backend</span>
                <span className={cl.outline}>development</span>
                <span className={cl.outline}>backend</span>
                <span className={cl.outline}>development</span>
            </div>
            <img className={cl.image} src={FirstPc} />
        </div>
    )
}
