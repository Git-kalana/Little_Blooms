import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

const SEO = ({ 
  title = "Little Blooms | Premier Child Care & Early Learning Center", 
  description = "Little Blooms provides nurturing, STEAM-infused child care for infants, toddlers, and preschoolers. Book your private tour at our Sunnyside center today!",
  canonical = "https://littleblooms.com/",
  ogType = "website",
  ogImage = "https://littleblooms.com/og-image.jpg",
  schema
}: SEOProps) => {
  const fullTitle = `${title} | Little Blooms`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Default Organization Schema (added to every page if not provided) */}
      {!schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Little Blooms Child Care",
            "url": "https://littleblooms.com",
            "logo": "https://littleblooms.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
