import Head from 'next/head';
// import PropTypes from 'prop-types';
// import { useSiteUrl } from '@/hooks';

const HeaderTagsRenderer = (props) => {
  const { title, metaTitle, description, image, children } = props;

  // const siteUrl = useSiteUrl();

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" key="descr" content={description} />
      )}
      <meta property="og:type" key="ogType" content="website" />
      {(title || metaTitle) && (
        <meta key="ogTytle" property="og:title" content={metaTitle || title} />
      )}
      {description && (
        <meta key="ogDescr" property="og:description" content={description} />
      )}

      {image && <meta property="og:image" key="ogImage" content={image} />}
      {/* <meta property="og:url" key="ogUrl" content={siteUrl} /> */}
      <meta property="og:site_name" key="ogSiteName" content="Site name" />

      <meta name="linkedin:card" key="linkedinCard" content="summary" />
      {title && (
        <meta name="linkedin:title" key="linkedinTitle" content={title} />
      )}
      {description && (
        <meta
          name="linkedin:description"
          key="linkedinDescr"
          content={description}
        />
      )}
      <meta
        name="linkedin:site"
        key="linkedinSite"
        content="https://levannatsvlishvili.netlify.app/"
      />
      <meta
        name="linkedin:creator"
        key="linkedinCreator"
        content="https://levannatsvlishvili.netlify.app/"
      />
      {image && (
        <meta name="linkedin:image" key="linkedinImage" content={image} />
      )}

      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="icon" type="image/png" href="/portfolio.svg" />
      {children}
    </Head>
  );
};

// HeaderTagsRenderer.propTypes = {
//   title: PropTypes.string,
//   metaTitle: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   children: PropTypes.node,
// };

// HeaderTagsRenderer.defaultProps = {
//   title: '',
//   metaTitle: '',
//   description: '',
//   image: '',
//   children: null,
// };

export default HeaderTagsRenderer;
