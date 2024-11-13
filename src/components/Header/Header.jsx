import React from 'react';
import { HeaderContainer, Logo, NavMenu, SearchContainer, SearchInput } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <NavMenu>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </NavMenu>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
