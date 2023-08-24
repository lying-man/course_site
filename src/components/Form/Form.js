import React, { useState } from 'react';
import cl from "./Form.module.scss";
import CourseImg from "../../assets/img/course.png";
import CalendarImg from "../../assets/img/calendar.svg";
import Checkbox from "../../assets/img/checkbox.svg";
import FormInput from './FormInput/FormInput';

export default function Form() {

    const [labels, setLabelsVisibility] = useState({
        name: {
            visible: true,
            onFocus: () => { setLabelsVisibility( (data) => ({ ...data, name: { ...data.name, visible: false } })) },
            onBlur: (e) => { setLabelsVisibility((data) => ({ 
                ...data, 
                name: { 
                    ...data.name, 
                    visible: e.target.value.trim() ? false : true
            } }) ) }
        },
        phone: {
            visible: true,
            onFocus: () => { setLabelsVisibility((data) => ({ ...data, phone: { ...data.phone, visible: false } })) },
            onBlur: (e) => { setLabelsVisibility((data) => ({ 
                ...data, 
                phone: { 
                    ...data.phone, 
                    visible: e.target.value.trim() ? false : true
            } })) }
        },
        post: {
            visible: true,
            onFocus: () => { setLabelsVisibility((data) => ({ ...data, post: { ...data.post, visible: false } })) },
            onBlur: (e) => { setLabelsVisibility((data) => ({
                ...data, 
                post: { 
                    ...data.post, 
                    visible: e.target.value.trim() ? false : true
                }   
            }) ) }
        },
    })

    const [isChecked, setIsChecked] = useState(false);

    return (
        <React.Fragment>
            <div className={cl.offset} id="price"></div>
            <div className={cl.wrapper}>
                <div className={cl.price}>
                    <div className={cl.title}>Стоимость курса</div>
                    <div className={cl.content}>
                        <div className={cl.title}>Обучение запуску проектов с нуля до продакшена</div>
                        <div className={cl.price}>4990₽</div>
                        <div className={cl.footer}>
                            <img src={CalendarImg} alt="календарь" />
                            <div className={cl.text}>Начинаем — 18 сентября</div>
                        </div>
                        <img src={CourseImg} alt="задний план" />
                    </div>
                </div>
                <div className={cl.divider}></div>
                <div className={cl.form}>
                    <div className={cl.title}>Присоединяйся</div>
                    <form className={cl.form}>
                        <FormInput title={"ФИО"} visible={labels.name.visible} onFocus={labels.name.onFocus} onBlur={labels.name.onBlur} />
                        <FormInput 
                            title={"Телефон"} 
                            visible={labels.phone.visible} 
                            onFocus={labels.phone.onFocus} 
                            onBlur={labels.phone.onBlur} 
                        />
                        <FormInput 
                            title={"Почта"} 
                            visible={labels.post.visible} 
                            onFocus={labels.post.onFocus} 
                            onBlur={labels.post.onBlur} 
                        />
                        <div className={cl.check}>
                            <button 
                                type="button" 
                                className={ isChecked ? `${cl.wrapper} ${cl.checked}` : `${cl.wrapper}` }
                                onClick={() => setIsChecked((value) => !value)}
                            >
                                <img src={Checkbox} alt="чекбокс" />
                            </button>
                            <div className={cl.text}>Я даю согласие на <a href="#">обработку персональных данных</a></div>
                        </div>
                        <button className={cl.send}>Записаться на курс</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
