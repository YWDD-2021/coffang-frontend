import React from 'react';
import styled from 'styled-components';

const ContentBox : React.FC = () =>{
    return (
        <>
            <ContextBoxDiv></ContextBoxDiv>
        </>
    )
}

const ContextBoxDiv = styled.div`
    width: 200px;
    height: 300px;
    border: solid 1px black;
`;

export default ContentBox;

