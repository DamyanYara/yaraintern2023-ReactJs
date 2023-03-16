import React from "react";
import { Row, Col } from "react-flexa";
import { Route,Switch } from "react-router-dom";
import Header from "./MainContainer/Header";
import Sidebar from "./MainContainer/Sidebar";
import Form from "./Form";
import TableForm from "./Table/index";


const MainContainer = () =>{

    const logoWidth = 100;


    return(
    <>    
        <Header logoWidth = {logoWidth} />

        <Row gutter='0px'>
            <Col xs={`${logoWidth}px`} gutter='0px' >
                <Sidebar/>
            </Col>
            <Col xs={`calc(100vw)- ${logoWidth}px`} gutter='0px'>
                <Switch>
                    <Route exact path='/form' component={Form}/>
                    <Route exact path='/table' component={TableForm}/>
                </Switch>
            </Col>

        </Row>

    </>
    )

}

export default MainContainer;