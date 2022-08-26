import React from 'react';
import Select from "./Select";

const First = () => {
    const values = [
        { name: 'Себе' }
    ]
    const popularRequest = [
        { title: 'Девушке на 8 март'},
        { title: 'Паре на годовщину'},
        { title: 'Друзьям на свадьбу'},
    ]
    return (
        <section id="first" className="first">
            <div className="container">
                <h1>Лучшие впечатления вашего города!</h1>
                <p className="sub">Огромный выбор развлечений <a href="src/UI/MainPage/First/First#">для себя</a> и <a href="src/UI/MainPage/First/First#">в подарок</a>
                </p>
                <form className="mainform">
                    <Select name="select1" values={values}/>
                    <Select name="select2" values={values}/>
                    <Select name="select3" values={values}/>
                    <Select name="select4" values={values}/>
                    <input type="submit" value="Подобрать впечатления"/>
                </form>
                <div className="popularrequests">
                    <span>Популярные запросы:</span>
                    {popularRequest.map( value => <a href="src/UI/MainPage/First/First#">{value.title}</a>)}
                </div>
            </div>
        </section>
    );
};

export default First;
