import React from 'react';
import cl from "../Grid.module.scss";

export default function GridItem({ children, clName, title, text, isOne, hasCircle }) {
    return (
        <div className={clName}>
            <div className={cl.container}>
                { children }
            </div>
            <div className={cl.content}>
                <div className={cl.title}>{title}</div>
                { isOne || <div className={cl.text}>{text}</div> }
            </div>
            { hasCircle && <div className={cl.circle}></div> }
        </div>
    )
}
