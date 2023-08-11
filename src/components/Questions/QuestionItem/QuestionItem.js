import React, { useRef, useCallback } from 'react';
import cl from "../Questions.module.scss";
import PlusImg from "../../../assets/img/plus.svg";

export default function QuestionItem({ isOpen, title, text, setActiveSpoiler, index, activeSpoiler }) {

    const textEl = useRef(null);
    const toggleVisibility = () => {
        if (isOpen) {
            let height = textEl.current.scrollHeight;
            return height + "px";
        } else {
            return "0px";
        }
    };

    return (
        <div className={cl.item}>
            <button className={cl.content} onClick={() => activeSpoiler === index ? setActiveSpoiler(null) : setActiveSpoiler(index)}>
                <span className={cl.title}>{title}</span>
                <span className={ isOpen ? `${cl.img} ${cl.active}` : `${cl.img}` }>
                    <img src={PlusImg} alt="Плюс" />
                </span>
            </button>
            <div 
                className={ isOpen ? `${cl.text} ${cl.active}` : `${cl.text}` } 
                ref={textEl}
                style={{maxHeight: toggleVisibility() }}
            >
                {text}
            </div>
        </div>
    )
}
