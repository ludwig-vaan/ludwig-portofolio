/* eslint-disable quotes */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import { SubTitle } from '../components/gallery/item/item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {"Hi 👋🏻! I'm Ludwig, a french developer who "}
        <FontAwesomeIcon icon={faHeart} color="red" size="xs" />
        {' javascript!'}
      </Title>
      <SubTitle
        dangerouslySetInnerHTML={{
          __html: data.homeJson.subtext.childMarkdownRemark.html,
        }}
      />
      <SubTitle>
        Busy coding right now, updated content will be published as soon as
        possible.
      </SubTitle>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      headline {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      subtext {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
