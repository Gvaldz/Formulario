import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #5f82ff;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.6);

    &:hover {
        background-color: #4347be;
    }
`;

function Button({title, onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;