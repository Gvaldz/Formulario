import React from 'react';
import styled from 'styled-components';

const Textstyled = styled.p`
    font-size: 16px;
    color: #333;
    margin: 10px 0;
    line-height: 1.5;
`;

function Text(props) {
    return (
        <div style={{width:"100%"}}>
            <Textstyled>{props.text}</Textstyled>
        </div>
    );
}

export default Text;
