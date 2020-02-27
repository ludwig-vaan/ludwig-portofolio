import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { Container, Headline, List, Item, Avatar } from './author-list.css';

function AuthorList({ items, title }) {
  return (
    <Container>
      <Headline>{title}</Headline>
      <List>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <Item key={_key}>
              <div>
                <Avatar>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=""
                    />
                  )}
                </Avatar>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

export default AuthorList;
