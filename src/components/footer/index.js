import React from 'react';
import { Container, Wrapper, SiteInfo } from './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <Container>
    <Wrapper>
      <SiteInfo>
        <FontAwesomeIcon icon={faCode} color="gray" size="xs" /> with{' '}
        <FontAwesomeIcon icon={faHeart} color="red" size="xs" /> by Ludwig V.
        &copy; {new Date().getFullYear()}, built with{' '}
        <a href="https://www.sanity.io">Sanity</a> &amp;{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </SiteInfo>
    </Wrapper>
  </Container>
);

export default Footer;
