import React from 'react';
import styled from 'styled-components';
import logo from '../asset/image/coffang_logo_blue.svg';

interface Props {
  user: string | null;
}

const Header: React.FC<Props> = ({ user }: Props) => (
  <HeaderDiv>
    <Logo src={logo} />
    <Menu>
      <p>SHOP ALL</p>
      <p>COFFEE</p>
      <p>BREWING</p>
      <p>SERVEWARE</p>
    </Menu>
    <Login>{user}</Login>
  </HeaderDiv>
);
const HeaderDiv = styled.div`
  height: 80px;
  border-bottom: 1px solid;
`;
const Logo = styled.img``;
const Menu = styled.div``;
const Login = styled.div``;

export default Header;
