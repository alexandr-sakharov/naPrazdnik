import React from "react";
import "./style.css";
import './reset.css'
import {BrowserRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "../src/BLL/redux-store";
import MainPage from "./UI/MainPage/MainPage";
import Category from "./UI/Category/Category";
import Cart from "./UI/Cart/Cart";
import Post from "./UI/Post/Post";
import Product from "./UI/Product/Product";
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";


class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <main>
                    <MainPage/>
                </main>
                <Footer/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
const AppContainer = compose(
    connect(mapStateToProps, null),
)(App);

const PrazdnikApp = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}
export default PrazdnikApp;
