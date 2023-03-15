import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.less';
import { GlobalStyle } from "./styles/app.css";
import Header from "./components/MainContainer/Header";
import Sidebar from "./components/MainContainer/Sidebar";
import ErorrPage from "./components/ErorrPage";
import MainContainer from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/error' component={ErorrPage}></Route>
                <Route path='/' component={MainContainer}></Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));