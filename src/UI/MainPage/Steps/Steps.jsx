import React from 'react';

const Steps = () => {
    return (
        <section className="steps" id="steps">
            <div className="wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6"><h2>Как это работает?</h2></div>
                        <div className="col-xs-12 col-sm-6 tar">
                            <div className="switch">
                                <span className="title titleleft active">В подарок</span>
                                <div className="switchbtn" data-switch="left"><span></span></div>
                                <span className="title titleright">Для себя</span>
                            </div>
                        </div>
                    </div>
                    <div className="row stepsrow" data-switch="left">

                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock2">
                                <div className="img">
                                    <img src="img/step2.gif" alt="Шаг 2" className="gif"/>
                                    <img src="img/step2.png" alt="Шаг 2" className="png"/>
                                </div>
                                <p className="title">ШАГ 2</p>
                                <p className="text">Платите за самое дорогое впечатление в наборе</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock3">
                                <p className="title">ШАГ 3</p>
                                <p className="text">Подарите впечатление <br/> className="hidden-xs"> в дизайнерской
                                    упаковке или электронный сертификат</p>
                                <div className="img">
                                    <img src="img/step3.gif" alt="Шаг 3" className="gif"/>
                                    <img src="img/step3.png" alt="Шаг 3" className="png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock4">
                                <div className="img">
                                    <img src="img/step4.gif" alt="Шаг 4" className="gif"/>
                                    <img src="img/step4.png" alt="Шаг 4" className="png"/>
                                </div>
                                <p className="title">ШАГ 4</p>
                                <p className="text">Получатель определит впечатление и дату посещения у нас на
                                    сайте</p>
                            </div>
                        </div>
                    </div>
                    <div className="row stepsrow" data-switch="right">
                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock1">
                                <p className="title">ШАГ 5</p>
                                <p className="text">Выберите до 5 вариантов, что бы точно угадать <br/>
                                    className="hidden-xs"> с подарком</p>
                                <div className="img">
                                    <img src="img/step1.png" alt="Шаг 1" className="png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock2">
                                <div className="img">
                                    <img src="img/step2.gif" alt="Шаг 2" className="gif"/>
                                    <img src="img/step2.png" alt="Шаг 2" className="png"/>
                                </div>
                                <p className="title">ШАГ 6</p>
                                <p className="text">Платите за самое дорогое впечатление в наборе</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock3">
                                <p className="title">ШАГ 7</p>
                                <p className="text">Подарите впечатление <br/> className="hidden-xs"> в дизайнерской
                                    упаковке или электронный сертификат</p>
                                <div className="img">
                                    <img src="img/step3.gif" alt="Шаг 3" className="gif"/>
                                    <img src="img/step3.png" alt="Шаг 3" className="png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="stepblock stepblock4">
                                <div className="img">
                                    <img src="img/step4.gif" alt="Шаг 4" className="gif"/>
                                    <img src="img/step4.png" alt="Шаг 4" className="png"/>
                                </div>
                                <p className="title">ШАГ 8</p>
                                <p className="text">Получатель определит впечатление и дату посещения у нас на
                                    сайте</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
