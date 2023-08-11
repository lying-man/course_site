import React from 'react';
import cl from "../Form.module.scss";

export default function FormInput({ title, visible, onFocus, onBlur }) {
    return (
        <div className={ visible ? `${cl.block} ${cl.active}` : `${cl.block}` }>
            <label className={cl.label}>{title}<span>*</span></label>
            <input onFocus={onFocus} onBlur={onBlur} type="text" className={cl.input} />
        </div>
    )
}
