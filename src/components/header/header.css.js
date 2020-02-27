import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
  a {
    color: #757575;
    ${'' /* transition: color 0.2s ease; */}
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
