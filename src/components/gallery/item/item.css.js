import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const SubTitle = styled.div`
  color: #757575;
  line-height: 1.2;
  margin: 2rem 2rem 2rem 0rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
