import React from 'react';
import Description from "./Description";
import MoreText from "./MoreText";
import Steps from "../MainPage/Steps/Steps";
import Variants from "../MainPage/Variants/Variants";
import Reviews from "../MainPage/Reviews/Reviews";
import Faq from "./Faq";
import Similar from "./Similar";
import Posts from "../MainPage/Posts/Posts";
import Subscribe from "../MainPage/Subscribe/Subscribe";

const Product = () => {
    return (
        <>
            <main>
                <section id="texts" className="texts">
                    <div className="container">
                        <div className="row">
                            <Description/>
                            <Description/>
                            <MoreText/>
                        </div>
                    </div>
                </section>

                <Steps/>
                <Variants/>
                <Reviews/>
                <Faq/>
                <Similar/>

                <Posts />
                <Subscribe/>
            </main>
        </>
);
};

export default Product;