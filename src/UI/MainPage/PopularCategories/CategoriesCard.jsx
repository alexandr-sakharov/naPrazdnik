import React from 'react';

const CategoriesCard = ({img, title}) => {
    return (
        <div className="col-xs-12 col-sm-4">
            <div className="categheadcard">
                <img src={img} alt="1"/>
                {title}
                <a href="src/UI/MainPage/PopularCategories/CategoriesCard#">Показать</a>
            </div>
        </div>
    );
};

export default CategoriesCard;
