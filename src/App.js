import React from "react";
import "./style.css";
import {BrowserRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from "../src/BLL/redux-store";
import MainPage from "./UI/MainPage/MainPage";


class App extends React.Component {
    render() {
        return (
            <>
                <MainPage/>
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
