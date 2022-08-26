import React from 'react';

const Review = ({
                    img,
                    name = 'test',
                    sub = 'test',
                    rate = 5,
                    text = 'test',
                    uploadImg,
                    category = 'test',
}) => {
    const rating = Array(rate);
    return (
        <div className="reviewblock">
            <div className="head">
                <div className="photo">
                    <img src={img} alt={name}/>
                </div>
                <div className="info"><p className="name">{name}</p><p
                    className="sub">{sub}</p></div>
            </div>
            <div className="rate"><span className="ratenum">5.0</span>
                <div className="ratestars">
                    {rating.map(() => <img src="img/icons/yellowstar.svg" alt="⭐"/>)}
                </div>
            </div>
            <p className="text">{text}<a href="src/UI/MainPage/Reviews/Review#">Далее</a></p>
            <div className="img">
                <div className="count">
                    <img src={uploadImg} alt=">"/>
                    <span>1</span>
                </div>
                <img src={uploadImg} alt={category}/>
            </div>
        </div>
    );
};

export default Review;
