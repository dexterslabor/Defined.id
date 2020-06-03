import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Hello = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {title, tagline} = siteConfig;

  return <div>{title}</div>;
};