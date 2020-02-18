import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CvContainer from '../containers/cv/index.css';
import Box from 'components/box';
import Head from 'components/head';
import Layout from 'components/layout';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <CvContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: data.aboutJson.content.childMarkdownRemark.html,
          }}
        />
      </CvContainer>
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
