import React from 'react';

const ProductHead = () => {
    return (
        <section id="producthead" className="producthead">
            <div className="productinfo">
                <div className="prodheadslider">
                    <video src="video.mp4" muted autoPlay loop></video>
                    <img src="img/prodhead.png" alt="1"/>
                    <img src="img/prodhead.png" alt="2" style="transform: scaleY(-1);"/>
                    <img src="img/prodhead.png" alt="3" style="transform: scaleX(-1);"/>
                </div>
                <div className="container">
                    <a href="javascript:void(0);" onClick="javascript:history.back(); return false;"
                       className="back">
                        <img src="img/icons/backarr.svg" alt="<"/>
                        Назад
                    </a>
                    <h1>Мастер-класс бачаты для двоих <br/> в Санкт-Петербурге</h1>
                    <div className="raterow">
                        <div className="buyed">
                            <img src="img/icons/okgreen.svg" alt="✔"/> Купили 4 890 раз
                        </div>
                        <div className="rateinfo">
                            <div className="ratephotos">
                                <img src="img/rate1.png" alt="1"/>
                                <img src="img/rate2.png" alt="2"/>
                                <img src="img/rate3.png" alt="3"/>
                            </div>
                            <div className="rating"><p className="ratesum">5.0 (234 отзыва)</p>
                                <div className="ratestars">
                                    <img src="img/icons/yellowstar.svg" alt="⭐"/>
                                    <img src="img/icons/yellowstar.svg" alt="⭐"/>
                                    <img src="img/icons/yellowstar.svg" alt="⭐"/>
                                    <img src="img/icons/yellowstar.svg" alt="⭐"/>
                                    <img src="img/icons/yellowstar.svg" alt="⭐"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="selectrow">
                        <div className="selectblock">
                            <div className="selected"><span>2 900 ₽</span><span>12 чел</span><span>60 мин</span>
                            </div>
                            <ul>
                                <li><span>2 900 ₽</span><span>12 чел</span><span>40 мин</span></li>
                                <li><span>2 000 ₽</span><span>10 чел</span><span>50 мин</span></li>
                                <li><span>1 900 ₽</span><span>7 чел</span><span>20 мин</span></li>
                            </ul>
                        </div>
                        <button className="fav hidden-xs">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.11684 9.52912C1.13784 8.52317 0.536133 7.15716 0.536133 5.65252C0.536133 2.56071 3.07678 0.0543022 6.21083 0.0543022C8.13007 0.0543022 9.82677 2.13933 10.8538 3.57804C11.8807 2.13933 13.5774 0.0543022 15.4967 0.0543022C18.6307 0.0543022 21.1714 2.56071 21.1714 5.65252C21.1714 7.231 20.5092 8.65689 19.4439 9.67458L11.5928 17.6272C11.1878 18.0374 10.5197 18.0374 10.1146 17.6273L2.11684 9.52912Z"
                                    fill="#9E9E9E"/>
                            </svg>
                        </button>
                    </div>
                    <div className="cardbuttons">
                        <button className="buy">Купить для себя</button>
                        <button className="gift">Купить в подарок</button>
                        <div className="subinfo">
                            <img src="img/icons/subinfo.svg" alt="!"/>
                                <span>Актуально с апреля по октябрь</span>
                        </div>
                        <button className="fav hidden-sm hidden-md hidden-lg">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.11684 9.52912C1.13784 8.52317 0.536133 7.15716 0.536133 5.65252C0.536133 2.56071 3.07678 0.0543022 6.21083 0.0543022C8.13007 0.0543022 9.82677 2.13933 10.8538 3.57804C11.8807 2.13933 13.5774 0.0543022 15.4967 0.0543022C18.6307 0.0543022 21.1714 2.56071 21.1714 5.65252C21.1714 7.231 20.5092 8.65689 19.4439 9.67458L11.5928 17.6272C11.1878 18.0374 10.5197 18.0374 10.1146 17.6273L2.11684 9.52912Z"
                                    fill="#9E9E9E"/>
                            </svg>
                        </button>
                    </div>
                    <div className="prodarrows"></div>
                </div>
            </div>
            <div className="productnav">
                <div className="container">
                    <ul>
                        <li><a href="#texts">Описание</a></li>
                        <li><a href="#infoexpand">Место проведения</a></li>
                        <li><a href="#steps">Как это работает?</a></li>
                        <li><a href="#variants">Варианты вручения</a></li>
                        <li><a href="#reviews">Отзывы</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProductHead;