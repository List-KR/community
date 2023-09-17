import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Redirect } from '@docusaurus/router';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <meta name="google-site-verification" content="GsgoCP3kPJHC9R9qlY-Zeri-K7Mg8wdMW1R8PgSxnKg" />
      </Head>
      <Redirect to='/docs/'/>
    </Layout>
  );
}
