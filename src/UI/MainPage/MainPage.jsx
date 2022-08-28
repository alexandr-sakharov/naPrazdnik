import React from 'react';
import Header from "../Header/Header";
import First from "./First/First";
import PopularCategories from "./PopularCategories/PopularCategories";
import Steps from "./Steps/Steps";
import Variants from "./Variants/Variants";
import Reviews from "./Reviews/Reviews";
import Posts from "./Posts/Posts";
import Subscribe from "./Subscribe/Subscribe";
import Product from "./Product/Product";
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
        <>
            {/*<Header/>*/}
            <First />
            <PopularCategories/>
            <Product />
            <Steps/>
            <Variants/>
            <Reviews/>
            <Posts/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default MainPage;
