import React from 'react';
import logo from '../../img/logo.png'
import Linked from "../../utils/Linked";
import Address from "./Address";
import NavMenu from "./NavMenu";
import Menu from "./Menu";

const Header = () => {
    return (
        <header>
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
        </header>
);
};

export default Header;
