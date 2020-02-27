import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 1.5rem;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 2rem 4rem;
  }
`;
