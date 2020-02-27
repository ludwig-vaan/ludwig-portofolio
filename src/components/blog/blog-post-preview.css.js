import styled from 'styled-components';

export const Container = styled.div`
  display: blog;
  color: inherit;
  text-decoration: none;

  .inList {
    @media (min-width: 675px) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 2em;
    }
    color: #697a90;
    text-decoration: none;
  }
`;

export const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: #e7ebed;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin: 1rem 0 0.5rem;

  @media (min-width: 450px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (min-width: 675px) {
    font-size: 21px;
    line-height: 30px;
  }
  @media (hover: hover) {
    .root:hover & {
      text-decoration: underline;
    }
  }

  @media (min-width: 675px) {
    .inList {
      margin-top: 0;
    }
  }
`;

export const Excerpt = styled.div`
  p {
    margin: 0.5em 0;
  }

  strong {
    font-weight: 600;
  }
`;

export const Dated = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #b4bcc7;
`;
