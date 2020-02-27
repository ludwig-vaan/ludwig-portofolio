import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 960px;
  margin: 0 auto;
  border-top: 1px solid #b4bcc7;
  color: gray;
  a {
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: #156dff;
      }
    }
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 3.5em 1.5em 1.5em;
  margin: 0 auto;

  @media (max-width: 450px) {
    padding: 1.5em 1.5em 1.5em;
  }
`;

export const SiteInfo = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 21px;
`;
