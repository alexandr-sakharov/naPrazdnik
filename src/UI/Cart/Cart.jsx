import React from 'react';
import cartItemImg from '../../img/cartitem.png'

const Cart = () => {
    const data = {
        title: 'Черная коробка',
        subPrice: 'Сумма',
        price: '2 900',
        subColor: 'Выберите цве',
        certifTitle: 'Сертификат',
        certifSubTitle: 'Сумма',
        certifPrice: '1200',
        cartItemImg,
        cartTitle: 'Подводная фотосессия Love Story',
        infoCount: 4,
        infoCountPeople: 2,
        infoSum: 2000,
        total: 34000,
    }
return (
    <>
        <main>
            <section id="cart" className="cart">
                <div className="container">
                    <a href="javascript:void(0);" onClick="javascript:history.back(); return false;"
                       className="cartback"><img src="img/icons/cartback.svg" alt="<"/> Назад</a>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h1>Оформление заказа</h1>
                            <div className="ordertype">
                                <div className="head">
                                    <a href="javascript:void(0);" className="active">Подарочная коробка <span>Доставка и самовывоз</span></a>
                                    <a href="javascript:void(0);">Электронный
                                        сертификат <span>Придёт на E-mail</span></a>
                                </div>
                                <div className="info">
                                    <div className="typeblock active">
                                        <div className="leftpart">
                                            <p className="title">Черная коробка</p>
                                            <p className="sub">Сумма</p>
                                            <p className="price">2 900 ₽</p>
                                            <p className="sub">Выберите цвет</p>
                                            <div className="colorpicker">
                                                <span className="active black"></span>
                                                <span className="red"></span>
                                                <span className="pink"></span>
                                                <span className="blue"></span>
                                                <span className="yellow"></span>
                                            </div>
                                        </div>
                                        <div className="rightpart"><img src="img/box.png" alt="📦"/></div>
                                    </div>
                                    <div className="typeblock">
                                        <div className="leftpart">
                                            <p className="title">Сертификат</p>
                                            <p className="sub">Сумма</p>
                                            <p className="price">1 900 ₽</p>
                                        </div>
                                        <div className="rightpart"><img src="img/box.png" alt="📦"/></div>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <div className="maindata">
                                    <div className="datarow">
                                        <p className="title">Ваши данные</p>
                                        <div className="inputs">
                                            <label className="formlabel labelhalf"><span
                                                className="title">Имя</span>
                                                <input type="text" name="name1" placeholder="Евгений"/>
                                            </label>
                                            <label className="formlabel labelhalf">
                                                <span className="title">Фамилия</span>
                                                <input type="text" name="name2" placeholder="Федоров"/>
                                            </label>
                                            <label className="formlabel labelsub">
                                                <span className="title">Контактный телефон</span>
                                                <input type="tel" name="tel" placeholder="+7 (909) 284-45-34"/>
                                            </label>
                                            <label className="formlabel labelsub">
                                                <span className="title">E-Mail</span>
                                                <input type="email" name="email" placeholder="araran@ya.ru"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="datarow datarowsub">
                                        <p className="title">Доставка</p>
                                        <div className="inputs">
                                            <label className="radiolabel">
                                                <input type="radio" name="delivertype" value="Самовывоз"/>
                                                <span className="title">Самовывоз</span>
                                            </label>
                                            <label className="radiolabel">
                                                <input type="radio" name="delivertype" value="Курьером"
                                                       checked="checked"/>
                                                <span className="title">Курьером</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="datarow datarowleft">
                                        <p className="title">Кому доставить?</p>
                                        <div className="inputs">
                                            <label className="chboxlabel">
                                                <input type="radio" name="deliverwho" value="Мне" checked="checked"/>
                                                <span className="title">Мне</span>
                                            </label>
                                            <label className="chboxlabel">
                                                <input type="radio" name="deliverwho" value="Получателю"/>
                                                <span className="title">Получателю</span>
                                            </label>
                                            <label className="formlabel">
                                                <span className="title">Адрес доставки</span>
                                                <input type="text" name="adress"
                                                       placeholder="Москва, Краснопресненская, 353, кв.5"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="datarow">
                                        <p className="title">Комментарий</p>
                                        <div className="inputs">
                                            <label className="formlabel">
                                                <input type="text" name="comment" placeholder="Нет домофона."/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h2>Ваш набор</h2>
                            <div className="itemswrap">
                                <div className="cartitem">
                                    <div className="title">
                                        <img src="img/cartitem1.png" alt="Подводная фотосессия Love Story"/>
                                        <span>Подводная фотосессия <br/> Love Story</span>
                                        <a href="javascript:void(0);" className="delete">×</a>
                                    </div>
                                    <div className="info">
                                        <div className="leftpart"><span>2 человека</span></div>
                                        <div className="rightpart"><span>1шт.</span> <p>2 900 ₽</p></div>
                                    </div>
                                </div>
                                <div className="cartitem">
                                    <div className="title">
                                        <img src={cartItemImg} alt="Подводная фотосессия Love Story"/>
                                        <span>Подводная фотосессия <br/> Love Story</span>
                                        <a href="javascript:void(0);" className="delete">×</a></div>
                                    <div className="info">
                                        <div className="leftpart"><span>2 человека</span></div>
                                        <div className="rightpart"><span>1шт.</span> <p>2 900 ₽</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="packprice">
                                <div className="line"><p className="title">Упаковка</p> <span>12</span>
                                    <p className="price">0 ₽</p></div>
                                <div className="line"><p className="title">Доставка</p> <span>Курьером</span> <p
                                    className="price">200 ₽</p></div>
                            </div>
                            <div className="total"><p className="title">Итого:</p>
                                <p className="price">3 100 ₽</p>
                                <p className="sub">Вы оплачиваете самое дорогое <br/> впечатление в наборе</p>
                            </div>
                            <p className="payinfo">Нажимая
                                <span>Оформить заказ</span>
                                , я подтверждаю, что
                                ознакомлен с информацией о товаре и принимаю условия заказа и покупки товаров,
                                принимаю политику конфиденциальности и даю согласие на обработку моих персональных
                                данных.</p>
                            <button className="cartpay">Оплатить</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
);
};

export default Cart;