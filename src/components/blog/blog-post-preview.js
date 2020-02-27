import React from 'react';
import { format, parseISO } from 'date-fns';
import { Link } from 'gatsby';
import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import PortableText from './portableText';
import {
  Container,
  LeadMediaThumb,
  TextContainer,
  Title,
  Excerpt,
  Dated,
} from './blog-post-preview.css';

function BlogPostPreview(props) {
  const date = parseISO(props.publishedAt);
  const dateSegment = format(date, 'MMMM do, yyyy');

  return (
    <Container className="root">
      <Link
        className={'inList'}
        to={getBlogUrl(props.publishedAt, props.slug.current)}
      >
        <LeadMediaThumb>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </LeadMediaThumb>
        <div>
          <Title>{props.title}</Title>
          {props._rawExcerpt && (
            <Excerpt>
              <PortableText blocks={props._rawExcerpt} />
            </Excerpt>
          )}
          <Dated>{dateSegment}</Dated>
        </div>
      </Link>
    </Container>
  );
}

export default BlogPostPreview;
