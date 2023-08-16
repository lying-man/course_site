import React from 'react';
import GridItem from './GridItem/GridItem';
import cl from "./Grid.module.scss";
import DockerImg from "../../assets/img/dockerImg.svg";
import PaperImg from "../../assets/img/paperImg.png";
import PcSecond from "../../assets/img/pcSecond.png";
import Postgres from "../../assets/img/postgres.svg";
import Kotlin from "../../assets/img/kotlin.svg";
import Leaf from "../../assets/img/leaf.svg";
import PcThree from "../../assets/img/pcThree.png";
import SchemeOne from "../../assets/img/schemeOne.png";
import SchemeTwo from "../../assets/img/schemeTwo.png";

export default function Grid() {
    return (
        <React.Fragment>
            <div className={cl.offset} id="learn"></div>
            <div className={cl.wrapper}>

                <div className={cl.wrapperContent}>
                    <GridItem clName={cl.one} title={"После курса вы сможете"} isOne={true} hasCircle={false}>
                        <img src={DockerImg} className={cl.img} alt="docker" />
                    </GridItem>

                    <GridItem 
                        clName={cl.two} 
                        title={"Работать с документацией"} 
                        isOne={false} 
                        hasCircle={true} 
                        text={"Ты будешь знать как документация готовится и в реальном проекте будет проще общаться с аналитиком."}
                    >
                        <img src={PaperImg} className={cl.img} alt="paper" />
                    </GridItem>

                    <GridItem 
                        clName={cl.three} 
                        title={"Реализовывать проект от начала и до конца"} 
                        isOne={false} 
                        hasCircle={false} 
                        text={
                            "Больше не придется придумывать на собеседовании интересные проекты. Твой проект и есть тот самый интересный проект."
                        }
                    >
                        <img src={PcSecond} className={cl.img} alt="computer" />
                    </GridItem>

                    <GridItem 
                        clName={cl.four} 
                        title={"Программировать на актуальном стеке"} 
                        isOne={false} 
                        hasCircle={true} 
                        text={
                            "У тебя не будет проблем с актуальными фреймворками и базой данных."
                        }
                    >
                        <img src={Postgres} className={cl.img} alt="database" />
                        <img src={Kotlin} className={cl.img} alt="database" />
                        <img src={Leaf} className={cl.img} alt="database" />
                    </GridItem>

                    <GridItem 
                        clName={cl.five} 
                        title={"Успешнее проходить собеседования"} 
                        isOne={false} 
                        hasCircle={false} 
                        text={
                            `Самый лучший способ научиться 
                            чему-либо - сделать это самостоятельно. 
                            Этот курс закрывает почти все блоки на традиционном собеседовании. Пояснишь как за продукт, так и за детали реализации.`
                        }
                    >
                        <img src={PcThree} className={cl.img} alt="computer" />
                    </GridItem>
                </div>
                <div className={cl.wrapperBottom}>
                    <GridItem 
                            clName={cl.six} 
                            title={"Разбираться в архитектуре ПО"} 
                            isOne={false} 
                            hasCircle={false} 
                            text={
                                `Узнаешь зачем нужно делать схемы и научишься их правильно готовить.`
                            }
                        >
                            <img src={SchemeOne} className={cl.img} alt="schema" />
                    </GridItem>

                    <GridItem 
                            clName={cl.seven} 
                            title={"Решать реальные задачи"} 
                            isOne={false} 
                            hasCircle={false} 
                            text={
                                `Твой проект - законченный продукт который решает реальную проблему. И после всех проработок ты будешь понимать какие вещи там были лишние и почему.`
                            }
                        >
                            <img src={SchemeTwo} className={cl.img} alt="schema" />
                    </GridItem>
                </div>

            </div>
        </React.Fragment>
    )
}
