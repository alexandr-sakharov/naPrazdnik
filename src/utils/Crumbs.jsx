import React from 'react';
import Linked from "./Linked";

const Crumbs = () => {
    return (
        <div className="crumbs">
            <a href="index.html">Главная</a>
            <span className="sep">></span>
            <a href="category.html">Романтика</a>
            <span className="sep">></span>
            <span className="current">
                        Мастер-класс бачаты для двоих в Санкт-Петербурге
                    </span>
        </div>
    );
};

export default Crumbs;