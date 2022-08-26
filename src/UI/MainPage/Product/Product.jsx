import React from 'react';
import ProductCardBig from "./ProductCardBig";
import ProductCard from "./ProductCard";

const Product = () => {
    const currentLocation = "Москве"
    return (<section id="products" className="products">
        <div className="container">
            <div className="row prodsheadrow">
                <div className="col-xs-12 col-md-7">
                    <h2>Лучшие впечатления в
                        <span id="currentcity">{currentLocation}</span>
                    </h2>
                </div>
                <div className="col-xs-12 col-md-5 tar">
                    <div className="categbtns">
                        <button className="active">НОВОЕ</button>
                        <button>ПОПУЛЯРНОЕ</button>
                        <button>АКЦИИ</button>
                    </div>
                </div>
            </div>
            <div className="row productsrow">
                <div className="col-xs-12 col-md-8">
                    <ProductCardBig/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <ProductCard/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <ProductCard/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <ProductCard/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <ProductCard/>
                </div>
                <div className="showmore">
                    <button>Показать ещё
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.33147e-08 0.882655C5.62391e-08 0.656005 0.0991863 0.438073 0.28764 0.263727C0.674467 -0.0762472 1.30926 -0.0762472 1.69608 0.263727L4.71135 2.90507L7.72661 0.25501C8.11344 -0.0849641 8.74823 -0.0849641 9.13505 0.25501C9.52188 0.594984 9.52188 1.15289 9.13505 1.49286L5.41557 4.76185C5.22712 4.92748 4.97915 5.01465 4.71135 5.01465C4.44354 5.01465 4.19558 4.91876 4.00712 4.76185L0.28764 1.50158C0.0991863 1.32724 5.05027e-08 1.10059 5.33147e-08 0.882655Z"
                                fill="#FF6B45"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>);
};

export default Product;
