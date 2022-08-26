import React from 'react';
import Linked from "../../utils/Linked";
import userSVG from '../../img/icons/user.svg';
import heartSVG from '../../img/icons/heart.svg';
import cartSVG from '../../img/icons/cart.svg';
import searchSVG from '../../img/icons/search.svg';
import giftqrSVG from '../../img/icons/giftqr.svg';

const Menu = () => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-9 mobhidden tar">
            <a href="#" className="headsert">
                <button
                    className="button1">
                    <img src={giftqrSVG} alt="QR"/>
                    Активировать
                    сертификат
                </button>
            </a>
            <form className="search">
                <input type="text" name="s" placeholder="Поиск"/>
                <input type="image" value="Поиск" src={searchSVG}/>
            </form>
            <div className="headiconlinks">
                <Linked path="profile">
                    <a href="#" className="headiconlink">
                        <img src={userSVG} alt="Профиль"/>
                    </a>
                </Linked>
                <Linked path="favourite">
                    <a href="#" className="headiconlink">
                        <img src={heartSVG} alt="Избранное"/>
                        <span className="sub">2</span>
                    </a>
                </Linked>
                <Linked path="basket">
                    <a href="#" className="headiconlink">
                        <img src={cartSVG} alt="Корзина"/>
                        <span className="sub">2</span>
                    </a>
                </Linked>
            </div>
        </div>
    );
};

export default Menu;
