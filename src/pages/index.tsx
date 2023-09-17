import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from '@docusaurus/router';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <head>
        <meta name="google-site-verification" content="GsgoCP3kPJHC9R9qlY-Zeri-K7Mg8wdMW1R8PgSxnKg" />
      </head>
      <Redirect to='/docs/'/>
    </Layout>
  );
}
