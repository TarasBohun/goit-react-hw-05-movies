import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderList,
  HeaderItem,
  StyledLink,
} from './Layout.styled';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      {' '}
      <Header>
        <HeaderList>
          <HeaderItem>
            <StyledLink to="/">Home</StyledLink>
          </HeaderItem>
          <HeaderItem>
            <StyledLink to="/movies">Movies</StyledLink>
          </HeaderItem>
        </HeaderList>
      </Header>
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>footer</footer> */}
    </Container>
  );
};
