import { isFuture, parseISO, format } from 'date-fns';

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function cn(...args) {
  return args.filter(Boolean).join(' ');
}

export function getBlogUrl(publishedAt, slug) {
  const date = parseISO(publishedAt);
  const dateSegment = format(date, 'yyyy/MM');
  return `/blog/${dateSegment}/${slug.current || slug}/`;
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt);
}
