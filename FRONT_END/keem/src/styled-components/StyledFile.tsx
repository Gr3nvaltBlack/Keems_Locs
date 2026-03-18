import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyled = styled.button `
    border-radius: 30px;
    border: none;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Montserrat';
    background-color: #e0b159ff;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 84%;
    margin: auto;
`;
export { ButtonStyled };


const ButtonStyledOff = styled.button `
border-radius: 30px;
    border: none;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Montserrat';
    background-color: #e0b159ff;
    opacity: 0.6;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 84%;
    margin: auto;
`;
export { ButtonStyledOff }

const Div = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #e5c1a3;
    margin-top: 5rem;
    gap: 6rem;
`;
export { Div };


const ImageStyled = styled.img `
    width: 95%;
    object-fit: cover;
    border-radius: 1%;
`;
export { ImageStyled }


const LinkStyled = styled(Link) `
    color: #000;
    width: 100%;
    margin: 0;
    &::hover {
        text-decoration: none;
    }
`;
export { LinkStyled }
