import React from 'react';
import CategoriesCard from "./CategoriesCard";
import SliderSlick from "../../../utils/SliderSlick";

const PopularCategories = () => {
    const popularCategories = [
        { image: "img/categhead2.png", title: 'Известные места в Сочи, которые стоит посетить', id:1 },
        { image: "img/categhead3.png", title: 'Инстаместа для красивых фотографии', id:2 },
        { image: "img/categhead.png", title: 'Топ-5 лучших мест для отдыха на пляже', id:3 },
    ]
    const slides = [
        {img: 'img/categ1.png', category: 'Активный отдых', title: 'Гонки на Эндуро в пустыне'},
        {img: 'img/categ1.png', category: 'Авто', title: 'Тест-драйв итальянских суперкаров'},
        {img: 'img/categ1.png', category: 'Активный отдых', title: 'Гонки на Эндуро в пустыне'},
        {img: 'img/categ1.png', category: 'Авто', title: 'Тест-драйв итальянских суперкаров'},
        {img: 'img/categ1.png', category: 'Активный отдых', title: 'Гонки на Эндуро в пустыне'},
        {img: 'img/categ1.png', category: 'Активный отдых', title: 'Гонки на Эндуро в пустыне'},
        {img: 'img/categ1.png', category: 'Авто', title: 'Тест-драйв итальянских суперкаров'},
    ]
    return (
        <section id="popularcategs" className="popularcategs">
            <div className="container">
                <div className="row categheadcardrow">
                    {popularCategories.map(category => <CategoriesCard
                    key={category.id} img={category.image} title={category.title}/>)}
                </div>
                <div className="row titlerow">
                    <div className="col-xs-12 col-sm-6">
                        <h2>Популярные категории</h2>
                    </div>
                    <div className="col-xs-12 col-sm-6 tar">
                        <button className="categheadbtn">
                            <img src="img/categheadimg.png" alt="Категории"/>
                            Категории
                        </button>
                    </div>
                </div>
                <div className="popularcategslider">
                    <SliderSlick slides={slides}/>
                </div>
                <button className="showmorebtn">
                    Показать ещё <img src="img/showmore.svg" alt="↓"/>
                </button>
            </div>
        </section>
    );
};

export default PopularCategories;
