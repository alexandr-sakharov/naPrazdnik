import React from 'react';

const ExpandBlock = () => {
    return (
        <div className="expandblock">
            <div className="title">
                <span>Студия танца Big Dance (м. Автово)</span>
                <button>
                    <span>Раскрыть</span>
                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.37911e-08 1.05606C6.72902e-08 0.784876 0.115759 0.524119 0.335701 0.315515C0.787161 -0.0912652 1.52802 -0.0912652 1.97948 0.315515L5.49855 3.47588L9.01763 0.305084C9.46909 -0.101695 10.2099 -0.101695 10.6614 0.305084C11.1129 0.711864 11.1129 1.3794 10.6614 1.78618L6.32044 5.69752C6.1005 5.8957 5.8111 6 5.49855 6C5.186 6 4.89661 5.88527 4.67666 5.69752L0.335701 1.79661C0.115759 1.58801 6.04266e-08 1.31682 6.37911e-08 1.05606Z"
                            fill="#FF6B45"/>
                    </svg>
                </button>
            </div>
            <div className="content row">
                <div className="col-xs-12 col-sm-6 col-md-5">
                    <a href="https://yandex.ru/maps/-/CCUNA6xn8D" target="_blank" className="loc">Ленинградская
                        область, город Санкт-Петербург, Метро Театральная, Конюшенная наб. 178/3</a>
                    <p className="main">
                        <img src="img/icons/clock.svg" alt="⌚"/>
                        График работы:
                    </p>
                    <table>
                        <tbody>
                        <tr>
                            <th>Понедельник</th>
                            <th>09:00—23:00</th>
                        </tr>
                        <tr>
                            <th>Вторник</th>
                            <th>09:00—23:00</th>
                        </tr>
                        <tr>
                            <th>Среда</th>
                            <th>09:00—23:00</th>
                        </tr>
                        <tr>
                            <th>Четверг</th>
                            <th>09:00—23:00</th>
                        </tr>
                        <tr>
                            <th>Пятница</th>
                            <th>09:00—23:00</th>
                        </tr>
                        <tr className="black">
                            <th>Суббота</th>
                            <th>11:00—23:00</th>
                        </tr>
                        <tr className="black">
                            <th>Воскресенье</th>
                            <th>11:00—23:00</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-7">
                    <div className="expandslider">
                        <div className="slide">
                            <img src="img/slide.png" alt="1"/>
                        </div>
                        <div className="slide">
                            <img src="img/slide2.png" alt="2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandBlock;