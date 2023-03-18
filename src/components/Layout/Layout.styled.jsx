import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #cfa5a5;

  padding: 10px;
  /* outline: 1px solid red; */
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderItem = styled.li`
  padding: 10px 30px;
  /* border: 1px solid black; */
  border-radius: 10px;

  font-size: 20px;
  font-weight: 600;

  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: azure;

  &.active {
    color: #3c1010;
  }
`;
