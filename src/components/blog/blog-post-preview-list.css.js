import styled from 'styled-components';

export const Container = styled.div``;

export const Headline = styled.h2`
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 2rem 0;
  margin-top: 0;

  font-size: 18px;
  line-height: 27px;

  @media (min-width: 450px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (min-width: 675px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`;

export const BrowseMoreNav = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    display: inline-block;
    padding: 0.5rem 0;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      :hover {
        color: #156dff;
      }
    }
  }
`;
