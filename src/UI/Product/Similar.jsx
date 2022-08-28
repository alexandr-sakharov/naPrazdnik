import React from 'react';
import ProductCard from "../MainPage/Product/ProductCard";

const Similar = () => {
    return (
        <section id="similar" className="similar">
            <div className="container">
                <h2>Похожие впечатления</h2>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <ProductCard/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <ProductCard/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </section>

);
};

export default Similar;