import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="hidden-xs col-sm-3 col-md-2">
                        <p className="title">Подарки</p>
                        <ul>
                            <li><a href="#">День рождения</a></li>
                            <li><a href="#">Новый год</a></li>
                            <li><a href="#">Мужчине</a></li>
                            <li><a href="#">Женщине</a></li>
                            <li><a href="#">Ребёнку</a></li>
                        </ul>
                    </div>
                    <div className="hidden-xs col-sm-3 col-md-2">
                        <p className="title">Магазинам</p>
                        <ul>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Партнёрская программа</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Доставка</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <p className="title">Пользователю</p>
                        <ul>
                            <li><a href="#">Политика конфиденциальности</a></li>
                            <li><a href="#">Пользовательское соглашение</a></li>
                            <li><a href="#">Пабличная оферта о заключении договора купли-продажи</a></li>
                            <li><a href="#">Соглашение на обработку персональных данных</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2">
                        <p className="title">Мы в соцсетях</p>
                        <div className="sociallink">
                            <a href="#" className="social">
                                <img src="img/icons/fb.svg" alt="Facebook"/>
                                Facebook
                            </a>
                        </div>
                        <div className="sociallink">
                            <a href="#" className="social">
                                <img src="img/icons/fb.svg" alt="Facebook"/>
                                Facebook
                            </a>
                        </div>
                        <div className="sociallink">
                            <a href="#" className="social">
                                <img src="img/icons/fb.svg" alt="Facebook"/>
                                Facebook
                            </a>
                        </div>
                        <div className="sociallink">
                            <a href="#" className="social">
                                <img src="img/icons/fb.svg" alt="Facebook"/>
                                Facebook
                            </a>
                        </div>
                        <div className="sociallink">
                            <a href="#" className="social">
                                <img src="img/icons/fb.svg" alt="Facebook"/>
                                Facebook
                            </a>
                        </div>
                        <div className="sociallink">
                            <a href="#" className="social">
                                <img src="img/icons/fb.svg" alt="Facebook"/>
                                Facebook
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <p className="title">Контакты</p>
                        <div className="contblock">
                            <p className="sub">Ваш город</p>
                            <a href="javascript:void(0);" className="contlink">Москва</a>
                        </div>
                        <div className="contblock">
                            <p className="sub">Телефон магазина</p>
                            <a href="tel:+7 (953) 007-51-51" className="contlink">+7 (953) 007-51-51</a>
                        </div>
                        <div className="contblock">
                            <p className="sub">Способы оплаты</p>
                            <div className="paymethods">
                                <img src="img/pay1.png" alt="applepay"/>
                                    <img src="img/pay2.png" alt="googlepay"/>
                                        <img src="img/pay3.png" alt="visa"/>
                                            <img src="img/pay4.png" alt="mastedcard"/>
                                                <img src="img/pay5.png" alt="мир"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container"><p>© 2022 ООО «На праздник». Все права защищены.</p></div>
            </div>
        </footer>
    );
};

export default Footer;
