import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h2`
    font-size: 24px;
    color: #000;
    margin: 20px 0;
    text-align: center;
`;

function Title(props) {
    return (
        <div>
            <TitleStyled>{props.title}</TitleStyled>
        </div>
    );
}

export default Title;
