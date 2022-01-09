import React,{ useState } from 'react';
import styled from 'styled-components';
import { User } from '../model/user';
import Header from '../component/Header';
import ContentBox from '../component/ContentBox';

interface MainPageProps {
	user: User | null;
}

const Main: React.FC<MainPageProps> = ({}) => {
  const [menu, setMenu] = useState('shop all');
  return(
    <>
      <Header />
      <MainPage>
        <MenuContainer>
          <MenuDetail>
            <MenuText>SHOP ALL</MenuText>
            <MenuLine/>
          </MenuDetail>
          <MenuDetail>
            <MenuText>COFFEE</MenuText>
            <MenuLine/>
          </MenuDetail>
          <MenuDetail>
            <MenuText>BREWING</MenuText>
            <MenuLine/>
          </MenuDetail>
          <MenuDetail>
            <MenuText>SERVEWARE</MenuText>
            <MenuLine/>
        </MenuDetail>
        </MenuContainer>
        <ContentContainer>
          <ContentBox/>
        </ContentContainer>
      </MainPage>
    </>
  )
};

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px ${(props)=> props.theme.color.Line};
`;
const MenuDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;
const MenuText = styled.p`
  text-align: center;
`;
const MenuLine = styled.div` 
  width: 70px;
  border : solid 2px ${(props)=> props.theme.color.PrimaryBG};
`;

const ContentContainer = styled.div``;
export default Main;
