import { Link } from 'gatsby';
import React from 'react';
import BlogPostPreview from './blog-post-preview';
import {
  Container,
  Headline,
  List,
  BrowseMoreNav,
} from './blog-post-preview-list.css';

function BlogPostPreviewGrid(props) {
  return (
    <Container>
      {props.title && <Headline>{props.title}</Headline>}
      <List>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </List>
      {props.browseMoreHref && (
        <BrowseMoreNav>
          <Link to={props.browseMoreHref}>
            {props.browseMoreHref === '/blog/'
              ? 'Latest blog posts'
              : 'Browse more'}
          </Link>
        </BrowseMoreNav>
      )}
    </Container>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default BlogPostPreviewGrid;
