import React, { useRef } from 'react'
import cl from "./Course.module.scss";
import CourseItem from './CourseItem/CourseItem';
import PcFour from "../../assets/img/pcFour.png";

export default function Course() {

    const data = useRef({
        list: [
            { 
                title: "Подготовка",
                itemList: [ "Настроим окружение, регистрируемся на нужных ", "ресурсах и ставим весь софт который пригодится." ]
            },
            { 
                title: "Концепт приложения",
                itemList: [ "Проработка идеи приложения. ", "Определяем какую проблему решает наш проект." ]
            },
            { 
                title: "Аналитика",
                itemList: [ "Собираем требования, детально ", "смотрим на проект и выбрасываем все лишнее. ", "Распишем user-story" ]
            },
            { 
                title: "Архитектура",
                itemList: [ "Составим диаграммы, определим компоненты ", "и поймем что конкретно нам нужно будет сделать." ]
            },
            { 
                title: "Реализация",
                itemList: [ "Пишем код, покрываем тестами. ", "В общем, делаем всю программистскую работу тут." ]
            },
            { 
                title: "Деплой",
                itemList: [ "Развернем приложение, ", "чтобы им могли пользоваться другие люди." ]
            },
        ],
    });

    return (
        <React.Fragment>
            <div className={cl.offset} id="plan"></div>
            <div className={cl.wrapper}>
                <div className={cl.title}>Из чего состоит курс</div>
                <div className={cl.wrapperContent}>
                    <div className={cl.steps}>
                        { 
                            data.current.list.map((data, index) => {
                                return <CourseItem key={index} title={data.title} itemList={data.itemList} number={index + 1} /> 
                            })
                        }
                    </div>
                    <div className={cl.container}>
                        <img src={PcFour} alt="computer" className={cl.computer} />
                        <iframe 
                            className={cl.screen}
                            src="https://www.youtube.com/embed/HBqReN6gfhc" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
