import styled  from "styled-components";

export const StyledSidebar = styled.div`
height: 100%;
background: aqua;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px; 

`;

export const StyledSidebarImage = styled.img`
width: ${(props) => `$(props.width)px` || 'initial'};
height: ${(props) => `$(props.height)px` || 'initial'};
cursor: pointer;
margin-bottom: 20px;
`;

export const RemainImage = styled.div`
background: grey;
height: 100%;
width: 100%;
`;



/*
const StyledSidebarOption = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 100px;
height: 80px;
margin-bottom: 12px;
cursor: pointer;
background: ${(props) => props.background}
`;

const StyledOptionLabel = styled.label`
width: 50px;
font-size:12px;
text-align: center;
cursor:inherit;
`;

export {StyledSidebarOption, StyledOptionLabel};

**/
