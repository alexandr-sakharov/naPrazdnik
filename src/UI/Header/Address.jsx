import React from 'react';
import mapMarkerSVG from '../../img/icons/mapmarker.svg'
import telSVG from '../../img/icons/tel.svg'
import infoSVG from '../../img/icons/info.svg'

const Address = ({ mapMarker, info, tel}) => {
    return (
        <div className="col-xs-12 col-md-6 mobhidden">
            <p className="icontext">
                <img src={mapMarkerSVG} alt=">"/>
                Москва {mapMarker}
            </p>
            <p className="icontext">
                <img src={telSVG} alt=">"/>
                <a
                    href="tel:+7 (495) 321-00-12">+7 (495) 321-00-12 {tel}
                </a>
            </p>
            <p
                className="icontext">
                <img src={infoSVG} alt=">"/>
                г. Орск, ул. Лермонтова 14 {info}
            </p>
        </div>
    );
};

export default Address;
