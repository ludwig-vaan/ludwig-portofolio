import styled from 'styled-components';
import { breakpoints } from '../global.css';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 2em;
  }
`;

export const Grid = styled.div`
  @media (min-width: 675px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
    grid-template-columns: 3fr 1fr;
  }
`;

export const MainContent = styled.div`
  a {
    color: #156dff;
    @media (hover: hover) {
      :hover {
        color: inherit;
      }
    }
  }
  h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 600;
  }

  figure {
    margin: 0;
    padding: 0;

    img {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin: 1rem 0 2rem;

  @media (min-width: ${breakpoints.phone}px) {
    font-size: 24px;
    line-height: 33px;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 49px;
    line-height: 57px;
  }
`;

export const MainImageContainer = styled.div`
  display: block;
  position: relative;
  background: hsl(200, 14%, 92%);
  padding-bottom: calc(9 / 21 * 100%);

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: 992px;
    margin: 0 auto;
    padding-bottom: calc(9 / 21 * 992px);
  }
  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    vertical-align: top;
    object-fit: cover;
  }
`;

export const PublishedAt = styled.div`
  font-size: 14px;
  line-height: 21px;
  margin: 2rem 0 3rem;
  color: #697a90;
`;

export const Categories = styled.div`
  border-top: 1px solid #e7ebed;
  margin: 2rem 0 3rem;

  ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  ul li {
    padding: 0.25rem 0;
  }
`;

export const CategoriesHeadline = styled.h3`
  margin: 0.5rem 0 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;
