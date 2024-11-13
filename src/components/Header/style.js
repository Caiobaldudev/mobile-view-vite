import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavMenu = styled.nav`
  text-transform: uppercase;
  display: flex;
  gap: 1.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    
    &:hover {
      color: #ddd;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  width: 150px;
  transition: width 0.3s ease;

  &:focus {
    width: 200px;
    outline: none;
  }
`;
