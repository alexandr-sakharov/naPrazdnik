import React from "react";
import Slider from "react-slick";

const SliderSlick = ({slides}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
                {slides.map(slide =>(
                    <div className="slide">
                        <a href="src/UI/MainPage/PopularCategories/SliderSlick#">
                            <img src={slide.img} alt="2"/>
                        </a>
                        <a href="src/UI/MainPage/PopularCategories/SliderSlick#" className="link">{slide.category}</a>
                        <p>{slide.title}</p>
                    </div>
                ) )}
            </Slider>
        </div>
    );
}

export default SliderSlick;
