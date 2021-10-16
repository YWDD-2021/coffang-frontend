import React from "react";
import styled from "styled-components";

const MainPage= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainHeader= styled.div`
  display: flex;
  flex-direction : row;
`;

const Brand = styled.div`
`;
const LoginBtn = styled.div`
`;

const MainContent = styled.div`
`;

const ItemList = styled.div`
`;

const Main = ()=>{
    <MainPage>
      <MainHeader>
          <Brand></Brand>
          <LoginBtn></LoginBtn>
      </MainHeader>
      <MainContent>
      </MainContent>
    </MainPage>
}