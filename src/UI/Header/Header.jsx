import React from 'react';
import logo from '../../img/logo.png'
import Linked from "../../utils/Linked";
import Address from "./Address";
import NavMenu from "./NavMenu";
import Menu from "./Menu";

const Header = ({ isScroll = true}) => {

    return (
        <header className="homeheader">
            <div className="headmenu">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 hidden-md hidden-lg headtopline">
                            <div className="content">
                                <Linked path="">
                                    <img
                                        src={logo}
                                        alt="НА ПРАЗДНИК.РУ"
                                    />
                                </Linked>
                                <div className="mobmenu">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                        <Address />
                        <NavMenu />
                    </div>
                </div>
            </div>
            <div className="headtitle">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 hidden-sm col-md-3 mobhidden">
                            <div className="dlogo">
                                <a href="index.html">
                                    <img
                                        src={logo}
                                        alt="НА ПРАЗДНИК.РУ"/>
                                </a>
                            </div>
                        </div>
                        <Menu/>
                    </div>
                </div>
            </div>
            {isScroll && (
                <div className="scrollhead">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <ul className="productnav">
                                    <li><a href="#texts">Описание</a></li>
                                    <li><a href="#infoexpand">Место проведения</a></li>
                                    <li><a href="#steps">Как это работает?</a></li>
                                    <li><a href="#variants">Варианты вручения</a></li>
                                    <li><a href="#reviews">Отзывы</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <div className="selectblock">
                                    <div className="selected"><span>2 900 ₽</span><span>12 чел</span><span>60 мин</span>
                                    </div>
                                    <ul>
                                        <li><span>2 900 ₽</span><span>12 чел</span><span>40 мин</span></li>
                                        <li><span>2 000 ₽</span><span>10 чел</span><span>50 мин</span></li>
                                        <li><span>1 900 ₽</span><span>7 чел</span><span>20 мин</span></li>
                                    </ul>
                                </div>
                                <div className="btns">
                                    <button className="buy">Для себя</button>
                                    <button className="gift">В подарок</button>
                                    <button className="fav">
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.11684 9.52912C1.13784 8.52317 0.536133 7.15716 0.536133 5.65252C0.536133 2.56071 3.07678 0.0543022 6.21083 0.0543022C8.13007 0.0543022 9.82677 2.13933 10.8538 3.57804C11.8807 2.13933 13.5774 0.0543022 15.4967 0.0543022C18.6307 0.0543022 21.1714 2.56071 21.1714 5.65252C21.1714 7.231 20.5092 8.65689 19.4439 9.67458L11.5928 17.6272C11.1878 18.0374 10.5197 18.0374 10.1146 17.6273L2.11684 9.52912Z"
                                                fill="#9E9E9E"/>
                                        </svg>
                                    </button>
                                    <a href="#">
                                        <button className="fav">
                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M6.39305 1.13599C6.60616 0.7808 6.49099 0.320105 6.1358 0.106994C5.78062 -0.106117 5.31992 0.00905634 5.10681 0.364242L3.0753 3.75009H1.43487C0.955063 3.75009 0.598649 4.19441 0.702734 4.66279L1.90556 10.0755C2.05807 10.7618 2.66679 11.2501 3.36984 11.2501H12.63C13.333 11.2501 13.9418 10.7618 14.0943 10.0755L15.2971 4.66279C15.4012 4.1944 15.0448 3.75009 14.565 3.75009H12.9245L10.893 0.364242C10.6799 0.00905634 10.2192 -0.106117 9.86402 0.106994C9.50883 0.320105 9.39366 0.7808 9.60677 1.13599L11.1752 3.75009H4.82459L6.39305 1.13599ZM4.06779 5.27257C4.46963 5.17211 4.87683 5.41643 4.9773 5.81828L5.7273 8.81828C5.82776 9.22012 5.58344 9.62732 5.18159 9.72779C4.77974 9.82825 4.37254 9.58393 4.27208 9.18208L3.52208 6.18208C3.42162 5.78023 3.66594 5.37303 4.06779 5.27257ZM11.9316 5.27257C12.3334 5.37303 12.5778 5.78023 12.4773 6.18208L11.7273 9.18208C11.6268 9.58393 11.2196 9.82825 10.8178 9.72779C10.4159 9.62732 10.1716 9.22012 10.2721 8.81828L11.0221 5.81828C11.1225 5.41643 11.5297 5.17211 11.9316 5.27257ZM7.99969 5.25018C8.41391 5.25018 8.74969 5.58597 8.74969 6.00018V9.00018C8.74969 9.4144 8.41391 9.75018 7.99969 9.75018C7.58548 9.75018 7.24969 9.4144 7.24969 9.00018V6.00018C7.24969 5.58597 7.58548 5.25018 7.99969 5.25018Z"
                                                      fill="#9E9E9E"/>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </header>
);
};

export default Header;
