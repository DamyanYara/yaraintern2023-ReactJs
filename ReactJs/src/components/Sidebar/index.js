
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Row, Col} from 'react-flexa';
import { StyledImage } from "../../styles/app.css";
import {StyledSidebarOption, StyledOptionLabel, StyledSidebarImage, HandleContainer, RemainImage} from './style.css'
import foto from '../../assets/images/logo2.png';
import { StyledSidebar } from "./style.css";

const Sidebar = () => {
    const history = useHistory();
    const logoWidth = 100


    return (
        <Row gutter= '0px'>
            <Col xs={`${logoWidth}px`} gutter='0px' style ={{height:`calc(100vh - ${logoWidth}px)`}}>
            <StyledSidebar>
            <StyledSidebarImage
                src={foto} alt='Foto' height={logoWidth/2} width={logoWidth/2}
            />
             <StyledSidebarImage
                src={foto} alt='Foto' height={logoWidth/2} width={logoWidth/2}
            />
           </StyledSidebar>
            </Col>
            <Col xs = {`calc(100vw - ${logoWidth}px)`} gutter='0px'>
                <RemainImage/>
            </Col>
            
        </Row>
    )
}

export default Sidebar;

/*
const Sidebar = ({logoWidth}) => {
    const history = useHistory();
    const optionImageWidth = logoWidth/2;
    
    const menuOptions = [
        {label: 'Form', route: '/form'},
        {label: 'Table', route: '/table'},
    ];

    const [options, setOptions] = useState(menuOptions);

    const handelOptionClick = (label) => {
        setOptions((prev) => prev.map((item) => ({...item, background: item.label ==label? '#E9EFF4' : 'transparent'})));
    }

    return (
        <Row
            gutter = '0px'
            style ={{background: 'white'}}
        >
            <Col
                xs={`${logoWidth}px`}
                gutter='0px'
                style={{justifyContent: 'center', height: `calc(100vh) - ${logoWidth}px)`}}
            >
            {options.map((option)=>(
                <StyledSidebarOption
                    key={option.label}
                    onClick={() =>{
                        history.push(option.route);
                        handelOptionClick(option.label);
                    }}
                    background={option.background || 'transparent'}
                >

                    <StyledImage
                        src={foto}
                        width={`${optionImageWidth}px`}
                        height={`${optionImageWidth}px`}
                    />
                    <StyledOptionLabel>{option.label}</StyledOptionLabel>
                </StyledSidebarOption>
            ))}
            </Col>
        </Row>
    );
}

export default Sidebar;
**/