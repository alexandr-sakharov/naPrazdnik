import React from 'react';

const PostHead = () => {
    return (
        <section id="posthead" className="posthead">
            <div className="container">
                <div className="crumbs">
                    <a href="index.html">Главная</a>
                    <span className="sep">></span>
                    <a href="index.html">Статьи</a>
                    <span className="sep">></span>
                    <span className="current">Мастер-класс бачаты для двоих в Санкт-Петербурге</span>
                </div>
                <div className="row postinforow">
                    <div className="col-xs-12 col-sm-6">
                        <a href="#">Тематика статьи?</a>
                        <p className="marked">
                            <img src="img/icons/marked.svg" alt="в закадках у"/>
                            <span>678</span>
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-6 tar">
                        <button className="bookmark">
                            <img src="img/icons/bmark.svg" alt="в закладки"/>
                        </button>
                        <button className="share">
                            <img src="img/icons/sharpost.svg" alt="поделиться"/>
                        </button>
                    </div>
                </div>
                <h1>Задача организации, в особенности же реализация намеченных плановых заданий позволяет оценить
                    значение модели развития.</h1>
                <img src="img/postimg.png" alt="Статья"/>
            </div>
        </section>

    );
};

export default PostHead;