import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.less';
import { GlobalStyle } from "./styles/app.css";
import Header from "./components/Header/index";
import Sidebar from "./components/Sidebar/index";

const App = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));