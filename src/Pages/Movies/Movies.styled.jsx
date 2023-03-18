import styled from 'styled-components';

export const ContainerMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 10px;
  /* text-align: center; */
`;

// export const BtnInput = styled.button`
//   background-color: #fff;
// `;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: 10px;
`;

export const Item = styled.li`
  width: 200px;
  background-color: #f2e4d2;
  border-radius: 5px;

  padding: 5px;
`;
