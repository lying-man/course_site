import React from 'react';
import cl from "./Footer.module.scss";
import TelegramImg from "../../assets/img/telegram.svg";
import YoutubeImg from "../../assets/img/youtube.svg";
import Visa from "../../assets/img/visa.svg";
import Maestro from "../../assets/img/maestro.svg";
import MasterCard from "../../assets/img/masterCard.svg";
import Mir from "../../assets/img/mir.svg";
import DesignImg from "../../assets/img/footerImg.svg";

export default function Footer() {
    return (
        <div className={cl.footer}>
            <div className={cl.wrapper}>

                <div className={cl.top}>

                    <div className={cl.content}>

                        <div className={cl.info}>
                            <a className={cl.footerLogo} href="#">Divinecourse</a>
                            <div className={cl.name}>
                                <div className={cl.dataName}><span>СЗ</span> Карпатов Александр Андреевич</div>
                                <div className={cl.dataNumber}><span>ИНН</span> 6625523423</div>
                            </div>
                            <div className={cl.contacts}>
                                <a href="mailto:info@divinecours.ru">info@divinecourse.ru</a>
                                <div className={cl.social}>
                                    <a href="#" target="_blank">
                                        <img src={TelegramImg} alt="Телеграм" />
                                    </a>
                                    <a href="#" target="_blank">
                                        <img src={YoutubeImg} alt="Ютуб" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={cl.call}>
                            <div className={cl.text}>Пишите нам свои вопросы, комментарии и предложения</div>
                            <a href="#" className={cl.link}>
                                Связаться с нами
                            </a>
                        </div>

                    </div>

                    <div className={cl.pays}>
                        <img src={MasterCard} alt="mastercard" />
                        <img src={Maestro} alt="maestro" />
                        <img src={Visa} alt="visa" />
                        <img src={Mir} alt="mir" />
                    </div>

                    <div className={cl.nameMobile}>
                        <div><span>СЗ</span> Карпатов Александр Андреевич</div>
                        <div><span>ИНН</span> 6625523423</div>
                    </div>

                    <div className={cl.deal}>
                        <a href="#" target="_blank">Политика конфиденциальности</a>
                        <a href="#" target="_blank">Договор оферты</a>
                    </div>

                </div>

                <div className={cl.bottom}>
                    <div className={cl.copy}>© 2023 Divinecourse</div>
                    <div className={cl.links}>
                        <a href="#" target="_blank">Политика конфиденциальности</a>
                        <a href="#" target="_blank">Договор оферты</a>
                    </div>
                    <div className={cl.design}>
                        <div className={cl.text}>Разработка дизайна</div>
                        <img src={DesignImg} alt="логотип" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
