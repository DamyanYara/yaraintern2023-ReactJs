import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.less';
import { GlobalStyle } from "./styles/app.css";
import Header from "./components/Header/index";
import Sidebar from "./components/Sidebar/index";
import ErorrPage from "./components/ErorrPage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/error' component={ErorrPage}></Route>
                <Route path='/'> <Header></Header> <Sidebar></Sidebar></Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));