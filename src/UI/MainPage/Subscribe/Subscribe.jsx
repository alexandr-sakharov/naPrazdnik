import React from 'react';

const Subscribe = () => {
    return (
        <section id="subscribe" className="subscribe">
            <div className="container">
                <div className="subscribeblock">
                    <div className="leftpart">
                        <div className="icon">
                            <img src="img/notif.png" alt="🔔"/>
                        </div>
                        <p>Хочешь быть в курсе <br/> новых впечатлений?</p>
                    </div>
                    <div className="centerpart">
                        <img src="img/subscribe.png" alt="Подпишись на нашу рассылку"/>
                    </div>
                    <div className="rightpart">
                        <button>Подписаться</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
