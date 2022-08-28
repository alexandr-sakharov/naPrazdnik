import React from 'react';
import Card from "./Card";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Steps from "../MainPage/Steps/Steps";
import Posts from "../MainPage/Posts/Posts";
import Subscribe from "../MainPage/Subscribe/Subscribe";

const Category = () => {
    const categories = [1,2,3,4,5];
    return (
        <>
            <Header/>
            <div class="headform">
                <div class="container">
                    <form class="mainform">
                        <select name="select1">
                            <option value="-" selected hidden>Кому</option>
                            <option value="Себе">Себе</option>
                            <option value="В подарок">В подарок</option>
                        </select>
                        <select name="select2">
                            <option value="-" selected hidden>Повод</option>
                            <option value="Новый год">Новый год</option>
                            <option value="Свадьба">Свадьба</option>
                        </select>
                        <select name="select3">
                            <option value="-" selected hidden>Категория</option>
                            <option value="Авто">Авто</option>
                            <option value="Творчество">Творчество</option>
                        </select>
                        <select name="select4">
                            <option value="-" selected hidden>Цена</option>
                            <option value="до 5000">до 5000</option>
                            <option value="До 10 000">До 10 000</option>
                        </select>
                        <input type="submit" value="Подобрать впечатления"/>
                    </form>
                    <div class="headiconlinks">
                        <a href="#" class="headiconlink">
                            <img src="img/icons/heart.svg" alt="Избранное"/>
                            <span class="sub">2</span>
                        </a>
                        <a href="#" class="headiconlink">
                            <img src="img/icons/cart.svg" alt="Корзина"/>
                            <span class="sub">2</span>
                        </a>
                    </div>
                </div>
            </div>
            <main>
                <section id="category" class="category">
                    <div class="container">
                        <div class="row catheadrow">
                            <div class="col-xs-12 col-sm-8 col-md-9"><h1 class="pageh1">Впечатления для двоих</h1></div>
                            <div class="col-xs-12 col-sm-4 col-md-3 tar"><p class="serviceamount">20 услуг</p></div>
                        </div>
                        <div class="filters">
                            <button>Девушке на 8 марта</button>
                            <button>Паре на годовщину</button>
                            <button>Друзьям на свадьбу</button>
                            <button>Подруге на др</button>
                        </div>
                        <div class="row">
                            {categories.map(category => <Card key={category}/>)}
                        </div>
                        <div class="showmore showmoreprods">
                            <button>Показать ещё <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                                      xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.33147e-08 0.882655C5.62391e-08 0.656005 0.0991863 0.438073 0.28764 0.263727C0.674467 -0.0762472 1.30926 -0.0762472 1.69608 0.263727L4.71135 2.90507L7.72661 0.25501C8.11344 -0.0849641 8.74823 -0.0849641 9.13505 0.25501C9.52188 0.594984 9.52188 1.15289 9.13505 1.49286L5.41557 4.76185C5.22712 4.92748 4.97915 5.01465 4.71135 5.01465C4.44354 5.01465 4.19558 4.91876 4.00712 4.76185L0.28764 1.50158C0.0991863 1.32724 5.05027e-08 1.10059 5.33147e-08 0.882655Z"
                                    fill="#FF6B45"/>
                            </svg></button>
                        </div>
                    </div>
                </section>
            </main>
            <Steps/>
            <Posts/>
            <Subscribe/>
            <Footer/>
        </>
);
};

export default Category;