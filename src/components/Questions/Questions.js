import React, { useRef, useState } from 'react';
import cl from "./Questions.module.scss";
import QuestionItem from "./QuestionItem/QuestionItem";

export default function Questions() {

    const dataQuestions = useRef({
        list: [
            { 
                title: "Сертификат и трудоустройство",
                text: `
                    Оставьте заявку — наш менеджер свяжется с вами. После оплаты мы вышлем вам ссылки для подключения к Грейду. 
                    По ним сотрудники смогут самостоятельно активировать доступ к сервису
                `
            },
            { 
                title: "Сколько сотрудников можно отправить на обучение?",
                text: `
                    Оставьте заявку — наш менеджер свяжется с вами. После оплаты мы вышлем вам ссылки для подключения к Грейду. 
                    По ним сотрудники смогут самостоятельно активировать доступ к сервису
                `
            },
            { 
                title: "Сколько времени занимает обучение?",
                text: `
                    Оставьте заявку — наш менеджер свяжется с вами. После оплаты мы вышлем вам ссылки для подключения к Грейду. 
                    По ним сотрудники смогут самостоятельно активировать доступ к сервису
                `
            },
            { 
                title: "Какие есть способы оплаты?",
                text: `
                    Оставьте заявку — наш менеджер свяжется с вами. После оплаты мы вышлем вам ссылки для подключения к Грейду. 
                    По ним сотрудники смогут самостоятельно активировать доступ к сервису
                `
            },
            { 
                title: "Какие есть способы оплаты?",
                text: `
                    Оставьте заявку — наш менеджер свяжется с вами. После оплаты мы вышлем вам ссылки для подключения к Грейду. 
                    По ним сотрудники смогут самостоятельно активировать доступ к сервису
                `
            },
        ]
    })

    const [activeSpoiler, setActiveSpoiler] = useState(null);

    return (
        <div className={cl.wraper}>
            <div className={cl.title}>Вопросы и ответы</div>
            <div className={cl.spoilers}>
                {
                    dataQuestions.current.list.map((data, index) => {
                        return <QuestionItem 
                            key={index}
                            index={index} 
                            title={data.title} 
                            text={data.text} 
                            setActiveSpoiler={setActiveSpoiler}
                            isOpen={ index === activeSpoiler ? true : false }
                            activeSpoiler={activeSpoiler}
                        />
                    })
                }
            </div>
            <div className={cl.action}>
                <div className={cl.title}>Не нашли ответа на свой вопрос?</div>
                <button className={cl.btn}>Задать свой вопрос</button>
            </div>
        </div>
    )
}
