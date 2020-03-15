import React from 'react';
import { format, formatDistance, differenceInDays } from 'date-fns';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import {
  Container,
  Grid,
  MainContent,
  Title,
  MainImageContainer,
  PublishedAt,
  Categories,
  CategoriesHeadline,
} from './blog-post.css';
import { imageUrlFor } from '../lib/image-url';
import { buildImageObj } from '../lib/helpers';
import PortableText from '../components/blog/portableText';
import AuthorList from '../components/blog/author-list';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      title
      slug {
        current
      }
      mainImage {
        ...SanityImage
        alt
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

export function toPlainText(blocks) {
  if (!blocks) {
    return '';
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map(child => child.text).join('');
    })
    .join('\n\n');
}

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  const { mainImage, _rawBody, publishedAt, authors, categories } = post;

  return (
    <Layout>
      <article>
        {mainImage && mainImage.asset && (
          <MainImageContainer>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url()}
              alt={mainImage.alt}
            />
          </MainImageContainer>
        )}
        <Container>
          <Grid>
            <MainContent>
              <Title>{post.title}</Title>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </MainContent>

            <aside>
              {publishedAt && (
                <PublishedAt>
                  {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? formatDistance(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM do, yyyy')}
                </PublishedAt>
              )}
              {authors && <AuthorList items={authors} title="Authors" />}
              {categories && (
                <Categories>
                  <CategoriesHeadline>Categories</CategoriesHeadline>
                  <ul>
                    {categories.map(category => (
                      <li key={category._id}>{category.title}</li>
                    ))}
                  </ul>
                </Categories>
              )}
            </aside>
          </Grid>
        </Container>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;
