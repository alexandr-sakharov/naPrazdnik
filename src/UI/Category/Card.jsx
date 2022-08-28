import React from 'react';
import productImg from '../../img/product.png'
const Card = () => {
    const data = {
        imgSrc: productImg,
        title: 'Подводная фотосессия Love Story',
        rate: 5,
        rateSum: 234,
        giftedAmount: 4890,
        description: 'Пара получит незабываемые эмоции, отправившись на необычную фотосессию под водой. Участники выберут понравившиеся сюжеты.',
        subInfo: 'Актуально с апреля по октябрь',
    }
    const rating = [1,2,3,4,5]
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="productcard">
                <div className="image">
                    <img src={data.imgSrc} alt={data.title}/>
                    <button className="fav">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.11684 9.52912C1.13784 8.52317 0.536133 7.15716 0.536133 5.65252C0.536133 2.56071 3.07678 0.0543022 6.21083 0.0543022C8.13007 0.0543022 9.82677 2.13933 10.8538 3.57804C11.8807 2.13933 13.5774 0.0543022 15.4967 0.0543022C18.6307 0.0543022 21.1714 2.56071 21.1714 5.65252C21.1714 7.231 20.5092 8.65689 19.4439 9.67458L11.5928 17.6272C11.1878 18.0374 10.5197 18.0374 10.1146 17.6273L2.11684 9.52912Z"
                                fill="#9E9E9E"/>
                        </svg>
                    </button>
                </div>
                <div className="content">
                    <div className="titleinfo">
                        <p className="title">{data.title}</p>
                    </div>
                    <div className="metainfo">
                        <div className="rateinfo">
                            <div className="rating"><p className="ratesum">{data.rate}<span>({data.rateSum} отзыва)</span></p>
                                <div className="ratestars">
                                    {rating.map(() => <img src="img/icons/yellowstar.svg" alt="⭐"/>)}
                                </div>
                            </div>
                        </div>
                        <div className="giftedamount">Купили <span>{data.giftedAmount} раз</span></div>
                    </div>
                    <p className="description">{data.description}</p>
                    <div className="subinfo"><img src="img/icons/subinfo.svg" alt="!"/><span>{data.subInfo}</span>
                    </div>
                    <div className="selectblock">
                        <div className="selected">
                            <span>2 900 ₽</span><span>12 чел</span><span>60 мин</span></div>
                        <ul>
                            <li><span>2 900 ₽</span><span>12 чел</span><span>40 мин</span></li>
                            <li><span>2 000 ₽</span><span>10 чел</span><span>50 мин</span></li>
                            <li><span>1 900 ₽</span><span>7 чел</span><span>20 мин</span></li>
                        </ul>
                    </div>
                    <div className="cardbuttons">
                        <button className="buy">Для себя</button>
                        <button className="gift">В подарок</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;