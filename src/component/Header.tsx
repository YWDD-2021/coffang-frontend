import React from 'react';
import styled from 'styled-components';
import { ReactComponent as logo } from '../asset/image/coffang_logo_blue.svg';
import { Link } from 'react-router-dom';
import { User } from '../model/user';

interface HeaderProps {
  user: User | null;
}

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <Logo/>
     <Login href="http://localhost:8080/oauth2/authorization/google">Login</Login>
    </HeaderDiv>
  )
};
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
const Login = styled.a`
`;

export default Header;
