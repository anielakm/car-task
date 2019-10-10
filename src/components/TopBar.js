import React from 'react';
import Logo from '../utilis/img/logo.jpg'
import styled from 'styled-components'

const TopContainer = styled.div`
background-color:white;
width:100%;
text-transform:uppercase;
font-size:16px;
padding:1% 3%;
letter-spacing:1px;

img{ padding-right:8px;}

span{
    font-weight:600;
}

`;

const TopBar = () => {
    return (<TopContainer>
        <img src={Logo} alt="" /><span>logo</span>ipsum
        </TopContainer>);
}

export default TopBar;