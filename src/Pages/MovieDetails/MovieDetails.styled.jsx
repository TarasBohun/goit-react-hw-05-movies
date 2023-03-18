import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px;
`;

export const ContainerMovie = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 30px;
`;

export const Description = styled.div`
  margin-left: 30px;

  width: 400px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 5px;

  margin-bottom: 10px;
`;
