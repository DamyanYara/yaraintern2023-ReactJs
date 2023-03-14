import styled, {createGlobalStyle} from "styled-components";

//function createGlobalStyle from library styled-components
export const GlobalStyle = createGlobalStyle`
html {
    font-family: "Gill Sans", sans-serif;
    font-size: 16px;

}
`;
export const StyledImage = styled.img`
width: ${(props) => `$(props.width)px` || 'initial'};
height: ${(props) => `$(props.height)px` || 'initial'};
cursor: ${(props) => `$(props.cursor)px` || 'inherit'};
`;

export const StyledInput = styled.input`
width: 100%;
`;
