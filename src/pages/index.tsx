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
        <meta name="msvalidate.01" content="03372A5D8B91E88EB69C3E91197377B8" />
        <meta name="naver-site-verification" content="5294a2066a2b2c69bd4a4950288f1a23842fc67f" />
      </Head>
      <Redirect to='/docs/'/>
    </Layout>
  );
}
