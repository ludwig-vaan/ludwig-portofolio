import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import BlogPostPreviewList from '../components/blog/blog-post-preview-list';
import { Container } from '../containers/blog/index.css';
// import GraphQLErrorList from '../components/graphql-error-list';
// import SEO from '../components/seo';
import Layout from '../components/layout';

// import { responsiveTitle1 } from '../components/typography.module.css';

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = props => {
  const { data, errors } = props;

  //   if (errors) {
  //     return (
  //       <Layout>
  //         <GraphQLErrorList errors={errors} />
  //       </Layout>
  //     );
  //   }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      {/* <SEO title="Archive" /> */}
      <Container>
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewList
            title="Archive"
            nodes={postNodes}
            browseMoreHref="/blog/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default ArchivePage;
