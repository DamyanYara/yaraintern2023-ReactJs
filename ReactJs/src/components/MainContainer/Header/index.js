import React from "react";
import { Col, Row } from "react-flexa";
import styled from "styled-components";
import foto from "../../../assets/images/atfarm.png"
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./style.css";
import { StyledImage } from "./style.css";

const Header = () => {
    const history = useHistory();
    const logoWidth = 100
    return (
        <Row gutter= '0px'>
            <Col xs={`${logoWidth}px`} gutter='0px' style ={{height:`${logoWidth}px`}}>
            <StyledImage
                src={foto} alt='Foto' height={logoWidth} width={logoWidth}  
                onClick={() => history.push('/home')}
                cursor='pointer'  
            />
            </Col>
            <Col xs = {`calc(100vw - ${logoWidth}px)`} gutter='0px'>
            <StyledHeader></StyledHeader>
            </Col>
            
           
        </Row>
    )
}

export default Header;