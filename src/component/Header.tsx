import React from 'react';
import styled from 'styled-components';
import { ReactComponent as logo } from '../asset/image/coffang_logo_blue.svg';

interface Props {
  user: string | null;
}

const Header: React.FC<Props> = ({ user }: Props) => (
  <HeaderDiv>
    <Logo/>
    <Menu>
      <MenuText>SHOP ALL</MenuText>
      <MenuDetail/>
    </Menu>
    <Menu>
      <MenuText>COFFEE</MenuText>
      <MenuDetail/>
    </Menu>
    <Menu>
      <MenuText>BREWING</MenuText>
      <MenuDetail/>
    </Menu>
    <Menu>
      <MenuText>SERVEWARE</MenuText>
      <MenuDetail/>
    </Menu>
    <Login>{user}</Login>
  </HeaderDiv>
);
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${(props)=> props.theme.color.Line};
`;
const Logo = styled(logo)`
  width: 40px;
  height: 40px;
  margin-left: 60px;
  margin-right: 20px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;
const MenuText = styled.p`
  text-align: center;
`;
const MenuDetail = styled.div` 
  width: 70px;
  border : solid 2px ${(props)=> props.theme.color.PrimaryBG};
`;
const Login = styled.div`
`;

export default Header;
