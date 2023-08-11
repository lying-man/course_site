import React from 'react';
import cl from "../Course.module.scss";

export default function CourseItem({ number, title, itemList }) {
    return (
        <div className={cl.item}>
            <div className={cl.number}>{number}</div>
            <div className={cl.content}>
                <div className={cl.title}>{title}</div>
                { itemList.map((el, index) => { return <div key={index} className={cl.text}>{el}</div> }) }
            </div>
            { number !== 6 && <div className={cl.line}></div> }
        </div>
    )
}
