import React from 'react';
import Linked from "../../utils/Linked";

const NavMenu = () => {
    return (
        <div className="col-xs-12 col-md-6 mobhidden tar">
            <nav>
                <ul>
                    <li>
                        <Linked path="article">
                            <a href="#">Статьи</a>
                        </Linked>
                    </li>
                    <li>
                        <Linked path="pay">
                            <a href="#">Оплата и доставка</a>
                        </Linked>
                    </li>
                    <li>
                        <Linked path="about">
                            <a href="#">О компании</a>
                        </Linked>
                    </li>
                    <li>
                        <Linked path="contacts">
                            <a href="#">Контакты</a>
                        </Linked>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
