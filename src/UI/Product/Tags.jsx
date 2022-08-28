import React from 'react';
import Crumbs from "../../utils/Crumbs";

const Tags = () => {
    const data = {
        ppl: '2 человека',
        clnd: 'С апреля по октябрь',
        clock: '45 мин.',
        tinfo: 'Форма одежды удобная',
    }
    return (
        <section id="tags" className="tags">
            <div className="container">
                <Crumbs/>
                <div className="taglist">
                    <div className="singletag">
                        <img src="img/icons/ppl.svg" alt="!"/>
                        2 человека
                    </div>
                    <div className="singletag">
                        <img src="img/icons/clnd.svg" alt="!"/>С апреля по октябрь
                    </div>
                    <div className="singletag">
                        <img src="img/icons/clock.svg" alt="!"/>45 мин.
                    </div>
                    <div className="singletag">
                        <img src="img/icons/tinfo.svg" alt="!"/>Форма одежды удобная
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tags;