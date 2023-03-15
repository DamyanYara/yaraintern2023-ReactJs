import styled from 'styled-components';

export const StyledHeader = styled.div`
height: 100px;
width: 100%;
background: aqua;
`;

export const StyledImage = styled.img`
width: ${(props) => `$(props.width)px` || 'initial'};
height: ${(props) => `$(props.height)px` || 'initial'};
cursor: pointer;
`;