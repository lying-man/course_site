import React, { useEffect } from 'react';
import GridItem from './GridItem/GridItem';
import cl from "./Grid.module.scss";
import DockerImg from "../../assets/img/dockerImg.svg";
import Container from "../../assets/img/container.svg";
import PaperImg from "../../assets/img/paperImg.png";
import PcSecond from "../../assets/img/pcSecond.png";
import Postgres from "../../assets/img/postgres.svg";
import Leaf from "../../assets/img/leaf.svg";
import PcThree from "../../assets/img/pcThree.png";
import SchemeOne from "../../assets/img/schemeOne.png";
import SchemeTwo from "../../assets/img/schemeTwo.png";
import ScreenSlider from "../../assets/img/screenSlider.png";
import Kotlin from "../../assets/img/kotlin.png";

import Swiper from 'swiper';
import "swiper/css";

export default function Grid() {

    useEffect(() => {

        if (document.documentElement.offsetWidth < 714) {

            const swiper = new Swiper(".swiper", {
                speed: 300,
                longSwipesRatio: 0.3,
                loop: false,
                grabCursor: true,
                slidesPerView: 1.2,
                centeredSlides: true,
                slidesPerGroup: 1,
                spaceBetween: 20,
                breakpoints: {
                    500: {
                        slidesPerView: 1.2,
                    }
                }
            });

            const bullets = document.querySelectorAll(".swiper-pagination-bullet");

            swiper.on("slideChange", function() { 
                for (let bullet of bullets) bullet.classList.remove("swiper-pagination-bullet-active");
                bullets[swiper.activeIndex].classList.add("swiper-pagination-bullet-active");
            });

            bullets.forEach((el) => {
                el.addEventListener("click", (e) => {
                    let value = e.currentTarget.dataset.bullet;
                    for (let bullet of bullets) bullet.classList.remove("swiper-pagination-bullet-active");
                    bullets[+value].classList.add("swiper-pagination-bullet-active");
                    swiper.slideTo(+value);
                })
            })

        }

    }, []);

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
                <div className={cl.wrapperBottom} style={{ display: "none", }}>
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

                {/* slider code */}
                <div className={cl.box}>
                    <div className={cl.boxTitle}>
                        <div>После курса вы сможете</div>
                        <img src={Container} alt="Docker" />
                    </div>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="multiSlide">                                
                                    <img src={Postgres} alt="database" />
                                    <img src={Kotlin} alt="database" />
                                    <img src={Leaf} alt="database" />
                                </div>
                                <div className="slideTitle">
                                    <div>Программировать</div>
                                    <div>на актуальном стеке</div>
                                </div>
                                <div className="slideText">
                                    У тебя не будет проблем с актуальными фреймворками и базой данных.
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="screenSlide">                                
                                    <img src={ScreenSlider} alt="screen code" />
                                </div>
                                <div className="slideTitle">
                                    <div>Реализовывать проект</div>
                                    <div>от начала и до конца</div>
                                </div>
                                <div className="slideText">
                                    Больше не придется придумывать на собеседовании интересные проекты. Твой проект и есть тот самый интересный проект.
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="paperSlide">                                
                                    <img src={PaperImg} alt="paper" />
                                </div>
                                <div className="slideTitle">
                                    <div>Работать</div>
                                    <div>с документацией</div>
                                </div>
                                <div className="slideText">
                                    Ты будешь знать как документация готовится и в реальном проекте будет проще общаться с аналитиком.
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="laptopSlide">                                
                                    <img src={PcThree} alt="laptop" />
                                </div>
                                <div className="slideTitle">
                                    <div>Успешнее проходить</div>
                                    <div>собеседования</div>
                                </div>
                                <div className="slideText">
                                    Самый лучший способ научиться 
                                    чему-либо - сделать это самостоятельно.  Этот курс закрывает почти все блоки на традиционном собеседовании. Пояснишь как за продукт, так и за детали реализации.
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="schOneSlide">                                
                                    <img src={SchemeOne} alt="scheme" />
                                </div>
                                <div className="slideTitle">
                                    <div>Разбираться</div>
                                    <div>в архитектуре ПО</div>
                                </div>
                                <div className="slideText">
                                    Узнаешь зачем нужно делать схемы и научишься их правильно готовить.
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="schTwoSlide">                                
                                    <img src={SchemeTwo} alt="scheme" />
                                </div>
                                <div className="slideTitle">
                                    <div>Решать</div>
                                    <div>реальные задачи</div>
                                </div>
                                <div className="slideText">
                                    Твой проект - законченный продукт который решает реальную проблему. И после всех проработок ты будешь понимать какие вещи там были лишние и почему.
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination">
                            <div className="swiper-pagination-bullet swiper-pagination-bullet-active" data-bullet="0"></div>
                            <div className="swiper-pagination-bullet" data-bullet="1"></div>
                            <div className="swiper-pagination-bullet" data-bullet="2"></div>
                            <div className="swiper-pagination-bullet" data-bullet="3"></div>
                            <div className="swiper-pagination-bullet" data-bullet="4"></div>
                            <div className="swiper-pagination-bullet" data-bullet="5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
