/* eslint-disable react/display-name */
import React from 'react';
import Figure from './Figure';

const Serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
};
export default Serializers;
