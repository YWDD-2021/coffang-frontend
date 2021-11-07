import React from 'react';
import styled from 'styled-components';
import * as logo from '../../public/coffang_logo_blue.svg';

interface Props {
    userinfo : string;
}

const Header: React.FC<Props> = ({userinfo}) =>(
    <Logo></Logo>
    <Menu>
    </Menu>
    <Login></Login>
);

const Logo = styled.img`
    
`;

const Menu = styled.div`
    
`;
const Login = styled.div`
`;

export default Header;